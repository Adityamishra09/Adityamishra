const express = require('express');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5500',
    credentials: true
}));

// Rate limiting to prevent spam
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});
app.use('/api/contact', limiter);

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Nodemailer transporter configuration
const createTransporter = () => {
    return nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        secure: true,
        port: 465,
        tls: {
            rejectUnauthorized: false
        }
    });
};

// Email template
const createEmailTemplate = (data) => {
    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #1e293b; margin-top: 0;">Contact Details:</h3>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Message:</strong></p>
                <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
                    ${data.message.replace(/\n/g, '<br>')}
                </div>
            </div>
            <div style="background: #f1f5f9; padding: 15px; border-radius: 5px; font-size: 12px; color: #64748b;">
                <p>This email was sent from your portfolio contact form at ${new Date().toLocaleString()}</p>
            </div>
        </div>
    `;
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Input validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid email address'
            });
        }

        // Message length validation
        if (message.length > 1000) {
            return res.status(400).json({
                success: false,
                message: 'Message is too long (max 1000 characters)'
            });
        }

        // Create transporter
        const transporter = createTransporter();

        // Email options
        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Send to yourself
            replyTo: email, // Reply-to set to sender's email
            subject: `New Contact Form Message from ${name}`,
            html: createEmailTemplate({ name, email, message }),
            text: `
                New Contact Form Message
                
                Name: ${name}
                Email: ${email}
                Message: ${message}
                
                Sent at: ${new Date().toLocaleString()}
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Send confirmation email to sender
        const confirmationMailOptions = {
            from: `"Aditya Mishra" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Thank you for contacting me!',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
                    <p>Hi ${name},</p>
                    <p>Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
                    <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #1e293b; margin-top: 0;">Your Message:</h3>
                        <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <p>Best regards,<br>Aditya Mishra<br>MERN Stack Developer</p>
                    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
                    <p style="font-size: 12px; color: #64748b;">This is an automated response. Please do not reply to this email.</p>
                </div>
            `
        };

        await transporter.sendMail(confirmationMailOptions);

        res.status(200).json({
            success: true,
            message: 'Message sent successfully!'
        });

    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again later.'
        });
    }
});

// Root route - serve index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
});

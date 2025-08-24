# Aditya Mishra - MERN Stack Developer Portfolio

A modern, responsive portfolio website showcasing the skills and projects of Aditya Mishra, a MERN Stack Developer. Built with HTML, CSS, and JavaScript featuring smooth animations and a production-ready design.

## 🚀 Features

### ✨ Modern Design
- Clean and professional layout
- Responsive design for all devices
- Modern gradient backgrounds
- Glassmorphism effects
- Smooth transitions and hover effects

### 🎭 Animations
- Loading screen with spinner
- Fade-in animations on scroll
- Typing effect for hero title
- Floating elements in hero section
- Particle effects
- Cursor trail effect
- Tilt effect on project cards
- Smooth parallax scrolling

### 📱 Responsive Layout
- Mobile-first approach
- Hamburger menu for mobile devices
- Optimized for all screen sizes
- Touch-friendly interactions

### 🛠️ Interactive Elements
- Smooth scrolling navigation
- Contact form with validation
- Hover effects on skill tags
- Clickable project cards
- Social media links

## 🏗️ Project Structure

```
potphoolio01/
├── index.html              # Main HTML file
├── styles.css              # CSS styles and animations
├── script.js               # Frontend JavaScript functionality
├── server.js               # Backend Express server with Nodemailer
├── package.json            # Node.js dependencies and scripts
├── .env                    # Environment variables (create from env.example)
├── .gitignore             # Git ignore rules
├── ecosystem.config.js     # PM2 production configuration
├── env.example            # Environment variables template
├── image/                  # Profile and project images
└── README.md              # Project documentation
```

## 🎨 Sections

### 1. Hero Section
- Developer name and title
- Professional description
- Call-to-action buttons
- Animated floating elements
- Particle effects

### 2. About Section
- Professional summary
- Skills showcase with interactive tags
- Professional image placeholder

### 3. Projects Section
- Featured project cards
- Project descriptions
- Live demo and GitHub links
- Hover animations

### 4. Contact Section
- Contact information
- Interactive contact form
- Social media links
- Professional styling

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Modern web browser
- Gmail account with App Password (for email functionality)

### Installation

#### 1. Clone and Install Dependencies
```bash
git clone <your-repo-url>
cd potphoolio01
npm install
```

#### 2. Environment Setup
1. Copy `env.example` to `.env`
2. Update the `.env` file with your email credentials:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   FRONTEND_URL=http://localhost:5500
   ```

#### 3. Gmail App Password Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account Settings > Security
3. Generate an App Password for "Mail"
4. Use this password in your `.env` file

#### 4. Start the Server
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start

# Frontend only (static files)
npm run preview
```

#### 5. Access the Application
- Frontend: `http://localhost:5500` (or your preferred port)
- Backend API: `http://localhost:3000`
- Health Check: `http://localhost:3000/api/health`

### Customization
1. **Personal Information**: Update the content in `index.html`
2. **Styling**: Modify colors and fonts in `styles.css`
3. **Functionality**: Add new features in `script.js`
4. **Images**: Replace placeholder images with actual photos

## 🎯 Key Technologies Used

### **Frontend**
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Poppins)

### **Backend**
- **Node.js**: Server runtime environment
- **Express.js**: Web application framework
- **Nodemailer**: Email sending functionality
- **Helmet**: Security middleware
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: Spam prevention

## 🌟 Animation Features

### CSS Animations
- `fadeInUp`: Elements slide up with fade-in effect
- `fadeInRight`: Elements slide in from right
- `float`: Floating elements with smooth movement
- `spin`: Loading spinner rotation

### JavaScript Animations
- Scroll-triggered animations
- Typing effect for hero title
- Particle system
- Cursor trail effect
- Tilt effect on cards

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Scheme

- **Primary**: #2563eb (Blue)
- **Secondary**: #667eea (Light Blue)
- **Accent**: #764ba2 (Purple)
- **Text**: #333 (Dark Gray)
- **Background**: #f8fafc (Light Gray)

## 🔧 Performance Features

- Lazy loading for images
- Optimized animations
- Efficient event handling
- Smooth scrolling
- Intersection Observer for animations

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Customization Guide

### Changing Personal Information
1. Update the name in the hero section
2. Modify the about section content
3. Update contact information
4. Change project details

### Modifying Colors
1. Update CSS custom properties in `styles.css`
2. Modify gradient backgrounds
3. Adjust hover effects

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style the section in `styles.css`
3. Add animations in `script.js`

## 🚀 Deployment

### **Local Development**
```bash
# Install dependencies
npm install

# Start backend server
npm run dev

# Frontend will be served at http://localhost:3000
```

### **Production Deployment**

#### **Option 1: PM2 (Recommended)**
```bash
# Install PM2 globally
npm install -g pm2

# Start with PM2
npm run pm2:start

# Monitor processes
npm run pm2:monit

# View logs
npm run pm2:logs
```

#### **Option 2: Traditional Deployment**
```bash
# Build and start
npm start

# Or use ecosystem config
pm2 start ecosystem.config.js --env production
```

### **Environment Variables**
Production mein `.env` file mein ye variables set karein:
```env
NODE_ENV=production
PORT=3000
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASS=your-production-app-password
FRONTEND_URL=https://yourdomain.com
```

### **Cloud Platforms**
- **Heroku**: Connect GitHub repo, set environment variables
- **Railway**: Deploy with automatic environment detection
- **Render**: Connect repo, set build command: `npm start`
- **DigitalOcean**: Use PM2 ecosystem configuration

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Name**: Aditya Mishra
- **Email**: adityamishra6674@gmail.com
- **Location**: Jabalpur, India
- **Skills**: MERN Stack, Full-Stack Development

## 🔐 Security Features

- **Rate Limiting**: Prevents spam and abuse
- **Helmet**: Security headers protection
- **CORS**: Controlled cross-origin access
- **Input Validation**: XSS and injection prevention
- **Environment Variables**: Secure configuration management

## 📧 Email Features

- **Professional Templates**: Beautiful HTML emails
- **Auto-replies**: User confirmation emails
- **Reply-to Setup**: Direct communication
- **Error Handling**: Graceful failure management
- **Logging**: Complete audit trail

## 🙏 Acknowledgments

- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Poppins)
- **Express.js**: Web framework
- **Nodemailer**: Email functionality
- **Modern CSS**: Advanced styling techniques
- **JavaScript ES6+**: Modern language features

## 🚨 Troubleshooting

### **Common Issues**

#### **Port Already in Use**
```bash
# Check what's using port 3000
netstat -ano | findstr :3000

# Kill the process
taskkill /F /PID <process_id>
```

#### **Email Not Sending**
1. Check `.env` file configuration
2. Verify Gmail App Password
3. Enable 2-Factor Authentication
4. Check server logs for errors

#### **CORS Errors**
1. Verify `FRONTEND_URL` in `.env`
2. Check CORS configuration in `server.js`
3. Ensure frontend and backend ports match

#### **Module Not Found Errors**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

---

**Built with ❤️ by Aditya Mishra**

*MERN Stack Developer | Full-Stack Engineer | Web Developer* 
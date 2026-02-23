# Stryvon - IT Consulting SPA

A modern, responsive single-page application for Stryvon IT Consulting, built with vanilla HTML, CSS, and JavaScript.

## 🎨 Design Features

### Color Palette
- **Primary**: Royal Blue (#1F3C88) - Trust, corporate feel
- **Secondary**: Electric Blue (#3A86FF) - Call-to-action highlights  
- **Accent**: Bright Orange (#FF6B35) - Buttons, highlights
- **Neutral**: Light Grey (#F4F6FA) and White (#FFFFFF)
- **Text**: Dark Charcoal (#1C1C1C) for headings, Medium Grey (#6B7280) for body

### Typography
- **Headings**: Poppins, Bold (H1–H4)
- **Body Text**: Open Sans, Regular
- **CTA Buttons**: All caps, semi-bold, with hover animations

## 🚀 Features

### Core Functionality
- **Single Page Application** with smooth scrolling navigation
- **Responsive Design** optimized for all devices
- **Interactive Elements** with hover effects and animations
- **Performance Optimized** with lazy loading and smooth transitions

### Sections
1. **Navigation Bar** - Sticky, transparent to solid on scroll
2. **Hero Section** - Full-width gradient with tech illustrations
3. **About Stryvon** - Company introduction with visual elements
4. **Services** - 6 service cards in responsive grid
5. **Why Choose Us** - USP section with gradient background
6. **Industries** - 6 industry icons with hover effects
7. **Case Studies** - Auto-advancing carousel with controls
8. **Team** - Leadership profiles with placeholder images
9. **Testimonials** - Client quotes carousel
10. **Contact Form** - Interactive form with validation
11. **Footer** - Company information and social links

### Interactive Elements
- **Carousels** for case studies and testimonials
- **Contact Form** with validation and notifications
- **Smooth Scrolling** navigation
- **Mobile Menu** with hamburger navigation
- **Scroll Progress Bar** at the top
- **Fade-in Animations** for sections
- **Hover Effects** on cards and buttons

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid, Flexbox, and animations
- **Vanilla JavaScript** - No frameworks, pure performance
- **Font Awesome** - Icon library
- **Google Fonts** - Poppins and Open Sans

## 📱 Responsive Design

- **Mobile First** approach
- **Breakpoints**: 480px, 768px, 1200px
- **Touch Friendly** interactions
- **Optimized** for all screen sizes

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Local web server (optional, for development)

### Installation

1. **Clone or Download** the project files
2. **Open** `index.html` in your browser
3. **Or** serve locally for development:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### File Structure
```
stryvon-spa/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎯 Customization

### Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #1F3C88;
    --secondary-color: #3A86FF;
    --accent-color: #FF6B35;
    --background-light: #F4F6FA;
    --text-dark: #1C1C1C;
    --text-medium: #6B7280;
}
```

### Content
- **Company Information**: Update text content in `index.html`
- **Services**: Modify service cards in the services section
- **Team Members**: Add/remove team member cards
- **Contact Details**: Update contact information and form fields

### Images
- Replace placeholder illustrations with actual images
- Add company logo to navigation
- Include real team photos
- Add actual case study images

## 🔧 Browser Support

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+

## 📊 Performance Features

- **Lazy Loading** for images (when added)
- **CSS Grid & Flexbox** for optimal layouts
- **Minimal JavaScript** bundle
- **Optimized Animations** using CSS transforms
- **Intersection Observer** for scroll animations

## 🎨 Animation Details

### Hover Effects
- **Service Cards**: Lift and shadow increase
- **Buttons**: Scale down on click, lift on hover
- **Industry Items**: Subtle upward movement

### Scroll Animations
- **Fade-in**: Sections appear as they enter viewport
- **Progress Bar**: Shows scroll progress at top
- **Navbar**: Transparent to solid background

### Carousel Features
- **Auto-advance**: Case studies (5s), testimonials (6s)
- **Manual Controls**: Previous/next buttons and dots
- **Keyboard Navigation**: Arrow keys support

## 📝 Form Features

### Contact Form
- **Real-time Validation** for required fields
- **Email Format** validation
- **Success/Error Notifications**
- **Form Reset** after successful submission

### Validation Rules
- Name: Required
- Email: Required, valid format
- Phone: Optional
- Message: Required

## 🔍 SEO Features

- **Semantic HTML** structure
- **Meta Tags** for description and viewport
- **Proper Heading** hierarchy (H1-H4)
- **Alt Text** ready for images
- **Structured Content** for search engines

## 🚀 Deployment

### Static Hosting
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repos
- **AWS S3**: Scalable static hosting

### Production Optimization
- **Minify CSS/JS** files
- **Compress Images** for web
- **Enable Gzip** compression
- **Set Cache Headers** for static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support:
- **Email**: hello@stryvon.com
- **Phone**: +1 (555) 123-4567

---

**Built with ❤️ for Stryvon IT Consulting** 
# Vocal Academy

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML](https://img.shields.io/badge/HTML-89.9%25-E34C26?logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-5.2%25-F7DF1E?logo=javascript&logoColor=black)](https://www.javascript.com/)
[![CSS](https://img.shields.io/badge/CSS-4.9%25-1572B6?logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![PWA](https://img.shields.io/badge/PWA-Ready-blueviolet?logo=pwa&logoColor=white)](#progressive-web-app)
[![Multilingual](https://img.shields.io/badge/Languages-English%20%7C%20Dari%20%7C%20Pashto-blue)](#internationalization)

A comprehensive **Progressive Web App (PWA)** designed to empower Afghan women by providing structured English language learning from foundational to advanced TOEFL preparation levels. Built with modern web technologies and accessible for offline learning.

## 🎯 Mission

To provide equitable access to quality English language education for Afghan women, bridging the gap between zero proficiency and TOEFL certification through an engaging, culturally-aware, and accessible learning platform.

## ✨ Key Features

### 📚 Comprehensive Learning System
- **Structured Curriculum**: Progressive lessons from beginner to advanced levels
- **TOEFL Preparation**: Specialized modules for Test of English as a Foreign Language
- **Interactive Lessons**: Engaging content with real-world examples and contextual learning
- **Progress Tracking**: Monitor your learning journey with detailed analytics

### 🔐 User Management
- **Secure Authentication**: User account system with secure credentials
- **Personalized Dashboard**: Track progress, bookmarks, and learning history
- **Admin Panel**: Comprehensive dashboard for content management and user oversight
- **Role-Based Access**: Different permission levels for students, instructors, and administrators

### 📱 Progressive Web App (PWA)
- **Offline Support**: Download lessons and study without internet connectivity
- **Installable**: Add to home screen for app-like experience
- **Fast Performance**: Optimized loading times and smooth user experience
- **Cross-Device Sync**: Seamless experience across phones, tablets, and desktops

### 🌍 Internationalization (i18n)
- **Multi-Language Support**: English, Dari, and Pashto interfaces
- **Culturally Relevant Content**: Materials tailored to Afghan context
- **Easy Language Switching**: Switch between languages with one click
- **RTL Support**: Full support for right-to-left text rendering

### 🎨 User Experience
- **Responsive Design**: Optimized for all screen sizes
- **Intuitive Navigation**: Clear and accessible user interface
- **Accessibility Features**: WCAG compliant for inclusive design

## 🏗️ Architecture

### Technology Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend & Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Real-time Features**: Supabase Real-time API
- **Hosting**: Compatible with modern hosting providers

### Project Structure
```
Vocal-Academy/
├── index.html              # Main entry point
├── css/                    # Stylesheets
│   ├── styles.css
│   └── responsive.css
├── js/                     # JavaScript modules
│   ├── app.js
│   ├── auth.js
│   ├── lessons.js
│   └── i18n.js
├── assets/                 # Images and media
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js 14+ (for development)
- Supabase account (for backend services)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/zafarikomail-cmd/Vocal-Academy.git
   cd Vocal-Academy
   ```

2. **Configure Environment Variables**
   - Create a `.env` file in the root directory:
   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Install Dependencies** (if using build tools)
   ```bash
   npm install
   ```

4. **Run Locally**
   - Open `index.html` directly in your browser, or
   - Use a local development server:
   ```bash
   npx http-server .
   ```

5. **Access the Application**
   - Navigate to `http://localhost:8080` (or your configured port)

## 📖 Usage

### For Students
1. **Register/Login**: Create your account or sign in
2. **Browse Lessons**: Explore the curriculum based on your level
3. **Complete Lessons**: Learn and practice at your own pace
4. **Take Assessments**: Test your knowledge with quizzes
5. **Prepare for TOEFL**: Access specialized TOEFL prep modules
6. **Track Progress**: Monitor your achievements and statistics

### For Administrators
1. **Access Admin Panel**: Navigate to the admin dashboard
2. **Manage Content**: Create, edit, and delete lessons
3. **Manage Users**: View user accounts and learning statistics
4. **Monitor Progress**: Track platform usage and student performance
5. **Configure Settings**: Manage languages, difficulty levels, and more

## 🌐 Internationalization

The platform supports multiple languages with complete UI translation:

- **English (en)**: Default interface language
- **Dari (fa)**: Persian language version
- **Pashto (ps)**: Pashto language version

### Language Switching
Users can change their preferred language from the settings menu. The application automatically remembers their choice.

## 📱 PWA Features

### Offline Access
- Lessons and materials are cached for offline availability
- Service Worker enables background functionality
- Content syncs when connection is restored

### Installation
1. Open the app in a supported browser
2. Look for the "Install" or "Add to Home Screen" option
3. Follow the browser prompts to install

## 🔒 Security Features

- **HTTPS Required**: All data transmission is encrypted
- **Secure Authentication**: User credentials handled securely via Supabase
- **Role-Based Access Control**: Users can only access appropriate content
- **Data Privacy**: Student data is protected and only accessible to authorized users

## 📊 Database Schema

### Core Tables
- **Users**: Student and instructor profiles
- **Lessons**: Course content and materials
- **Progress**: User learning progress and history
- **Assessments**: Quizzes and TOEFL practice tests
- **Submissions**: Student quiz and assessment submissions

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the Repository**: Click the fork button on GitHub
2. **Create a Feature Branch**: `git checkout -b feature/amazing-feature`
3. **Commit Changes**: `git commit -m 'Add amazing feature'`
4. **Push to Branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**: Submit your changes for review

### Development Guidelines
- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Test your changes before submitting
- Update documentation as needed
- Ensure accessibility standards are maintained

## 🐛 Bug Reports & Support

Found a bug or have a suggestion?

- **GitHub Issues**: [Report an issue](https://github.com/zafarikomail-cmd/Vocal-Academy/issues)
- **Email**: Contact through GitHub profile
- **Documentation**: Check the [Wiki](https://github.com/zafarikomail-cmd/Vocal-Academy/wiki)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👥 Team & Credits

**Project Lead**: [zafarikomail-cmd](https://github.com/zafarikomail-cmd)

## 🎓 Learning Resources

### External Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [Supabase Documentation](https://supabase.com/docs)
- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Web Accessibility](https://www.w3.org/WAI/)

### TOEFL Preparation
- [ETS Official TOEFL Site](https://www.ets.org/toefl)
- [Practice Materials](https://www.ets.org/toefl/test-takers/ibt/about/)

## 🚀 Roadmap

### Planned Features
- [ ] Mobile app (React Native)
- [ ] Video lesson support
- [ ] AI-powered grammar correction
- [ ] Voice pronunciation feedback
- [ ] Community discussion forums
- [ ] Instructor-led live sessions
- [ ] Advanced analytics dashboard
- [ ] Certificate generation
- [ ] Integration with language APIs
- [ ] Social sharing features

## 📈 Statistics & Impact

- **Platform Availability**: 24/7 offline-capable learning
- **Language Support**: 3 languages
- **Content Coverage**: Beginner to TOEFL Advanced
- **User Accessibility**: WCAG 2.1 compliant

## ⚡ Performance

- **Lighthouse Score**: Optimized for performance
- **Load Time**: < 3 seconds on 4G
- **Offline Functionality**: Works without internet
- **Storage**: Minimal footprint for mobile devices

## 🔄 Version History

### Latest Release
- See [Releases](https://github.com/zafarikomail-cmd/Vocal-Academy/releases) for version history and updates

## 💡 Tips for Success

1. **Set Learning Goals**: Define what you want to achieve
2. **Consistent Practice**: Study regularly, even 15 minutes daily
3. **Use Offline Mode**: Download lessons for commute study
4. **Take Assessments**: Test your knowledge frequently
5. **Join Community**: Connect with other learners
6. **Track Progress**: Monitor your improvement over time

## 🌟 Special Notes for Afghan Learners

This platform is specifically designed with Afghan women in mind:
- Content reflects cultural context and relevant examples
- Multiple language support for multilingual communities
- Accessible from areas with limited connectivity
- Affordable and free education initiative
- Safe and inclusive learning environment

## 📞 Get In Touch

Have questions or feedback? We'd love to hear from you!

- **GitHub**: [@zafarikomail-cmd](https://github.com/zafarikomail-cmd)
- **Issues**: [GitHub Issues](https://github.com/zafarikomail-cmd/Vocal-Academy/issues)

---

**Made with ❤️ for Afghan women empowerment through education**

Last Updated: May 2026

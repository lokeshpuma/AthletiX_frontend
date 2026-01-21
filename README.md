# AthletiX - Sports Social Media Platform

<p align="center">
  <img src="public/logo.png" alt="AthletiX Logo" width="200"/>
</p>

<p align="center">
  <em>A modern social media platform designed specifically for athletes, coaches, and sports enthusiasts.</em>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#available-scripts">Available Scripts</a>
</p>

---

## 🎯 Features

### Core Features
- **Home Feed** - Stay updated with posts from your sports network
- **User Profiles** - Showcase your athletic journey and achievements
- **Friends & Connections** - Build your sports community
- **Messages** - Private communication with fellow athletes
- **Notifications** - Stay informed about activities that matter to you

### Sports Features
- **Courses** - Browse and enroll in sports training courses
- **Events** - Discover and participate in sports events
- **Gaming** - Connect with esports enthusiasts
- **Tutorials** - Learn from expert-led sports tutorials
- **Videos** - Watch and share sports videos
- **Gallery** - Share your memorable sports moments
- **Analytics** - Track your performance metrics
- **Community** - Join sports-specific communities
- **Shop** - Browse sports equipment and merchandise
- **Sponsorships** - Find sponsorship opportunities
- **Work** - Explore sports-related job opportunities

### UI/UX Features
- 🌙 **Dark/Light Mode** - Toggle between themes for comfortable viewing
- 📱 **Responsive Design** - Optimized for all screen sizes
- 🎨 **Modern UI** - Clean, intuitive interface with Material-UI components
- ⚡ **Fast Performance** - Optimized for smooth user experience

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **React Router v7** | Client-side routing |
| **Material-UI (MUI)** | UI component library |
| **Recharts** | Data visualization & analytics |
| **SASS/SCSS** | CSS preprocessing |
| **Context API** | State management (Auth, Dark Mode) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/AthletiX_frontend.git
   cd AthletiX_frontend-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

The build folder contains the optimized production-ready application.

---

## 📁 Project Structure

```
AthletiX_frontend-master/
├── public/                 # Static assets
│   ├── index.html         # HTML template
│   └── logo.png           # Application logo
├── src/
│   ├── App.js             # Main app component with routing
│   ├── index.js           # App entry point
│   ├── style.scss         # Global styles & theme variables
│   ├── assets/            # Images and static assets
│   ├── components/        # Reusable UI components
│   │   ├── comments/      # Comments section
│   │   ├── emailPanel/    # Email functionality
│   │   ├── leftBar/       # Left sidebar navigation
│   │   ├── logoAnimation/ # Animated logo component
│   │   ├── navbar/        # Top navigation bar
│   │   ├── notifications/ # Notifications panel
│   │   ├── post/          # Post component
│   │   ├── posts/         # Posts feed
│   │   ├── rightBar/      # Right sidebar
│   │   ├── schedule/      # Schedule/Calendar panel
│   │   ├── share/         # Share/create post
│   │   ├── sportsChatbot/ # AI sports assistant
│   │   ├── stories/       # Stories component
│   │   └── userSwitch/    # User account switcher
│   ├── context/           # React Context providers
│   │   ├── authContext.js # Authentication state
│   │   └── darkModeContext.js # Theme state
│   └── pages/             # Page components
│       ├── home/          # Home feed
│       ├── login/         # Login page
│       ├── register/      # Registration page
│       ├── profile/       # User profile
│       ├── friends/       # Friends management
│       ├── messages/      # Messaging system
│       ├── courses/       # Courses catalog
│       ├── events/        # Events listing
│       ├── gaming/        # Gaming community
│       ├── gallery/       # Photo gallery
│       ├── videos/        # Video content
│       ├── tutorials/     # Tutorial videos
│       ├── analytics/     # Performance analytics
│       ├── community/     # Communities
│       ├── shop/          # Sports shop
│       ├── sponsorships/  # Sponsorship opportunities
│       └── work/          # Job board
├── package.json           # Project dependencies
└── README.md              # This file
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner |
| `npm run build` | Builds for production |
| `npm run eject` | Ejects from Create React App |

---

## 🎨 Dark Mode

The application features a comprehensive dark mode system:

### Features
- **Toggle** - Switch between light and dark themes via navbar button
- **Persistence** - Theme preference saved in localStorage
- **Optimized UI** - Carefully tuned colors for readability
- **Global Consistency** - All components support both themes

### Components with Dark Mode Support
- Navbar with improved contrast
- Animated logo with adjusted brightness
- Schedule/Calendar panel
- Email compose panel
- User account switcher
- All form elements and inputs

---

## 🔧 Configuration

### Theme Customization

Edit `src/style.scss` to customize theme variables:

```scss
$primary-color: #1976d2;
$secondary-color: #dc004e;
$background-light: #f5f5f5;
$background-dark: #121212;
```

### Adding New Pages

1. Create page component in `src/pages/`
2. Add route in `src/App.js`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```

---

## 📱 Responsive Design

AthletiX is fully responsive with breakpoints for:
- Mobile: < 600px
- Tablet: 600px - 960px
- Desktop: > 960px

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/)
- [Material-UI](https://mui.com/)
- [Recharts](https://recharts.org/)
- [React Router](https://reactrouter.com/)

---

<p align="center">
  Built with ❤️ for athletes worldwide
</p>


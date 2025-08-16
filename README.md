# Portfolio Website

A modern, responsive portfolio website built with React and FastAPI, showcasing professional experience, projects, and skills in data science and software development.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth CSS animations and transitions
- **Project Showcase**: Detailed project cards with technologies and descriptions
- **Experience Timeline**: Professional experience with current position handling
- **Contact Form**: Easy way for visitors to get in touch
- **Admin Dashboard**: Manage projects and experience through an intuitive interface
- **GitHub Pages Deployment**: Automated deployment to GitHub Pages

## 🛠️ Tech Stack

### Frontend
- **React** 19.1.1 - Modern UI framework
- **React Router** 7.8.0 - Client-side routing
- **CSS3** - Styling and animations
- **React Icons** 5.5.0 - Icon library

### Backend
- **FastAPI** - Modern, fast Python web framework
- **SQLite** - Lightweight database
- **SQLAlchemy** - SQL toolkit and ORM
- **Pydantic** - Data validation using Python type annotations

### Development Tools
- **Create React App** - React development setup
- **Git** - Version control
- **GitHub Pages** - Hosting and deployment

## 📁 Project Structure

```
portfolio/
├── backend/                 # FastAPI backend
│   ├── database/         # Database models and schemas
│   ├── routes/           # API endpoints
│   ├── main.py           # FastAPI application entry
│   └── requirements.txt  # Python dependencies
├── src/                  # React frontend
│   ├── components/       # React components
│   ├── assets/         # Images and static files
│   └── App.js          # Main React component
├── public/             # Public assets
├── build/              # Production build output
└── package.json        # Node.js dependencies
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Python 3.9+
- Git

### Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm start
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the server
uvicorn main:app --reload
```

## 🌐 Deployment

### GitHub Pages (Frontend)
The project is configured for GitHub Pages deployment. Due to Windows path length limitations, use manual deployment:

```bash
# Build the project
npm run build

# Deploy using git subtree
git subtree push --prefix build origin gh-pages
```

### Backend Deployment
For backend deployment, consider:
- **Heroku** - Free tier available
- **Railway** - Simple deployment
- **DigitalOcean** - VPS option
- **AWS EC2** - Scalable cloud solution

## 🔧 Available Scripts

### Frontend Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages (may need manual approach on Windows)
- `npm test` - Run tests

### Backend Scripts
- `uvicorn main:app --reload` - Start development server
- `python -m pytest` - Run tests (if tests are added)

## 📊 Features Overview

### Home Page
- Animated hero section with fade-in effects
- Featured projects showcase
- About me section with professional summary
- Contact information

### Projects Section
- Grid layout with project cards
- Technology tags for each project
- GitHub links and live demo links
- Responsive design for all screen sizes

### Experience Timeline
- Chronological display of work experience
- "Present" indicator for current positions
- Company names, roles, and duration
- Clean, professional presentation

### Admin Dashboard
- Secure login system
- Add/edit/delete projects
- Add/edit/delete experience entries
- Real-time updates to portfolio

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: [Your email]
- **LinkedIn**: [Your LinkedIn profile]
- **GitHub**: [Your GitHub profile]

---

Built with ❤️ using React and FastAPI
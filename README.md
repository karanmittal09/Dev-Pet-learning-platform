# 🐱 Dev-Pet - Developer Interview Practice Platform

A fun and interactive platform to practice developer interview questions with cute animals! Built with Node.js, Express, MongoDB, and EJS.

![Dev-Pet Screenshot](public/img/dev-pet-ui.png)

## 🌟 Features

- **Interactive Quiz System**: Practice coding questions across different categories
- **Cute Animal Themes**: Each category is represented by adorable animal icons
- **Question Management**: Add, edit, and delete your own practice questions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **MongoDB Integration**: Persistent storage for all your questions
- **Modern UI/UX**: Clean, intuitive interface with smooth animations

## 🎯 Categories

- **🐱 HTML/CSS**: Frontend fundamentals
- **🦈 JavaScript**: Core JS concepts and algorithms
- **🦙 Frameworks**: React, Vue, Angular, and more
- **🦌 Backend**: Node.js, APIs, databases
- **🦆 Behavioral**: Soft skills and interview prep
- **🦫 Custom**: Your own personalized questions

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/karanmittal09/Dev-Pet-learning-platform.git
   cd Dev-Pet-learning-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="your-mongodb-connection-string"
   PORT=4000
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:4000`

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox/Grid
- **JavaScript** - Interactive functionality
- **EJS** - Server-side templating

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Development Tools
- **Nodemon** - Development server
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Dev-Pet/
├── public/                 # Static assets
│   ├── img/               # Images and icons
│   ├── style.css          # Main stylesheet
│   ├── main.js            # Client-side JavaScript
│   └── data.js            # Question data
├── views/                 # EJS templates
│   ├── index.ejs          # Main page
│   └── edit.ejs           # Edit question page
├── models/                # Database models
│   └── devpetq.js         # Question model
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables
└── README.md              # This file
```

## 🎮 How to Use

### Taking a Quiz
1. Click on any animal icon to start a quiz in that category
2. Read the question in the modal popup
3. Click "More!" for additional questions
4. Save interesting questions with the heart button

### Adding Questions
1. Scroll to the "ADD A QUESTION" section
2. Select a category from the dropdown
3. Type your question in the text area
4. Click "ADD" to save

### Managing Questions
1. View all your questions in the "MY QUESTIONS" section
2. Click the edit icon (✏️) to modify a question
3. Click the trash icon (🗑️) to delete a question

## 🔧 Configuration

### MongoDB Setup
1. Create a MongoDB Atlas account at [mongodb.com](https://www.mongodb.com/)
2. Create a new cluster
3. Get your connection string
4. Add it to your `.env` file

### Environment Variables
```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/DevPet"
PORT=4000
```

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Karan Mittal**
- GitHub: [@karanmittal09](https://github.com/karanmittal09)
- Original concept by: Jesaca Lin

## 🙏 Acknowledgments

- Animal icons and illustrations
- MongoDB Atlas for database hosting
- The Node.js and Express.js communities
- All contributors and testers

## 🐛 Known Issues

- None currently reported

## 🔮 Future Enhancements

- [ ] User authentication system
- [ ] Question difficulty levels
- [ ] Timer for quiz sessions
- [ ] Progress tracking
- [ ] Social sharing features
- [ ] Dark mode theme
- [ ] Question categories expansion

---

**Happy coding! 🚀**
# IntroBuddies 🎓

A comprehensive platform designed to help new students navigate their journey at Thapar Institute of Engineering and Technology.

## Features 🌟

- **Interactive Campus Map** 🗺️
  - Visual guide to important locations
  - Detailed descriptions of campus facilities
  - Easy navigation for newcomers

- **Resource Hub** 📚
  - Study materials
  - Course notes
  - Academic resources
  - Requires authentication for access

- **Events Calendar** 🎉
  - Upcoming campus events
  - Freshers' week activities
  - Society events and meetups
  - Cultural celebrations

- **User Authentication** 🔐
  - Secure signup/login system
  - Protected resource access
  - User profile management

- **Dark Mode** 🌙
  - Toggle between light and dark themes
  - Comfortable viewing experience

## Tech Stack 💻

### Frontend
- React.js
- Tailwind CSS
- DaisyUI
- React Router DOM
- Axios
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- CORS
- dotenv

## Getting Started 🚀

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/VedantAnand17/IntroBuddies.git
```

2. Install Backend dependencies
```bash
cd Backend
npm install
```

3. Install Frontend dependencies
```bash
cd Frontend
npm install
```

4. Create a .env file in the Backend directory with:
```env
PORT=4000
MONGODBURI=your_mongodb_connection_string
```

5. Start the Backend server
```bash
npm run dev
```

6. Start the Frontend development server
```bash
cd Frontend
npm run dev
```

## Project Structure 📁

```
Backend/
├── controller/       # Route controllers
├── model/           # Database models
├── route/           # API routes
├── Frontend/        # React frontend
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── context/     # Context providers
│   │   ├── Events/      # Events related components
│   │   ├── home/        # Home page components
│   │   ├── public/      # Static assets
│   │   └── resources/   # Resource components
│   └── ...
└── ...
```

## API Endpoints 🛣️

### User Routes
- POST `/user/signup` - Register new user
- POST `/user/login` - User login

### Resource Routes
- GET `/resource` - Get all resources (protected)

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Authors ✨

- Vedant Anand
- Harnoor

## License 📝

This project is licensed under the ISC License.

## Acknowledgments 🙏

- Thapar Institute of Engineering and Technology
- All contributors and supporters of the project

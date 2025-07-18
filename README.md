# 🎬 Netflix Clone

A Netflix front-end clone built using **ReactJS**, **Firebase Authentication**, and **TMDB API**, designed for a clean, responsive user experience similar to the original Netflix platform. Users can sign up, sign in, and browse movies with a smooth scrolling interface and hero banners.

---

## 📌 Features

- ✅ **Hero Banner** with Play and More Info buttons.
- ✅ **Firebase Authentication** (Sign Up, Sign In, Sign Out).
- ✅ **TMDB API Integration** for fetching live movie data.
- ✅ **Dynamic Scrollable Movie Rows (TitleCards)**.
- ✅ **Responsive Navbar** that changes color on scroll.
- ✅ **React Toastify** for error and success notifications.
- ✅ **Fully Responsive** on Desktop, Tablet, and Mobile.
- ✅ **Clean Modern UI inspired by Netflix**.

---

## 📸 Preview

![Netflix Clone Preview](./assets/readme-preview.png)  
_📌 Replace with your project preview screenshot._

---

## 🛠️ Tech Stack

| Tech | Usage |
|------|--------|
| ReactJS | Front-end Framework |
| Firebase | Authentication & Firestore |
| TMDB API | Movie Data |
| React Toastify | Notifications |
| CSS | Styling & Responsiveness |

---

## ⚙️ Getting Started

### 1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/netflix-clone.git
cd netflix-clone
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Firebase Setup
- Go to [Firebase Console](https://console.firebase.google.com)
- Create a new project
- Enable **Authentication → Email/Password**
- Set up **Firestore Database**
- Copy your Firebase config keys and replace them in `/src/firebase.js`

### 4. TMDB API Setup
- Create an account at [TheMovieDB](https://www.themoviedb.org/)
- Go to Settings → API → Get your API key
- Replace Bearer Token inside `TitleCards.jsx`

---

### 5. Run the Application
```bash
npm start
```
Open in browser: `http://localhost:5173/` (or the port Vite uses).

---

## 📂 Project Structure

```
src/
│
├── assets/              # Logos, icons, banners
├── components/          
│   ├── Hero/            
│   ├── Navbar/          
│   ├── TitleCards/      
│   └── Login/           
│
├── firebase.js          # Firebase configuration
└── App.jsx              # Main routing and layout
```

---

## 🚀 Live Demo

If hosted, add your Netlify/Vercel link here.  
Example:
> [https://netflix-clone-yourname.vercel.app](https://netflix-clone-yourname.vercel.app)

---

## 📄 License

This project is built for educational purposes only. Netflix is a registered trademark of Netflix, Inc.  
**Not intended for commercial use.**

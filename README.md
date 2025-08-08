# PLUNT
![PLUNT](/screenshot2.jpg)
🌿 PLUNT – Plant Care Companion
PLUNT is a full-stack plant management platform designed to help users track and care for their beloved plants. Whether you're a seasoned plant parent or just getting started, PLUNT makes it easy to organize, water, and love your green friends.

🚀 Purpose
The goal of PLUNT is to simplify plant care through organization and reminders. With features to add, update, and sort your plants based on their watering schedule, PLUNT ensures your plants stay happy and hydrated!

✨ Features
🌱 Add Plants – Log new plants with names, species, notes, and watering schedules.

📝 Update Info – Edit plant details and watering intervals.

❌ Delete Plants – Easily remove plants you no longer track.

📋 View All Plants – See your entire plant collection at a glance.

🕒 Sort by Next Watering Date – Organize your list by upcoming care needs.

🔐 Authentication System – Users can securely Register and Login to manage their own plant list.

🎨 Dark & Light Theme – Switch themes to match your style or lighting.

📱 Responsive Design – Enjoy a smooth experience on all devices.

🧠 Tech Stack
Frontend:

React – UI Library

TailwindCSS – Utility-first CSS framework

DaisyUI – UI components for Tailwind

React Router DOM – Client-side routing

SweetAlert2 – Beautiful alert popups

React Icons – Icon Library

React Helmet – SEO management

React Fast Marquee – Marquee animations

Backend:

Node.js – Runtime environment

Express.js – Web framework

MongoDB – NoSQL database

JWT – Secure authentication

Dotenv – Manage environment variables

Cors & Middleware – Secure API endpoints

🔐 Authentication
Users must be logged in to:

Add new plants

Edit or delete plants

View personal plant list


## 🚀 How to Run Locally

1️⃣ **Clone the repository**  
`git clone https://github.com/Rafi024124/Cholo-Kotha-Boli-App.git`

2️⃣ **Go to the project folder**  
`cd Cholo-Kotha-Boli-App`

3️⃣ **Install backend dependencies**  
`cd server`  
`npm install`

4️⃣ **Create a `.env` file in the `server` folder**  
Add your environment variables like:  
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_api_key

5️⃣ **Start the backend server**  
`npm run start`

6️⃣ **Install frontend dependencies**  
Open a new terminal tab/window, then:  
`cd ../client`  
`npm install`

7️⃣ **Start the frontend**  
`npm start`

8️⃣ **Open your browser and go to**  
`http://localhost:3000`

---

⚠️ Make sure your MongoDB service is running and your environment variables are properly set.


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

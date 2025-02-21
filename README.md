# Task Management Application

## 📌 Description
A simple and efficient task management application built with **Vite.js (React)** for the frontend and **Express.js + MongoDB** for the backend. real-time updates, and Firebase Google Authentication.

## 🚀 Live Demo
🔗 [Live App] : 

## 📦 Dependencies
### **Frontend Dependencies**
- React
- React Router
- Axios
- Tailwind CSS
- Firebase (for authentication)
- React Hot Toast (for notifications)

### **Backend Dependencies**
- Express.js
- MongoDB & Mongoose
- CORS
- Dotenv
- Firebase Admin SDK

## 🛠 Installation Steps
### **1️⃣ Clone the Repository**


### **2️⃣ Install Dependencies**
#### Install frontend dependencies:

#### Install backend dependencies:


### **3️⃣ Set Up Environment Variables**
Create a `.env` file in both the **client** and **server** directories with the following variables:
#### **Client/.env**



#### **Server/.env**
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
FIREBASE_ADMIN_SDK=your_firebase_admin_sdk_json
```

### **4️⃣ Start the Application**
#### **Run the backend**
```sh
cd server
npm start
```
#### **Run the frontend**
```sh
cd client
npm run dev
```

## ⚙️ Technologies Used
- **Frontend:** Vite.js (React), Tailwind CSS, Axios, Firebase
- **Backend:** Express.js, MongoDB, Mongoose, Firebase Admin SDK
- **Authentication:** Firebase Google Sign-In
- **Real-Time Updates:** MongoDB Change Streams, WebSockets, or Optimistic UI Updates

## 🎯 Features
- **Task Management:** Add, edit, delete, and reorder tasks
- **Drag-and-Drop:** Move tasks between categories (**To-Do, In Progress, Done**)
- **Real-Time Synchronization**
- **Authentication:** Google Sign-In with Firebase
- **Dark Mode Support**
- **Minimalist & Responsive UI**




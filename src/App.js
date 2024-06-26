import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import LoginForm from './LoginForm';
import Signup from './Signup';
import Home from './Home';
import Book from './Book';
import axios from 'axios';

// Set default base URL and headers for axios
axios.defaults.baseURL = "https://2972-16-171-12-189.ngrok-free.app";
axios.defaults.headers = {
  "Content-Type": "application/json",
  "ngrok-skip-browser-warning": "69420",
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/LoginForm' element={<LoginForm />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Book' element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

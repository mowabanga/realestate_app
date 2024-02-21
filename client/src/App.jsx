import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes path="/" element={<Home />}></Routes>
      <Routes path="/sign-in" element={<SignIn />}></Routes>
      <Routes path="/sign-up" element={<SignUp />}></Routes>
      <Routes path="/about" element={<About />}></Routes>
      <Routes path="/profile" element={<Profile />}></Routes>
    </BrowserRouter>
  );
}

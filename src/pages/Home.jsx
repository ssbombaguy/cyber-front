import { useState } from 'react'
import Navbar from "./components/Nav-bar.jsx";
import '../reset.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";
const Home = () => {
    return (
        <Header></Header>
    );
};

export default Home

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>🌼 Welcome to MindBloom</h1>
      <p>Your personal space for mental wellness and mindfulness.</p>

      <div className="home-buttons">
        <Link to="/moodtracker" className="btn">Track Mood</Link>
        <Link to="/journal" className="btn">Write Journal</Link>
        <Link to="/moodboost" className="btn">Boost Mood</Link>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import MoodBoost from "./components/MoodBoost";
import MoodTracker from "./components/MoodTracker";
import Journal from "./components/Journal";
import SignIn from "./components/SignIn";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        {!user ? (
          <Route path="*" element={<SignIn />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/moodtracker" element={<MoodTracker />} />
            <Route path="/moodboost" element={<MoodBoost />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;

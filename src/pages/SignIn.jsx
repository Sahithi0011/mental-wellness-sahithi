import React from 'react';
import { auth, provider } from "../services/firebase"; // Make sure this path is correct
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // <-- 1. Import useNavigate

function SignIn() {
  const navigate = useNavigate(); // <-- 2. Initialize the hook

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      // 3. Add this line:
      navigate('/home'); // <-- This redirects to your Home page
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  // 4. You need a button to call this function
  return (
    <div className="signin-page">
      <h2>Welcome to Your Wellness Journal</h2>
      <p>Please sign in to continue.</p>
      <button onClick={handleGoogleSignIn}>
        Sign in with Google
      </button>
    </div>
  );
}

export default SignIn;
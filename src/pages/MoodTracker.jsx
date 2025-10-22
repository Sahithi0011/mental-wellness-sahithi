import React, { useState } from "react";

const MoodTracker = () => {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [moods, setMoods] = useState([]);

  const saveMood = () => {
    if (!mood) return alert("Please select a mood!");
    const newMood = { mood, note, date: new Date().toLocaleString() };
    setMoods([...moods, newMood]);
    setMood("");
    setNote("");
  };

  return (
    <div className="page-container">
      <h2>How are you feeling today?</h2>

      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="">Select Mood</option>
        <option>😊 Happy</option>
        <option>😐 Neutral</option>
        <option>😢 Sad</option>
        <option>😡 Angry</option>
        <option>😴 Tired</option>
      </select>

      <textarea
        placeholder="Add a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={saveMood}>Save Mood</button>

      <h3>Previous Moods</h3>
      <ul>
        {moods.map((m, i) => (
          <li key={i}>
            <strong>{m.mood}</strong> - {m.note} <em>({m.date})</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodTracker;

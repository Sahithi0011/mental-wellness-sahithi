import React, { useState } from "react";

const Journal = () => {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);

  const addEntry = () => {
    if (!entry.trim()) return;
    const newEntry = { text: entry, date: new Date().toLocaleString() };
    setEntries([newEntry, ...entries]);
    setEntry("");
  };

  return (
    <div className="page-container">
      <h2>Daily Journal</h2>
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your thoughts..."
      />
      <button onClick={addEntry}>Add Entry</button>

      <ul>
        {entries.map((e, i) => (
          <li key={i}>
            <p>{e.text}</p>
            <small>{e.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Journal;

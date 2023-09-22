// RegistrationForm.js

import React, { useState } from "react";

function RegistrationForm({ startGame }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    difficulty: "easy", // default difficulty
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startGame({
      ...formData,
      n:
        formData.difficulty === "easy"
          ? 10
          : formData.difficulty === "medium"
          ? 15
          : 25,
      y: 40,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="heading">Registration Form</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Difficulty Level</label>
        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="rules">
        <h4>Squid Game - Red Light Green Light Rules:</h4>
        <p className="para">
          If you click on the red box or if the time has expired, you failed the
          game and display Game Over! message and end the game immediately.
          <br></br> If you click on the green box <br></br>
          (Easy level: you can click 10 times within 40 seconds <br></br>
          Medium level: you can click 15 times within 40 seconds <br></br>
          Hard level: you can click 25 times within 40 seconds )<br></br>
          you win and display You win! message.
        </p>
      </div>
      <button type="submit">Start Game</button>
    </form>
  );
}

export default RegistrationForm;

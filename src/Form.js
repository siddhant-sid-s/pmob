import React, { useState } from 'react';
import './Form.css'; // Import CSS file
import logo from './logo.png'; // Import logo image
import PcaPrediction from './package/PcaPrediction';
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
  const [scores, setScores] = useState({
    score: '',
    aptitude: '',
    english: '',
    quantitative: '',
    analytical: '',
    domain: '',
    computerFundamental: '',
    coding: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScores({
      ...scores,
      [name]: value,
    });
  };

  const convertFormValuesToNumbers = (setScores) => {
    const numericValues = {};
    for (let key in setScores) {
      numericValues[key] = parseFloat(setScores[key]);
    }
    return numericValues;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const numericStudent = convertFormValuesToNumbers(scores);
    const placementStatus = PcaPrediction(numericStudent); // Fix here
    navigate("/prediction", { state: numericStudent });
    console.log('Placement Status:', placementStatus);
  };
  

  return (
    <div className="card">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <h1 className="form-heading">Placement Predictor</h1>
      <form onSubmit={handleSubmit} className="score-form">
        <div className="input-group">
          <label>Total Score:</label>
          <input type="number" name="score" value={scores.score} onChange={handleChange} placeholder="Enter Total Score" />
        </div>
        <div className="input-group">
          <label>Aptitude:</label>
          <input type="number" name="aptitude" value={scores.aptitude} onChange={handleChange} placeholder="Enter Aptitude Score" />
        </div>
        <div className="input-group">
          <label>English:</label>
          <input type="number" name="english" value={scores.english} onChange={handleChange} placeholder="Enter English Score" />
        </div>
        <div className="input-group">
          <label>Quantitative:</label>
          <input type="number" name="quantitative" value={scores.quantitative} onChange={handleChange} placeholder="Enter Quantitative Score" />
        </div>
        <div className="input-group">
          <label>Analytical:</label>
          <input type="number" name="analytical" value={scores.analytical} onChange={handleChange} placeholder="Enter Analytical Score" />
        </div>
        <div className="input-group">
          <label>Domain:</label>
          <input type="number" name="domain" value={scores.domain} onChange={handleChange} placeholder="Enter Domain Score" />
        </div>
        <div className="input-group">
          <label>Computer Fundamentals:</label>
          <input type="number" name="computerFundamental" value={scores.computerFundamental} onChange={handleChange} placeholder="Enter Computer Fundamentals Score" />
        </div>
        <div className="input-group">
          <label>Coding:</label>
          <input type="number" name="coding" value={scores.coding} onChange={handleChange} placeholder="Enter Coding Score" />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;

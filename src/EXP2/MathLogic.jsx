import React, { useState } from 'react';
import './MathLogic.css';

const MathLogic = () => {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const [activeTab, setActiveTab] = useState("factorial");

  const handleCalculate = () => {
    const n = parseInt(num);
    if (isNaN(n)) { setResult("Enter a valid number"); return; }

    if (activeTab === "factorial") {
      let fact = 1;
      for (let i = 1; i <= n; i++) fact *= i;
      setResult(`Result: ${fact}`);
    } else if (activeTab === "fibonacci") {
      let series = [0, 1];
      for (let i = 2; i < n; i++) series.push(series[i - 1] + series[i - 2]);
      setResult(`Series: ${series.slice(0, n).join(", ")}`);
    } else {
      let isPrime = n > 1;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) { isPrime = false; break; }
      }
      setResult(isPrime ? "✅ Prime Number" : "❌ Not a Prime Number");
    }
  };

  return (
    <div className="logic-card">
      <div className="card-header">
        <h1>Akilan's Logic Operation</h1>
        <div className="underline"></div>
      </div>
      
      <div className="tab-menu">
        <button className={activeTab === 'factorial' ? 'active' : ''} onClick={() => setActiveTab("factorial")}>Factorial</button>
        <button className={activeTab === 'fibonacci' ? 'active' : ''} onClick={() => setActiveTab("fibonacci")}>Fibonacci</button>
        <button className={activeTab === 'prime' ? 'active' : ''} onClick={() => setActiveTab("prime")}>Prime</button>
      </div>

      <div className="input-section">
        <input 
          type="number" 
          value={num} 
          onChange={(e) => setNum(e.target.value)} 
          placeholder="Enter value of N..." 
        />
        <button className="run-btn" onClick={handleCalculate}>
          Run {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </button>
      </div>

      {result && <div className="res-fade-in">{result}</div>}
    </div>
  );
};

export default MathLogic;
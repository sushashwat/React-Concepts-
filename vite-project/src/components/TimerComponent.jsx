import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1. BIRTH (componentDidMount)
    console.log("Timer started!");
    
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // 3. DEATH / CLEANUP (componentWillUnmount)
    return () => {
      clearInterval(intervalId);
      console.log("Timer destroyed and cleaned up!");
    };
  }, []); // <-- Empty array means this block ONLY setups up at birth

  // 2. GROWTH / UPDATE (componentDidUpdate)
  useEffect(() => {
    console.log(`The time updated! Current seconds: ${seconds}`);
  }, [seconds]); // <-- Runs every single time the 'seconds' state changes

  return (
    <div style={{ padding: '20px', border: '1px solid black' }}>
      <h2>Seconds Passed: {seconds}</h2>
    </div>
  );
}

export default TimerComponent;
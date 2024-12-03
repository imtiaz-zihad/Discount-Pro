import { useState, useEffect } from "react";

const SummerSell = () => {
  // Set your target end date here
  const targetDate = new Date("2024-12-31T00:00:00"); // Example: December 31, 2024, midnight

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Function to calculate the remaining time
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now; 

      if (difference <= 0) {
        clearInterval(timer); 
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }; 
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    // Update the time every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div >
      <div>
        <h2 className="text-2xl text-green-500 font-bold lg:my-10">Winter Discount End</h2>
      </div>
      <div className="flex  items-center justify-center">
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-blue-600 rounded-box text-white">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.days }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-blue-600 rounded-box text-white">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.hours }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-blue-600 rounded-box text-white">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.minutes }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-blue-600 rounded-box text-white">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.seconds }}></span>
          </span>
          sec
        </div>
      </div>
      </div>
    </div>
  );
};

export default SummerSell;

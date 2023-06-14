import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
  const [dayOfWeek, setDayOfWeek] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime.toLocaleTimeString());
      setDayOfWeek(currentTime.toLocaleDateString(undefined, { weekday: "long" }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>{time}</div>
      <div>{dayOfWeek}</div>
    </div>
  );
};

export default Clock;

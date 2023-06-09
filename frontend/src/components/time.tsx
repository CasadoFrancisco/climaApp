import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
      <Div>{time}</Div>
      <Div>{dayOfWeek}</Div>
    </div>
  );
};
const Div = styled.div`
color: ${({theme})=>theme.text};
`
export default Clock;

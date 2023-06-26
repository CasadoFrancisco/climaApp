import React, { useState } from "react";
import "./slideBar.css";

interface Props {
  theme: string;
  setTheme: (theme: string) => void;
}

const SlideBarComponent: React.FC<Props> = (props) => {
  const [isChecked, setIsChecked] = useState(true);

  const changeMode = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
    handleCheckboxChange();
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="wrapper">
      <input
        type="checkbox"
        name="checkbox"
        className={`switch ${isChecked ? "switch-checked" : ""}`}
        checked={isChecked}
        onChange={() => changeMode()}
      />
    </div>
  );
};

export default SlideBarComponent;

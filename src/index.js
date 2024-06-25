import React from "react";
import ReactDOM from "react-dom";

const currenthours = new Date().getHours();
const customColor = {
  color: "",
};

const greetings = (currenthours) => {
  if (currenthours < 12) {
    customColor.color = "red";
    return "GOOD MORNING";
  } else if (currenthours < 18) {
    customColor.color = "green";
    return "GOOD AFTERNOON";
  } else {
    customColor.color = "blue";
    return "GOOD EVENING";
  }
};
const day = greetings(currenthours);
if (day === "GOOD MORNING") {
  heading.color = "red";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customColor}>
      {greetings(currenthours)},{currenthours}
    </h1>
  </div>,
  document.getElementById("root")
);

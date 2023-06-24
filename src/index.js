import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="mainContainer">
    <div className="navbar">
      <img src="./back.png" alt="back" />
    </div>
    <div className="image">
      <img src="./Rectangle.png" alt="images" />
    </div>
    <div className="headLine">
      Featured article title can have up to many lines. Otherwise we will end
      the line when it becomes to long.
    </div>
    <p className="caption">Writen by: Susan Pesman — 20 juli 2021</p>
    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      viverra iaculis convallis. In hac habitasse platea dictumst. Cras
      porttitor varius sapien. Aliquam ornare feugiat eleifend. Nulla tempus
      venenatis elit sit amet vestibulum. Vivamus eu auctor dui, consectetur
      blandit ipsum. Maecenas ut feugiat sapien, et venenatis nulla. Nam orci
      sapien, sodales vitae posuere eu, facilisis ac massa. Donec non vestibulum
      orci. Suspendisse dui tortor, dignissim ullamcorper tristique at, interdum
      nec libero. Morbi tempus et tortor id blandit. Nulla commodo, leo tempor
      mattis placerat, tellus nibh pharetra lorem, nec varius tellus elit ut
      felis. Nullam suscipit sollicitudin rutrum. Nunc libero dui, porttitor sit
      amet interdum at, bibendum eget leo. Quisque et risus sed velit tristique
      pretium. Etiam a urna eu quam tempor malesuada at id sapien. Morbi
      dignissim odio enim, eu eleifend sem faucibus nec. Aenean vestibulum
      ornare magna, varius consectetur magna eleifend ac. Donec ac justo auctor,
      posuere ipsum et, scelerisque neque. Curabitur molestie lorem et nibh
      elementum vestibulum.
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import "./app.less";
import smallImg from "@/assets/imgs/10kb.png";

function App() {
  return (
    <div>
      <h2>template_react_ts</h2>
      <img src={smallImg} width={200} alt="小于10kb的图片" />
      <h2>template_react_ts</h2>
    </div>
  );
}

export default App;

import React from "react";
import "./css/App.css";
import { Timers, Modal } from "./layouts";
import { Background } from "./elements";
import { GlobalStyle } from "./global";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Background backgroundColor="#f5f5f9">
        <Timers />
        <Modal />
      </Background>
    </div>
  );
};

export default App;

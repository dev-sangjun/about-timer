import React from "react";
import { Timers, Modal } from "./layouts";
import { Background } from "./elements";
import { GlobalStyle } from "./global";

const App = () => {
  return (
    <div className="App">
      <Background backgroundColor="white">
        <Timers />
        <Modal />
      </Background>
      <GlobalStyle />
    </div>
  );
};

export default App;

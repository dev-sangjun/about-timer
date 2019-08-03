import React from "react";
import { Timers, Modal } from "./layouts";
import { Background } from "./elements";
import { GlobalStyle } from "./global";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />

      <Background backgroundColor="white">
        <Timers />
        <Modal />
      </Background>
    </div>
  );
};

export default App;

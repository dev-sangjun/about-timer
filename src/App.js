import React from "react";
import { Timers } from "./layouts";
import { Background } from "./elements";
import { GlobalStyle } from "./global";

const App = () => {
  const timers = [{}, {}];
  return (
    <div className="App">
      <Background backgroundColor="greenyellow">
        <Timers timers={timers} />
      </Background>
      <GlobalStyle />
    </div>
  );
};

export default App;

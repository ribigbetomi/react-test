import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/application";
import { Skills } from "./components/skills/skills";
import { Counter } from "./components/counter/counter";
import { AppProviders } from "./providers/appProviders";
import { MuiMode } from "./components/mui/muiMode";
import { CounterTwo } from "./components/counter-two/counterTwo";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application />
        <Skills skills={["HTML", "CSS"]} />
        <Counter /> */}
        <MuiMode />
        <CounterTwo count={1} />
      </div>
    </AppProviders>
  );
}

export default App;

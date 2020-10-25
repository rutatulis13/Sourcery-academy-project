import React from "react";
import GetStartedList from "./features/getStarted/components";

function App() {
  const instructions = [
    {
      id: 1,
      instruction: "setup nvm",
    },
    {
      id: 2,
      instruction:
        "run 'nvm use' or just set the node version to the one in .nvmrc file",
    },
    {
      id: 3,
      instruction: "run 'npm install'",
    },
    {
      id: 4,
      instruction: "run 'npm install -g json-server'",
    },
    {
      id: 5,
      instruction: "run 'npm run start-server'",
    },
    {
      id: 6,
      instruction: "run 'npm run start'",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GetStartedList instructions={instructions} />
    </div>
  );
}

export default App;

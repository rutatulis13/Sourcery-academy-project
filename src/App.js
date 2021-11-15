import React, { useState } from "react";
import Registration from "./pages/login/Register";
import Login from "./pages/login/Login";

function App() {
  const [state, setState] = useState(0);
  if (state === 0) {
    return (
      <div className="app">
        <Registration
          openLoginCallBack={() => {
            setState(1);
          }}
        />
      </div>
    );
  }

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;

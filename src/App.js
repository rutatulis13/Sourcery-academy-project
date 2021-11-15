import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/login/Register";
import Login from "./pages/login/Login";
//import EatOutPage from "pages/EatOutPage";
//import Layout from "components/Layout/Layout";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Registration />} />
          <Route path="/login" element={<Login />} />
          {/* <Login />
      <Layout>
        <EatOutPage />
      </Layout> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import EatOutPage from "pages/EatOutPage";
import Layout from "components/Layout/Layout";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="reservations" element={<Reservations />} />
          </Route>
          <Route path="/eat-out" element={<EatOutPage />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

// Temporary:
const Dashboard = () => (
  <div>
    <Breadcrumbs />
    <br />
    <p>Dashboard page</p>
    <Outlet />
  </div>
);

const Reservations = () => (
  <div>
    <p>Reservations page</p>
  </div>
);

export default App;

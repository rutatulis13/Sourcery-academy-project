import React from "react";
import Layout from "components/Layout/Layout";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="reservations" element={<Reservations />} />
          </Route>
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

const NavigationLinks = () => {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <br />
      <Link to="/dashboard/reservations">reservations</Link>
      <br />
      <Link to="/dashboard/reservations/books">books</Link>
    </div>
  );
};

const Dashboard = () => (
  <div>
    <NavigationLinks />
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

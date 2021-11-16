import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "components/Layout/Layout";
import Dashboard from "pages/Dashboard/Dashboard";
import EatOutPage from "pages/EatOutPage";
import PageLayout from "components/PageLayout/PageLayout";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="eat-out" element={<EatOutPage />} />
          </Route>
          <Route
            path="*"
            element={<PageLayout title="404">Page not found!</PageLayout>}
          />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;

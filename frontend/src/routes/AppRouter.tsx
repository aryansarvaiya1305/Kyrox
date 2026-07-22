import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing/LandingPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
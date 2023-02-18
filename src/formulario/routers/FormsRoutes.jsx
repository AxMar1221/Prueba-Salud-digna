import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../shared/components/Navbar";
import { Cards, Forms } from "../pages";
import { Registers } from "../pages/Registers";

export const FormsRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-3">
        <Routes>
          <Route path="cards" element={<Cards />} />
          <Route path="form" element={<Forms />} />
          <Route path="register" element={<Registers />} />

          <Route path="/" element={<Navigate to="/cards" />} />
        </Routes>
      </div>
    </>
  );
};

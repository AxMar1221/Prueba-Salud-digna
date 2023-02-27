import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../shared/components/Navbar";
import { Cards, EditPage, Forms, Registers } from "../pages";

export const FormsRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-3">
        <Routes>
          <Route path="cards" element={<Cards />} />
          <Route path="form" element={<Forms />} />
          <Route path="register" element={<Registers />} />
          <Route path="edit/:id" element={<EditPage />} />

          <Route path="/" element={<Navigate to="/cards" />} />
        </Routes>
      </div>
    </>
  );
};

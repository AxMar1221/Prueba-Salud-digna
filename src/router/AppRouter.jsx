import { Navigate, Route, Routes } from "react-router-dom"

import { Cards, Forms } from "../formulario/pages"
import { LoginPage } from "../auth/pages/LoginPage"
import { Navbar } from "../shared/components/Navbar"

export const AppRouter = () => {
  return (
    <>

    <Navbar />

        <Routes>
            <Route path="cards" element={<Cards />}/>
            <Route path="form" element={<Forms />}/>

            <Route path="login" element={<LoginPage />}/>

            <Route path="/" element={<Navigate to="/Cards"/>}/>
        </Routes>
    </>
  )
}

import {  Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/LoginPage";
import { MusclesRoutes } from "../routes/MusclesRoutes";


export const AppRouter = () => {
  return (
    <>

        <Routes>

            <Route
            path="login"
            element={<LoginPage />}
            />

            <Route
            path="/*"
            element={<MusclesRoutes />}
            />

        </Routes>
    </>
  )
}

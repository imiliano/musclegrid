import { Navigate, Route, Routes } from "react-router-dom"
import { Delts, Pec, Arms, Lats } from "../pages";
import { Navbar } from "../ui/NavBar";

export const MusclesRoutes = () => {
  return (
    <>
    <Navbar />

<div className="container-xl">

    <Routes>

        <Route
        path="arms"
        element={<Arms />}
        />

        <Route
        path="delts"
        element={<Delts />}
        />

        <Route
        path="lats"
        element={<Lats />}
        />

        <Route
        path="pec"
        element={<Pec />}
        />

        <Route
        path="/"
        element={ <Navigate to="/login" />}
        />
    
</Routes>
        </div> {/*container-xl"*/}
    </>
  )
}

import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import AdminHomePage from "./pages/AdminHomePage"
import TripDetailsPage from "./pages/TripDetailsPage"
import CreateTripPage from "./pages/CreateTripPage"
import ListTripsPage from "./pages/ListTripsPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage";


function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />}/>
                <Route path="/admin" element={<AdminHomePage />}/>
                <Route path="/trip-details" element={<TripDetailsPage />}/>
                <Route path="/create-trip" element={<CreateTripPage />}/>
                <Route path="/list-trips" element={<ListTripsPage />}/>
                <Route path="/login-page" element={<LoginPage />}/>
                <Route path="/form-page" element={<ApplicationFormPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
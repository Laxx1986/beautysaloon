import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Menu from './Frontend/Menu';
import HomePage from "./Frontend/Pages/HomePage";
import ServicePage from "./Frontend/Pages/ServicePage";
import PriceListPage from "./Frontend/Pages/PriceListPage";
import AboutPage from "./Frontend/Pages/AboutPage";
import ContactPage from "./Frontend/Pages/ContactPage";
import AdminPage from "./Frontend/Pages/AdminPage";
import RegistrationPage from "./Frontend/Pages/RegistrationPage";
import UserFilterPage from "./Frontend/Pages/AdminFilters/UserFilterPage";
import ServiceProviderFilterPage from "./Frontend/Pages/AdminFilters/ServiceProviderFilterPage";
import ServiceLengthFilterPage from "./Frontend/Pages/AdminFilters/ServiceLengthFilterPage";
import ServiceFilterPage from "./Frontend/Pages/AdminFilters/ServiceFilterPage";
import OpeningTimeFilterPage from "./Frontend/Pages/AdminFilters/OpeningTimeFilterPage";
import BookingFilterPage from "./Frontend/Pages/AdminFilters/BookingFilterPage";
import Calendar from "./Frontend/Pages/MyCalendar";
import LoginPage from './Frontend/Pages/LoginPage';
import BookingsPage from "./Frontend/Pages/BookingsPage";

function App() {
    const [login, setLogin] = useState(false);
    const [userName, setUserName] = useState('');
    const [userRights, setUserRights] = useState(null);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8080/api/users/logout', { userName }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            setLogin(false);
            setUserName('');
            setUserRights(null);
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <>
            <div className="row" id="needbackground">
                <div className="col-12">
                    <h2 className="saloontitle">General Beauty Saloon Nails&Hair</h2>
                    {!login ? (
                        <div className="col-12" id="loginbutton">
                            <button type="button" onClick={() => navigate('/login')}>Bejelentkezés</button>
                        </div>
                    ) : (
                        <div className="col-12" id="logoutbutton">
                            <p>Üdvözlünk, {userName}!</p>
                            <button type="button" onClick={handleLogout}>Kijelentkezés</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="row" id="needbackground">
                <div className="col-12">
                    <Menu login={login} userRights={userRights} />
                </div>
            </div>
            <div className="row" id="needbackground">
                <div className="col-6">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/services" element={<ServicePage />} />
                        <Route path="/pricelist" element={<PriceListPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        {(userRights === 1 || userRights === 2) && <Route path="/admin" element={<AdminPage />} />}
                        {(userRights === 3) && <Route path="/Bookings" element={<BookingsPage />} />}
                        {!login && <Route path="/registration" element={<RegistrationPage />} />}
                        <Route path="/userfilter" element={<UserFilterPage />} />
                        <Route path="/serviceproviderfilter" element={<ServiceProviderFilterPage />} />
                        <Route path="/servicelengthfilter" element={<ServiceLengthFilterPage />} />
                        <Route path="/servicefilter" element={<ServiceFilterPage />} />
                        <Route path="/openingtimefilter" element={<OpeningTimeFilterPage />} />
                        <Route path="/bookingfilter" element={<Calendar key="booking-calendar" />} />
                        <Route path="/login" element={<LoginPage setLogin={setLogin} setUserName={setUserName} setUserRights={setUserRights} />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;

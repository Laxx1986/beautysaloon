import React from 'react';
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Frontend/Menu';
import HomePage from "./Frontend/Pages/HomePage";
import ServicePage from "./Frontend/Pages/ServicePage";
import PriceListPage from "./Frontend/Pages/PriceListPage";
import AboutPage from "./Frontend/Pages/AboutPage";
import ContactPage from "./Frontend/Pages/ContactPage";
import AdminPage from "./Frontend/Pages/AdminPage";
import RegistrationPage from "./Frontend/Pages/RegistrationPage";
import UserFilterPage from "./Frontend/Pages/UserFilterPage";

function App() {
    const [count, setCount] = useState(0);
    let login = false;

    return (
        <Router basename="/">
            <>
                <div className="row" id="needbackground">
                    <div className="col-12">
                        <h2 className="saloontitle">General Beauty Saloon Nails&Hair</h2>
                        {login === false && (
                            <div className="col-12" id="loginbutton">
                                <button type="submit">Bejelentkezés</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="row" id="needbackground">
                    <div className="col-12">
                        <Menu />
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
                            <Route path="/admin" element={<AdminPage />} />
                            <Route path="/registration" element={<RegistrationPage />} />
                            <Route path="/userfilter" element={<UserFilterPage />} />
                        </Routes>
                    </div>
                </div>
            </>
        </Router>
    );
}

export default App;

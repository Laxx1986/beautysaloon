import React, { useState } from 'react';

function RegistrationPage() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        repassword: ''
    });

    // Állapot frissítése input mező változásakor
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Űrlap elküldése
    const handleSubmit = (event) => {
        event.preventDefault();
        // Itt lehet feldolgozni az adatokat, például elküldeni egy API-nak
        console.log(formData);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10 col-md-8 col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Név: <br />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Felhasználónév: <br />
                            <input
                                type="text"
                                name="name"
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Email: <br />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Telefonszám: <br />
                            <input
                                type="text"
                                name="name"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Jelszó: <br />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Jelszó újra: <br />
                            <input
                                type="text"
                                name="name"
                                value={formData.repassword}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <button type="submit">Regisztráció</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;

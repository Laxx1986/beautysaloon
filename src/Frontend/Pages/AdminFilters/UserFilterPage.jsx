import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tables.css'

function UserFilterPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch adatok lekérése a backendtől
        axios.get('http://localhost:8080/api/users/all-users', {
            auth: {
                username: 'admin', // Felhasználónév
                password: 'almafa' // Jelszó
            }
        })
            .then(response => {
                setUsers(response.data); // A kapott adatok beállítása a state-be
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <div className="col-12">
                <h1 className="titleoflist">Regisztrált felhasználók listája</h1>
            </div>
            <div className="container col-12">
                <div className="row">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover custom-table">
                                <thead>
                                    <tr>
                                        <th>Felhasználó azonosító</th>
                                        <th>Felhasználó név</th>
                                        <th>Email</th>
                                        <th>Telefonszám</th>
                                        <th>Jelszó</th>
                                        <th>Felhasználó jogosultság szint</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr className="rows" key={user.userId}>
                                            <td>{user.userId}</td>
                                            <td>{user.userName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phoneNumber}</td>
                                            <td>{user.password}</td>
                                            <td>{user.userRights.userRightsName}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                <div className="row">
                    <div className="col">
                        <Link to="/admin">
                            <button>Vissza</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserFilterPage;

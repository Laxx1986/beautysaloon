import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";
import "./Tables.css";
import axios from "axios";

function BookingFilterPage() {
    const [bookings, setBooking] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/bookings/all-booking")
            .then(response => {
                setBooking(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error)
            });
    })

    return (
        <>
            <div className="col-12">
                <h1 className="titleoflist">Foglalások listája</h1>
            </div>

            <div className="container col-12">
                <div className="row">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover custom-table">
                            <thead>
                            <tr>
                                <th>Foglalás azonosító</th>
                                <th>Felhasználónév</th>
                                <th>Szolgáltatás</th>
                                <th>Dátum</th>
                                <th>Idő</th>
                                <th>Megjegyzés</th>
                            </tr>
                            </thead>
                            <tbody>
                            {bookings.map(booking => (
                                <tr className="rows" key={"booking.bookingId"}>
                                    <td>{booking[0]}</td>
                                    <td>{booking[1]}</td>
                                    <td>{booking[2]}</td>
                                    <td>{booking[3]}</td>
                                    <td>{booking[4]}</td>
                                    <td>{booking[5]}</td>
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

export default BookingFilterPage;
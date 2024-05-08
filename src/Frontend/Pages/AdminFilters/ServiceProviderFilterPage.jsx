import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";
import './Tables.css'

function ServiceProviderFilterPage() {
    const [serviceProviders, setServiceProviders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/serviceProviders/all-serviceprovider')
            .then(response => {
                setServiceProviders(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error)
            });

    }, []);

    return (
        <>
            <div className="col-12">
                <h1 className="titleoflist">Szolgáltatók listája</h1>
            </div>
            <div className="container col-12">
                <div className="row">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover custom-table">
                            <thead>
                                <tr>
                                    <th>Szolgáltató azonosító</th>
                                    <th>Szolgáltató név</th>
                                    <th>Felhasználó név</th>
                                </tr>
                            </thead>
                            <tbody>
                                {serviceProviders.map(serviceProvider => (
                                    <tr className="rows" key={serviceProvider.serviceProviderId}>
                                        <td>{serviceProvider[0]}</td>
                                        <td>{serviceProvider[1]}</td>
                                        <td>{serviceProvider[2]}</td>
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

export default ServiceProviderFilterPage;
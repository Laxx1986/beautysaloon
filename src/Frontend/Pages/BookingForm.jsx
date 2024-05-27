import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookingForm() {
    const [serviceProviders, setServiceProviders] = useState([]);
    const [services, setServices] = useState([]);
    const [selectedServiceProvider, setSelectedServiceProvider] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [comment, setComment] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/serviceProviders/all-serviceprovider')
            .then(response => {
                console.log('Service Providers:', response.data); // Log the data
                setServiceProviders(response.data);
            })
            .catch(error => console.error('Error fetching service providers:', error));
        axios.get('http://localhost:8080/api/services/all-service')
            .then(response => {
                console.log('Services:', response.data); // Log the data
                setServices(response.data);
            })
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedServiceProvider || !selectedService || !date || !time || !comment) {
            alert('Please fill out all fields');
            return;
        }

        const bookingRequest = {
            userId: getUserId(),
            serviceProviderId: selectedServiceProvider,
            serviceId: selectedService,
            date,
            time,
            comment
        };

        axios.post('http://localhost:8080/api/bookings/create', bookingRequest)
            .then(response => alert(response.data))
            .catch(error => alert('Error creating booking: ' + error.response.data));
    };

    const getUserId = () => {
        return 1; // Placeholder
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Service Provider:</label>
                <select value={selectedServiceProvider} onChange={e => setSelectedServiceProvider(e.target.value)}>
                    <option value="">Select service provider</option>
                    {serviceProviders.map(provider => (
                        <option key={provider.serviceProviderId} value={provider.serviceProviderId}>{provider.serviceProviderName}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Service:</label>
                <select value={selectedService} onChange={e => setSelectedService(e.target.value)}>
                    <option value="">Select service</option>
                    {services.map(service => (
                        <option key={service.serviceId} value={service.serviceId}>{service.serviceName}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Date:</label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} />
            </div>
            <div>
                <label>Time:</label>
                <input type="time" value={time} onChange={e => setTime(e.target.value)} />
            </div>
            <div>
                <label>Comment:</label>
                <input type="text" value={comment} onChange={e => setComment(e.target.value)} />
            </div>
            <button type="submit">Book</button>
        </form>
    );
}

export default BookingForm;

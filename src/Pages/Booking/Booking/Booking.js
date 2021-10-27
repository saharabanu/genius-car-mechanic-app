import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service,setService]= useState({})
    useEffect(()=>{
        fetch(`https://polar-wave-78940.herokuapp.com/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))

    },[])
    return (
        <div>
            <h2>Details of : {service.name}</h2>
            <h3>this is booking: {serviceId}</h3>
        </div>
    );
};

export default Booking;
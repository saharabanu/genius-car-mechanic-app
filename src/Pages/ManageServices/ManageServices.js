import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageServices = () => {
    const [services,setServices]=useState([]);
   useEffect(()=>{
       fetch('https://polar-wave-78940.herokuapp.com/services')
       .then(res=>res.json())
       .then(data=>setServices(data))
   },[]);
   const handleDelete = (id) =>{
       const proceed = window.confirm('Are you  sure,you want to delete')
       if(proceed){
        const url =`https://polar-wave-78940.herokuapp.com/services/${id} `
        fetch(url,{
         method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('delete successfully');
                const remaining = services.filter(service=>service._id !== id);
                setServices(remaining);
            }
        })
       }
   }
    
    
    
    return (
        <div>
            <h3>Manage Service</h3>
            {
                services.map(service=> <div key={service._id} className="container">
                   <div>
                   <img src={service.img} alt="" />
                    <h3>{service.name}</h3>
                    <h5>Price: {service.price}</h5>
                    <p className="px-3">{service.description}</p>
                   <Link to={`/services/update/${service._id}`}> <button>Update</button></Link>
                    <Button onClick={()=>handleDelete(service._id)}variant="success">Delete</Button>
                    

                   </div>

                </div>)
            }
        </div>
    );
};

export default ManageServices;
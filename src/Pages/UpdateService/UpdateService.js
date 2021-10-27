import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';

const UpdateService = () => {
    const {serviceId} =useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
   
    
   
    return (
        <div>
            <h2>This is Update Service: {serviceId}</h2>
            {/* <small>{service._id}</small> */}
            <div className="add-service">
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
             <input {...register("name")} placeholder="name" value={serviceId.name}/>
            <textarea {...register("description")} placeholder="description"/>
            <input type="number" {...register("price")} placeholder="price"/>
            <input {...register("description")} placeholder="img" />
            <input type="submit" />
            </form>
        </div>
            
        </div>
    );
};

export default UpdateService;
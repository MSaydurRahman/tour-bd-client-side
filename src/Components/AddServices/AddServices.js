import axios from 'axios';
import React from 'react';

import { useForm } from "react-hook-form";
import "./AddServices.css"
const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://still-river-80728.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="container add-services bg-image">
            <h1 className="p-4 m-4 text-center text-danger">Add a service <hr /></h1>
            <form className="m-4" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("location")} placeholder="location.." />
                <br />
                <br />
                <input {...register("city")} placeholder="city.." />
                <br />
                <br />
                <input {...register("description", { required: true, maxLength: 2000 })} placeholder="description.." />
                <br />
                <br />
                <input type="number" {...register("cost", { min: 1, max: 999999999 })} placeholder="cost..." />
                <br />
                <br />
                <input {...register("img")} placeholder="img" />

                <br />
                <br />
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddServices;
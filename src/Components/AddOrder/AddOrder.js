import axios from 'axios';
import React from 'react';
import "./AddOrder.css"
import { useForm } from "react-hook-form";
const AddOrder = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://still-river-80728.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className=" add-services bg-image">
            <h2 className="p-4 m-4 text-danger">Booking My Trip <hr /></h2>
            <div className="container">
                <form className="m-4" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName")} placeholder="firsName.." />
                    <br />
                    <br />
                    <input {...register("lastName")} placeholder="lastName.." />
                    <br />
                    <br />
                    <input {...register("email")} placeholder="email.." />
                    <br />
                    <br />
                    <input {...register("ContactNo")} placeholder="Contact No.." />
                    <br />
                    <br />
                    <input {...register("address")} placeholder="Address.." />
                    <br />
                    <br />
                    <input {...register("area")} placeholder="Tour Area.." />
                    <br />
                    <br />
                    <input className="description" {...register("myDescription", { required: true, maxLength: 2000 })} placeholder="description.." />
                    <br />
                    <br />
                    <input {...register("serviceNo")} placeholder="please write the avobe bookingCode" />
                    <br />
                    <br />
                    <input className="btn btn-success" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddOrder;
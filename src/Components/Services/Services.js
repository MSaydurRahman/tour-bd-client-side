import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import Service from '../Service/Service';
import "./Services.css"
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://still-river-80728.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="text-center">

            <h1 className="text-center text-danger">Our Services <hr /></h1>
            <Carousel></Carousel>
            <br />
            <div className="text-center container">
                <div className=" services p-4 home">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >

                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
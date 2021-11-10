import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import Carousel from '../Carousel/Carousel';
import Savingtrip from '../ExtraSection/Savingtrip';
import Service from '../Service/Service';
import Text from '../Text/Text';
import "./Home.css"
const Home = () => {
    const [services, setServices] = useState([])
    const { isLoading } = useAuth();
    const cartSlice = services.slice(-6)
    useEffect(() => {
        fetch('https://still-river-80728.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    if (isLoading) {
        return <div className="text-center"><Spinner animation="border" variant="danger" /></div>
    }
    return (
        <div className=" text">
            <h1 className="text-center text-danger">Home <hr /></h1>
            <div>
                <Carousel></Carousel>
                <hr />
            </div>
            <div>
                <Savingtrip></Savingtrip>
            </div>
            <div className="">
                <div className="container home">

                    <div className="p-4">
                        <h1 className="text-center text-danger m-4">Recomended places
                            <hr /></h1>
                        <div className="services">
                            {
                                cartSlice.map(service => <Service
                                    key={service._id}
                                    service={service}
                                >
                                </Service>)
                            }

                        </div>
                    </div>
                </div>
                <Text></Text>
            </div>
        </div >
    );
};

export default Home;
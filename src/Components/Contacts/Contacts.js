import Carousel from '../Carousel/Carousel';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Contacts.css"
import { Col, Form, Row, Button } from 'react-bootstrap';
const Contacts = () => {
    return (
        <div className="">
            <div>
                <h1 className="text-center text-danger">Contact Us<hr /></h1>
                <Carousel></Carousel>
            </div>
            <h3 className="text-center text-danger container p-4">Get in Touch<hr /></h3>
            <div className="contacts container">
                <div className="container">
                    <h3 className="text-center">Important</h3>
                    <p className="container">It's highly recomended to you that you to us about your tours and travels. We have our experienced tour experts who will guide you with all the valid information that you need to know about your tours. you can ask questions and can have a clear idea about your tour.Accomodations , food , visas, pricing of packages, all information  should be discussed beforehand to avoid any misunderstanding in the future.</p>
                    <div className="container icon">
                        <p><Link to="/" className="fa fa-facebook "></Link></p>
                        <p><Link to="/" className="fa fa-twitter"></Link></p>
                        <p><Link to="/" className="fa fa-linkedin"></Link></p>
                        <p><Link to="/" className="fa fa-youtube"></Link></p>
                        <p><Link to="/" className="fa fa-printerest"></Link></p>
                    </div>
                </div>
                <div className="container">
                    <h3 className="text-center">Contact</h3>
                    <div className="form container">
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
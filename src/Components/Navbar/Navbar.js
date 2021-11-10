import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Navbar.css"

const Navbar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="">

            <div className="head-nan">
                <hr />
                <div className=" mt-4 headers text-center">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <h1 className="nav-tex"><i class='fas fa-archway'></i>UranTrip</h1>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse nav-item" id="navbarText">
                            <ul className="navbar-nav mr-auto text-center">
                                <Link to="/home">Home</Link>
                                <Link to="/services">Services</Link>
                                {user.email &&
                                    <Link to="/addservice">Add-Services</Link>
                                }
                                {user.email && <Link to="/myorders">My Orders</Link>}
                                {user.email && <Link to="/manageorders">Manage-All-Orders</Link>}
                                <Link to="/about">About</Link>
                                <Link to="/Contacts">Contacts</Link>
                            </ul>
                            <span className="navbar-text">

                                {user.email && <span className="text-success text-lg"><span className="text-dark">User:</span> {user.displayName} </span>}
                                {
                                    user.email ?
                                        <button className="btn btn-danger" onClick={logOut}>Logout</button>
                                        :
                                        <Link className="text-danger" to="/login">Login</Link>
                                }
                            </span>
                        </div>
                    </nav>
                </div>
                <hr />
            </div>

        </div>
    );
};

export default Navbar;






import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./Login.css"
const Login = () => {
    const { user, signInusingGoogle } = useAuth();
    const location = useLocation();
    const histroy = useHistory();
    const redirect_uri = location.state?.from || '/home';
    console.log('came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInusingGoogle()
            .then(result => {
                histroy.push(redirect_uri);
                console.log(result.user);
            })
    }
    return (
        <div className="login">
            <div className="container">
                <h1 className="text-center text-danger ">Please Login </h1>
                <div className=" fa-fw container text-center p-4">
                    <button className="btn btn-primary btn-lg m-4 " onClick={handleGoogleLogin}> <i class="fa fa-google fa-fw"></i>oogle</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
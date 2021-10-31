import React from 'react';
import { Button, Image } from 'react-bootstrap';
import './Login.css';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    
    const googleRedirect = location?.state?.from || "/";
    const { signinGoogle, setIsLoading } = useAuth();
    
    const handleGoogleLogin = () => {
        signinGoogle()
            .then(result => {
                Swal.fire("Good job!",
                    "Log In SuccessFull!",
                    "success"
                )
                history.push(googleRedirect);

            }).finally(() => setIsLoading(false))
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div className="container my-5">
            <div className="row mx-auto">
                <div className="col-md-6 mx-auto login py-5">
                    <h2 className="text-center mb-5 text-secondary">Login Now</h2>
    
                    <div className="mt-3 mb-3 text-center fs-4 fw-bolder col-md-12" >
                        <Button onClick={handleGoogleLogin} variant="outline-info" size="lg" className="text-dark google-btn"><Image  width="40"
                            height="40"
                            className="d-inline-block" src="https://i.ibb.co/Vvfr28P/google-icon.png" /> Continue With Google</Button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;
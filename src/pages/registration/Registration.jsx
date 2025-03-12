import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import regiLotti from "../../assets/lottie/regi.json"
import AuthContext from '../../context/authcontext/AuthContext';

const Registration = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log("error", error.message)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                <div className="text-center sm:text-left md:w-96">
                    <Lottie animationData={regiLotti}></Lottie>
                </div>
                <div onSubmit={handleRegister} className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <h1 className="text-2xl md:text-5xl font-bold text-center mt-4">Register now!</h1>
                    <div className="card-body">
                        <form className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='password' />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
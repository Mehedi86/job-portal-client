import React, { useContext } from 'react';
import loginLotti from "../../assets/lottie/regi.json"
import Lottie from 'lottie-react';
import AuthContext from '../../context/authcontext/AuthContext';
import SocialLogin from '../shared/SocialLogin';

const Login = () => {
    const { signInUser } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log("error", error.message)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                <div className="text-center sm:text-left md:w-96">
                    <Lottie animationData={loginLotti}></Lottie>
                </div>
                <div onSubmit={handleLogin} className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <h1 className="text-2xl md:text-5xl font-bold text-center mt-4">Login now!</h1>
                    <div className="card-body">
                        <form className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='password' />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <SocialLogin/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
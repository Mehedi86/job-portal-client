import React, { useContext } from 'react';
import AuthContext from '../../context/authcontext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                navigate(from);
            })
            .catch(error => {
                console.log("Error", error.message)
            })
    }
    return (
        <div className='mx-auto'>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn'>Continue with Google</button>
        </div>
    );
};

export default SocialLogin;
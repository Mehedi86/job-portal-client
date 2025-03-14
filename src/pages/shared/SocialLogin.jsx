import React, { useContext } from 'react';
import AuthContext from '../../context/authcontext/AuthContext';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
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
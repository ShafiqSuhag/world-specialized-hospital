import React from 'react';
import useFirebase from '../../../hooks/useFirebase';
const LoginTwo = () => {
    const {signInusingGoogle} =useFirebase()
    return (
        <div>
            <button onClick={signInusingGoogle} >Goolge Login 4</button>
        </div>
    );
};

export default LoginTwo;
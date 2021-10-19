import React from 'react';
import { Card, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';


const Register = () => {

    const {signUpUsingEmailPassword, signInUsingGoogle, updateProfileInfo, error, setError} = useAuth()

    // States 
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from?.pathname || '/home'

    const onSubmit = data => {
        console.log('onSubmit-n',data)
        signUpUsingEmailPassword(data.email, data.password)
        .then((result) => {
            // Signed in 
           console.log(result.user)
           setError('')
           updateProfileInfo(data.name)
           history.push(redirectUri)
            // ...
        })
        .catch((error) => {
            console.log(error.message)
            setError(error.message)
            // ..
        });
    };
    
   
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then((result) => {
                console.log('user - ', result.user)
                history.push(redirectUri)

            }).catch((error) => {

            });
    }
    // const {signInusingGoogle} = useFirebase()

    // const handleUserEmailInput = e => {
    //     setEmail(e.target.value)
    // }
    // const handleUserPasswordInput = e => {
    //     setPassword(e.target.value)
    // }

    return (
        <div className="container p-2 shadow  rounded">
            <div className=" p-3 d-flex justify-content-center align-items-center loginBg " >

                <Card style={{ width: '30rem', padding: "5rem 1rem" }} className="bg-info bg-gradient">
                    <Card.Body className="d-flex flex-column">
                        <Card.Title style={{ color: "white", textAlign: "center" }} className="fs-1 mb-3">Sign Up With</Card.Title>
                        <div className="d-flex align-items-center justify-content-center">
                            <button onClick={handleGoogleSignIn} className="btn btn-outline-success btn-lg mx-1"> Google </button>

                        </div>
                        <div>
                            <h1 className="fs-2 text-white text-center mt-3">OR</h1>
                        </div>
                    </Card.Body>
                    {/* <Card.Img variant="top" src="./images/Login-amico.svg" /> */}
                    <Card.Body>

                        <form onSubmit={handleSubmit(onSubmit)} >
                            <FloatingLabel controlId="floatingInput" label="Full Name*" className="mb-3" >
                                <Form.Control type="text" {...register("name", { required: true })} />
                            </FloatingLabel>
                            {errors.name && <div className="mb-3">Name field is required</div>}

                            <FloatingLabel controlId="floatingInput" label="Contact Number*" className="mb-3" >
                                <Form.Control type="text"  {...register("phone", { required: true })} />
                            </FloatingLabel>
                            {errors.phone && <div className="mb-3">Phone field is required</div>}

                            <FloatingLabel controlId="floatingInput" label="Email address*" className="mb-3" >
                                <Form.Control type="email" placeholder="name@example.com" {...register("email", { required: true })} />
                            </FloatingLabel>
                            {errors.email && <div className="mb-3">Email field is required</div>}

                            <FloatingLabel controlId="floatingPassword" label="Password*">
                                <Form.Control type="password" placeholder="Password"  {...register("password")} />
                            </FloatingLabel>
                            <input type="submit" className="btn btn-warning w-100 mt-3 " />
                        </form>
                    </Card.Body>
                    <Card.Body>
                        {error && <p className="errorMsg"> {error}</p>}
                    </Card.Body>


                </Card>
            </div>
        </div>
    );
};

export default Register;
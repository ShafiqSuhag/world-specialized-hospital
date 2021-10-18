import React from 'react';
import { Card, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useFirebase from '../../../hooks/useFirebase';
import './Login.css';


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    // console.log(watch("email")); // watch input value by passing the name of it
    // console.log(watch(errors.email))

    const {signInusingGoogle} = useFirebase()
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center loginBg " >

            <Card style={{ width: '23rem', padding: "5rem 1rem" }} className="bg-info bg-gradient">
                <Card.Body className="d-flex flex-column">
                    <Card.Title style={{ color: "white", textAlign: "center" }} className="fs-1 mb-3">Sign In With</Card.Title>
                    <div className="d-flex align-items-center">
                        <button onClick={signInusingGoogle} className="btn btn-success btn-lg mx-1"> Google </button>
                        <button className="btn btn-secondary  btn-lg mx-1"> Github </button>
                    </div>
                    <div>
                        <h1 className="fs-2 text-white text-center mt-3">OR</h1>
                    </div>
                </Card.Body>
                {/* <Card.Img variant="top" src="./images/Login-amico.svg" /> */}
                <Card.Body>

                    <form onSubmit={handleSubmit(onSubmit)} >
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

                
            </Card>
        </div>
    );
};

export default Login;
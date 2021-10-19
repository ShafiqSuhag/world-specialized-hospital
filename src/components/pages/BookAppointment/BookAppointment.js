import React from 'react';
import { Card, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const BookAppointment = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);



    return (
        <div className="container d-flex justify-content-center my-3">


            <Card style={{ width: '100%', padding: "5rem 1rem" ,backgroundColor:"#d4d4ff" }} className="shadow">
                <Card.Body className="d-flex flex-column">
                    <Card.Title style={{ color: "white", textAlign: "left" }} className="fs-1 mb-3">APPOINTMENT</Card.Title>
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

                        <FloatingLabel controlId="floatingAppDate" label="Appointment Date*">
                            <Form.Control type="date" placeholder=""  {...register("appDate")} />
                        </FloatingLabel>
                        <input type="submit" className="btn btn-primary w-100 mt-3 " value="CONFIRM APPOINTMENT" />
                    </form>
                </Card.Body>


            </Card>

        </div>
    );
};

export default BookAppointment;
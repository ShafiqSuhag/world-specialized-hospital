import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {


   const {img, serviceTitle} =props.serviceItem

   console.log('service item ' , props)
    return (
        <Card border="light shadow bg-body " >
            <div className=" p-3 bg-body rounded">
                <Card.Img className="rounded serviceImg" variant="top" src={img} />
            </div>

            {/* <Card.Header className="h2">Dental Services</Card.Header> */}
            <h2 className="ps-3 fs-5">
                {serviceTitle}
            </h2>
            <Card.Body>
                {/* <Card.Title>Primary Card Title</Card.Title> */}


                {/* https://themes.hibootstrap.com/rola/wp-content/uploads/2021/07/ser_6-550x500.jpg */}
                <Card.Text className="p-2">
                    Globally harness multimedia based collaboration and idea haring with backend products.
                </Card.Text>
                <button className="btn btn-outline-primary w-100 serviceBtn" style={{ textTransform:"uppercase" }}> Details</button>
            </Card.Body>
        </Card>
    );
};

export default Service;
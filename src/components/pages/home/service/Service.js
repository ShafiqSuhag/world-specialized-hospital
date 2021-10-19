import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {


    const { id, img, serviceTitle, serviceInfo } = props.serviceItem

    // console.log('service item ', props)
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
                <Card.Text className="p-2">
                    {serviceInfo.substring(0,120)}
                    {serviceInfo.length > 120 ? "..." : "" }
                </Card.Text>
                <Link to={`/service-details/${id}`}  className="btn btn-outline-primary w-100 serviceBtn" style={{ textTransform: "uppercase" }}> Details</Link>
            </Card.Body>
        </Card>
    );
};

export default Service;
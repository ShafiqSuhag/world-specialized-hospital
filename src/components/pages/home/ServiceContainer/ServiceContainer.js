import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Service from '../service/Service';

// import { Col } from 'react-bootstrap';


const ServiceContainer = () => {

    const [serviceData, setServiceData] = useState([])

    useEffect(() => {
        fetch('https://custom-json-database.netlify.app/services.json')
            .then(response => response.json())
            .then(result => {
                console.log('JSON DATA', result)
                setServiceData(result)
            })
    }, [])
    // console.log('serviceData---', serviceData)
    return (
        <div className="my-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className="mb-3">
                    <h4>Committed To</h4>
                    <h1>Excellence</h1>
                </div>
                <button className="btn btn-primary ">ALL SERVICES</button>
            </div>
            <Row xs={1} md={3} className="g-5">
                {

                    serviceData.map((serviceItem, index) => {
                        return (
                            <Col key={serviceItem.id} >
                                <Service serviceItem={serviceItem}></Service>
                            </Col>
                        )
                    })
                }

            </Row>


        </div>
    );
};

export default ServiceContainer;
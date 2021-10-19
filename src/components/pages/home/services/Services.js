import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';
import Service from './service/Service.js';


const Services = () => {


    const [serviceData, setServiceData] = useState([])

    useEffect(() => {
        fetch('https://custom-json-database.netlify.app/')
            .then(response => response.json())
            .then(result => {
                console.log('JSON DATA', result)
                setServiceData(result)
            })
    },[setServiceData])
    console.log('serviceData---', serviceData)
    return (
        <div className="my-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className="mb-3">
                    <h4>Committed To</h4>
                    <h1>Excellence</h1>
                </div>
                <button className="btn btn-primary ">ALL SERVICES 4</button>
            </div>
            {/* <div className="g-5 row row-cols-md-3 row-cols-1">
                {
                serviceData.map((service) => {
                    return (
                        <div>Hell Sohag</div>
                        // <Col>
                        //     <Service></Service>
                        // </Col>
                    )
                })}
            </div> */}
            <Row xs={1} md={3} className="g-5">
            {
                // serviceData.map(service => {
                //     return ( <div>hello</div>)
                // })
                serviceData.map((serviceItem,index) => {
                     return (
                         
                        <Col>
                            <Service  props={serviceItem} ></Service>
                        </Col>
                     )
                } )
            }
            {/* {
                    serviceData.map((service) => {
                        return (
                            <Col>
                                <Service></Service>
                            </Col>
                        )
                    })
                } */}
            {/* <Col>
                    <Service></Service>
                </Col> */}
            </Row>


        </div>
    );
};

export default Services;
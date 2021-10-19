import React, { useEffect, useState } from 'react';
import {
    Link,
    useParams
} from "react-router-dom";

const ServiceDetails = (props) => {
    const { serviceId } = useParams();

    const [serviceData, setServiceData] = useState([])
    const [serviceItemDetails, setServiceItemDetails] = useState({})

    useEffect(() => {
        fetch('https://custom-json-database.netlify.app/services.json')
            .then(response => response.json())
            .then(result => {
                console.log('JSON DATA', result)
                setServiceData(result)

            })
    }, [serviceId])

    useEffect(() => {
        setServiceItemDetails(serviceData.find(serviceItem => {
            console.log('serviceItem fine - ', serviceItem["id"], typeof (serviceItem["id"]), typeof (parseInt(serviceId)))
            return serviceItem["id"] === parseInt(serviceId) ? true : false
        }))
        // setServiceItemDetails(serviceData.find(serviceItem =>  serviceItem["id"] == serviceId))
        console.log('setServiceItemDetails---', serviceItemDetails)
    }, [serviceId, serviceData])


    return (
        <div className="container rounded shadow p-3 my-3">
            <h1 className="p-3 fs-2 rounded " style={{ backgroundColor:"#f7f5f5"}}>SERVICE DETAILS  </h1>
            
            <div className="row">
                <div className="col-md-6">
                    <img src={serviceItemDetails?.img} alt="" className="w-100" />
                </div>
                <div className="col-md-6">
                    <h1 className="fs-3 my-3">{serviceItemDetails?.serviceTitle}</h1>
                    <p>{serviceItemDetails?.serviceInfo}</p>
                    <Link to="/home" style={{ textDecoration:"none",  }}>...back to all services</Link>
                </div>
            </div>


        </div>
    );
};

export default ServiceDetails;
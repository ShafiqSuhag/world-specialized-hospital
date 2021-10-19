import React from 'react';
import './Info.css';



const Info = () => {
    return (
        <div>
            <h1 className="fs-2 text-primary  py-3 my-3 text-center" style={{opacity:"50%"}}> HOSPITAL OVERVIEW </h1>
            <div className="row shadow rounded  p-3  m-2">

                <div className="col-md-4 p-4 d-flex flex-column align-items-center justify-content-center info-box-border" >
                    <i className="fas fa-headset fs-3"></i>
                    <p className="fw-bold p-2">24/7 Support</p>
                </div>
                <div className="col-md-4 p-4 d-flex flex-column align-items-center justify-content-center info-box-border" >
                    <i className="fas fa-hospital-user fs-3"></i>
                    <p className="fw-bold p-2">24,350 Patient Served</p>
                </div>
                <div className="col-md-4 p-4 d-flex flex-column align-items-center justify-content-center " >
                    <i className="far fa-thumbs-up fs-3"></i>
                    <p className="fw-bold p-2">4,249 Successful Surgery</p>
                </div>


            </div>
        </div>
    );
};

export default Info;
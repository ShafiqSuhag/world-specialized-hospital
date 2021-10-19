import React from 'react';
import './Info.css';



const Info = () => {
    return (
        <div className="row shadow rounded  p-3  m-2">
            
            <div className="col-md-4 p-4 d-flex flex-column align-items-center justify-content-center info-box-border" >
                <i className="fas fa-headset fs-3"></i>
                <p className="fw-bold p-2">24/7 Support</p>
            </div>
            <div className="col-md-4 p-4 d-flex flex-column align-items-center justify-content-center info-box-border" >
                <i className="fas fa-headset fs-3"></i>
                <p className="fw-bold p-2">24/7 Suppor</p>
            </div>
            <div className="col-md-4 p-4 d-flex flex-column align-items-center justify-content-center " >
                <i className="fas fa-headset fs-3"></i>
                <p className="fw-bold p-2">24/7 Suppor</p>
            </div>
           
           
        </div>
    );
};

export default Info;
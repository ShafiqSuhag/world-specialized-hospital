import React from 'react';

const Footer = () => {
    return (
        <div className="container">
            <div className="row overflow-hidden">
                <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <div className="fs-1 text-logo text-black">WSH</div>
                    <p>World Specialized Hospital</p>
                </div>
                <div className="col-md-4 d-flex   justify-content-center align-items-center">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"> <i className="fab fa-facebook-f m-3"></i> </a>
                    <a href="https://google.com" target="_blank" rel="noreferrer"> <i className="fab fa-google m-3"></i> </a>
                    <a href="https://ig.com" target="_blank" rel="noreferrer"> <i className="fab fa-instagram m-3"></i> </a>
                </div>
                <div className="col-md-4 d-flex flex-column   justify-content-center align-items-start text-secondary">
                    <div><i className="far fa-envelope me-2"></i>info@worldSpecializedhospital.com</div>
                    <div><i className="fas fa-phone-square-alt  me-2"></i>+8801677000123</div>
                    <div><i className="fas fa-map-marker  me-2"></i> Mountain View, California, United States</div>
                </div>
            </div>
            <div className="container text-center mb-3 text-secondary">
                ©Copyright  to World Specialized Hospital
            </div>

        </div>
    );
};

export default Footer;
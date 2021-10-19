import React from 'react';

const Doctors = () => {
    return (

        <div className="container" style={{ margin: "10rem 0px 10rem" }}>
            <h1 className="fs-2 text-primary  pt-3 mt-3"> OUR TOP DOCTORS  </h1>
            <div className="row justify-content-center">
                <div className="g-3 row row-cols-md-3 row-cols-1 ">
                    <div className="col">
                        <div className="  shadow rounded py-3 ">
                            <div className="row">
                                <div className="col-md-6 d-flex justify-content-center align-items-center">
                                    <img src="https://i.pravatar.cc/500?img=32" alt="" className="rounded-circle" style={{ width: "100px" }} />
                                </div>
                                <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                                    <h4>Janis Johnson</h4>
                                    <p>Neurologist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="  shadow rounded py-3 ">
                            <div className="row">
                                <div className="col-md-6 d-flex justify-content-center align-items-center">
                                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/yi0wou0N5EsZGDfVejLKR/efce71fb9c36c759a5c96d37a8cdc5e0/coursera-learner-b.png" alt="" className="rounded-circle" style={{ width: "100px" }} />
                                </div>
                                <div className="col-md-6 d-flex  justify-content-center align-items-center flex-column">
                                    <h4>Janis Johnson</h4>
                                    <p>Dermatologist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="  shadow rounded py-3 ">
                            <div className="row">
                                <div className="col-md-6 d-flex justify-content-center align-items-center">
                                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5LDGatPtRSYDXjfMkQF0Id/238e7338df5a05e837e1fef84cceb7fc/coursera-learner-d.png" alt="" className="rounded-circle" style={{ width: "100px" }} />
                                </div>
                                <div className="col-md-6 d-flex  justify-content-center align-items-center flex-column">
                                    <h4>Janis Johnson</h4>
                                    <p>Medicine Specialist</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Doctors;
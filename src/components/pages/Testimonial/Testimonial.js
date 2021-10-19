import React from 'react';

const Testimonial = () => {
    return (
        <div className="container" style={{ margin: "10rem 0px 10rem" }}>
            <h1 className="fs-2 text-primary  pt-3 mt-3"> Patient's Testimonial   </h1>
            <span className="text-warning">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>

            </span>
            <div className="row justify-content-center">
                <div className="g-3 row row-cols-md-3 row-cols-1 ">
                    <div className="col">
                        <div className="  shadow rounded py-3 bg-primary ">
                            <div className="row p-3  ">
                                <div className="col-md-12 d-flex justify-content-center align-items-startflex-column flex-column p-3 ">
                                    <h4 className="text-white">Ashok Buffe</h4>
                                    <p>What a wonderful experience! I can’t thank enough the Jaslok staff from a every senior doctor to...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="  shadow rounded py-3 bg-warning ">
                            <div className="row p-3  ">
                                <div className="col-md-12 d-flex justify-content-center align-items-startflex-column flex-column p-3 ">
                                    <h4>Mantasha Sahil</h4>
                                    <p>Very satisfied and happy with the service by staff. Sisters were very good and loving. God bless you...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="  shadow rounded py-3 bg-info ">
                            <div className="row p-3  ">
                                <div className="col-md-12 d-flex justify-content-center align-items-startflex-column flex-column p-3 ">
                                    <h4 className="text-white">Kiran Harchandani</h4>
                                    <p>Very good treatment and care taking team of Dr. Firuza Parikh and all doctors of the same team.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Testimonial;
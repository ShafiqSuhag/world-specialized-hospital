import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (

        <div className="container" >
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center align-items-center flex-column" style={{ height:"500px"}}>
                    <div className="error-template text-center">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details my-3">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <Link className="btn btn-primary btn-lg" to="/home">  Take Me Home </Link>
                            {/* <a href="http://www.jquery2dotnet.com" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                                Take Me Home </a><a href="http://www.jquery2dotnet.com" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-envelope"></span> Contact Support </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NotFound;
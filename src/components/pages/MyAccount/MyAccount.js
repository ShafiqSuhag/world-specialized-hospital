import React from 'react';
import useAuth from '../../../hooks/useAuth';

const MyAccount = () => {
    const {user} = useAuth()
    return (
        <div className="container  flex-column d-flex justify-content-start my-3 p-3 shadow rounded">
            <h2>Profile Info</h2>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Email </th>
                        <td>{user?.email}</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">Full Name</th>
                        <td>{user?.displayName}</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">Last Loggedin</th>
                        <td>{user?.metadata?.lastSignInTime}</td>
                        
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default MyAccount;
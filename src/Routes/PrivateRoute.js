import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <div>
            <p className='text-2xl font-bold'>Loading...</p>
        </div>
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to={'/auth/signin'} state={{ from: location }} replace ></Navigate >

};

export default PrivateRoute;
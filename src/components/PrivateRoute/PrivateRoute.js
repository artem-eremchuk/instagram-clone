import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AppContext } from '../../App';

const PrivateRoute = ({ children, ...props }) => {
    const { loggedIn } = useContext(AppContext)

    return (
        <Route
            {...props}
            render={() =>
                loggedIn ? children : <Redirect to='/' />
            }    
        />
    )
}

export default PrivateRoute
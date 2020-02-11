import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import SessionHandler from './SessionHandler';
export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                    if(SessionHandler.isAuthenticated() === "1"){
                        return <Component {...props} />
                    }else{
                        return <Redirect to={
                            {
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }
                        }/>
                    }
                }
            }
        />
    );
};

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...props }) => {
    return (
        <Route 
            { ...props }
            render={props => {
                return(
                    isAuthenticated
                    ?
                        <Component { ...props }/>
                    :
                        <Redirect to='/login' />
                )
            }}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated,
})

export default connect(mapStateToProps)(PrivateRoute);
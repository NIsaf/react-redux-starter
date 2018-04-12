import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withRouter, Redirect } from 'react-router-dom';
import {
    authenticate,
} from '../../state/auth/actions';
import Spinner from '../../components/Spinner';

class Login extends React.PureComponent {
    static propTypes = {
        authenticate: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
        isAuthenticating: PropTypes.bool.isRequired,
    }
    
    render(){
        return(
            this.props.isAuthenticated
            ?
                <Redirect to="/" />
            :
            this.props.isAuthenticating 
            ?
                <Spinner />
            :
                <React.Fragment>
                    <Helmet>
                        <title>Login Page</title>
                    </Helmet>
                    <h1>Login Page</h1>
                    <button
                        onClick={ this.props.authenticate }
                    >
                        Login
                    </button>
                </React.Fragment>
        )
    }
}

const mapStateToProps = ({ auth }) => ({
    isAuthenticating: auth.isAuthenticating,
    isAuthenticated: auth.isAuthenticated,
})

const mapDispatchToProps = {
    authenticate,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
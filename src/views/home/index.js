import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withRouter, Link } from 'react-router-dom';
import {
    logout,
} from '../../state/auth/actions';

class Home extends React.PureComponent {
    static propTypes = {
        logout: PropTypes.func.isRequired,
    }
    
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>Home Page</title>
                </Helmet>
                <h1>Home Page</h1>
                <h4><Link to="/form">Form Example</Link></h4>
                <h4><Link to="/profile/1">Dynamic Route Example</Link></h4>
                <h4><Link to="/dfjisbdfj">Bad Route Example</Link></h4>
                <button onClick={ this.props.logout }>Logout</button>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = {
    logout,
}

export default withRouter(connect(null, mapDispatchToProps)(Home));
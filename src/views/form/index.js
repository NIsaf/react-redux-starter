import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withRouter, Link } from 'react-router-dom';
import {
    updateFormField,
    resetForm,
} from '../../state/form/actions';

class Form extends React.PureComponent {
    static propTypes = {
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        updateFormField: PropTypes.func.isRequired,
        resetForm: PropTypes.func.isRequired,
    }

    // Currying is used to allow passing settings arguments in an event without inlining an arrow 
    // function or using bind()
    onChange = field => e => {
        e.preventDefault();
        const value = e.target.value;
        this.props.updateFormField({
            field,
            value,
        })
    }
    
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>Example Redux Managed Form</title>
                </Helmet>
                <h1>Example Redux Managed Form</h1>
                <div>
                    <h2>Current Redux Form State</h2>
                    <h4>Username: { this.props.username }</h4>
                    <h4>Email: { this.props.email }</h4>
                </div>
                <div style={{flexDirection: 'column'}}>
                    <h2>Update Form</h2>
                    <input 
                        type="text"
                        placeholder="Username..."
                        value={ this.props.username } 
                        onChange={ this.onChange('username') } 
                    />
                    <input 
                        type="text"
                        placeholder="Email..."
                        value={ this.props.email } 
                        onChange={ this.onChange('email') } 
                    />
                </div>
                <button onClick={ this.props.resetForm }>Reset</button>
                <Link to="/">Back to home</Link>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ form }) => ({
    username: form.username,
    email: form.email,
})

const mapDispatchToProps = {
    updateFormField,
    resetForm,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
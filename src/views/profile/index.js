import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withRouter, Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import {
    fetchProfile,
} from '../../state/api/actions';

class Profile extends React.PureComponent {
    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        error: PropTypes.object,
        profile: PropTypes.shape({
            username: PropTypes.string,
            email: PropTypes.string,
        }),
    }

    componentDidMount(){
        const profileId = this.props.match.params.id;
        this.props.fetchProfile(profileId);
    }

    render(){
        return(
            this.props.isFetching
                ?
                    <Spinner />
                : this.props.error
                ?
                    <div>Error: { this.props.error }</div>
                :
                    <div>
                        <Helmet>
                            <title>{ this.props.profile.username }</title>
                        </Helmet>
                        <h1>Profile Page</h1>
                        <h2>Username:</h2>
                        <p>{ this.props.profile.username }</p>
                        <h2>Email:</h2>
                        <p>{ this.props.profile.email }</p>
                        <Link to="/">Back to Home</Link>
                    </div>
        )
    }
}

const mapStateToProps = ({
    api,
}) => ({
    isFetching: api.isFetching,
    error: api.error,
    profile: api.profile,
})

const mapDispatchToProps = {
    fetchProfile,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
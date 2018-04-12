import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withRouter, Link } from 'react-router-dom';
import './index.css';

class XXX extends React.PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }
    
    render(){
        return(
            <div>XXX</div>
        )
    }
}

const mapStateToProps = store => ({

})

const mapDispatchToProps = {

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(XXX));
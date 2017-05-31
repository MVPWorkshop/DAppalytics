import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allCalls } from '../../actions/allCalls';
import { callsByFunc } from '../../actions/callsByFunc';
import { etherReceived } from '../../actions/etherReceived';

class Search extends Component {
    constructor(props){
        super(props);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleFormSubmit(e){
        e.preventDefault();

        let contractAddr = this.refs.contractAddr.value;

        this.props.allCalls(contractAddr);
        this.props.callsByFunc(contractAddr);
        this.props.etherReceived(contractAddr);
    }
    render(){
        return (
            <div className="search">
                <form onSubmit={this.handleFormSubmit}>
                    <input ref="contractAddr" type="text" placeholder="Contract address"/>
                    <button type="submit">GO</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(
    { allCalls, callsByFunc, etherReceived }, dispatch
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)
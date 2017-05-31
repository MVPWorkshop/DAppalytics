import React, { Component } from 'react';

import Header from '../Header/';
import Search from '../Search/';
import AllCalls from '../AllCalls/';
import CallsByFunc from '../CallsByFunc';
import EtherReceived from '../EtherReceived';

export default class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard">
                <Header>
                    <Search/>
                </Header>
                <div className="widgets">
                    <AllCalls/>
                    <CallsByFunc/>
                    <EtherReceived/>
                </div>
            </div>
        )
    }
}
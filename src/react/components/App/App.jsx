import React from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends React.Component{
    componentWillMount(){
    }
    render(){
        return(
            <div className="app-wrapper">
                <main className="main-content">
                    <h1>Hello world!</h1>
                    {/* Components passed from react-router */}
                    {/*
                    <Route path={"x"} component={y}/>
                    */}
                </main>
            </div>
        )
    }
}

//Connect to store
const mapStateToProps = (state) => ( state );
const mapDispatchToProps = (dispatch) => ( bindActionCreators({}, dispatch) );
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

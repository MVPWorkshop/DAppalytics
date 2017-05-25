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
                {/* Components passed from react-router */}
                <main className="main-content">
                    {React.cloneElement({...this.props}.children, {...this.props})}
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

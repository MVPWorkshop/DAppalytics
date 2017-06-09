import React from 'react';
import { connect } from 'react-redux';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const options = {
    responsive: true,
    title: {
        display: true,
        text: 'Custom Chart Title'
    }
};

const AllCalls = ({ data }) => (
    <ResponsiveContainer width="100%" height={300}>
        <LineChart width={600} height={300} data={data}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="date"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="calls" stroke="#3f63dd" activeDot={{r: 8}}/>
        </LineChart>
    </ResponsiveContainer>
);

const mapStateToProps = state => state.allCalls;

export default connect(
    mapStateToProps
)(AllCalls);
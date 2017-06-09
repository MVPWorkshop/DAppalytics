import React from 'react';
import { connect } from 'react-redux';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const alterData = (data) => {
    return {
        type: 'line',
        labels: data.map(item => item.date),
        datasets: [{
            label: "Num of Calls",
            fillColor: "#3f63dd",
            strokeColor: "#3f63dd",
            data: data.map(item => item.etherReceived)
        }]
    }
};

const EtherReceived = ({ data }) => (
    <ResponsiveContainer width="100%" height={300}>
        <BarChart width={600} height={300} data={data}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="etherReceived"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="etherReceived" fill="#3f63dd" />
        </BarChart>
    </ResponsiveContainer>
);

const mapStateToProps = state => state.etherReceived;

export default connect(
    mapStateToProps
)(EtherReceived);
import React from 'react';
import { connect } from 'react-redux';
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from 'recharts';


const shadeColor = (color, percent) => {
    let f = parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
};

const alterData = (data) => {
    return data.map(item => {
        let color = "#"+((1<<24)*Math.random()|0).toString(16);
        return {
            value: item.calls,
            color: color,
            label: item.function,
            highlight: shadeColor(color, -0.2)
        }
    })
};

const CallsByFunc = ({ data }) => (
    <ResponsiveContainer width="100%" height={300}>
        <PieChart>
            <Pie label={({ name }) => `${name}`} dataKey="calls" data={data}  outerRadius={130} fill="#3f63dd"/>
            <Legend />
            <Tooltip payload={data} label="name" labelFormatter={({ name }) => `${name}`}/>
        </PieChart>
    </ResponsiveContainer>
);

const mapStateToProps = state => state.callsByFunc;

export default connect(
    mapStateToProps
)(CallsByFunc);
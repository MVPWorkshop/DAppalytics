import React from 'react';
import { connect } from 'react-redux';
import { Bar as BarChart } from 'react-chartjs';

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
    <div className="ether-received widget">
        <BarChart type="line"
                  data={alterData(data)}
                  redraw
                  options={{
                      responsive: true
                  }}
                  width="600"
                  height="250"/>
    </div>
);

const mapStateToProps = state => state.etherReceived;

export default connect(
    mapStateToProps
)(EtherReceived);
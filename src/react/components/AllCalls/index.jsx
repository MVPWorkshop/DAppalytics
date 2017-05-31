import React from 'react';
import { connect } from 'react-redux';
import { Line as LineChart } from 'react-chartjs';


const alterData = (data) => {
    return {
        labels: data.map(item => item.date),
        datasets: [{
            label: "Num of Calls",
            fillColor: "rgba(0,0,255,0.1)",
            strokeColor: "#3f63dd",
            pointColor: "#3f63dd",
            pointStrokeColor: "#3f63dd",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: data.map(item => item.calls)
        }]
    }
};

const AllCalls = ({ data }) => (
    <div className="all-calls widget">
        <LineChart type="line"
                   data={alterData(data)}
                   redraw
                   options={{
                        responsive: true
                    }}
                   width="600"
                   height="250"/>
    </div>
);

const mapStateToProps = state => state.allCalls;

export default connect(
    mapStateToProps
)(AllCalls);
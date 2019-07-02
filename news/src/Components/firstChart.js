import React from 'react';
import ReactDOM from 'react-dom';
import {
    HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    XYPlot,
    YAxis,
    LineMarkSeries} from 'react-vis';


const Chart = () => {
    return (
<XYPlot width={400} height={300}><XAxis/><YAxis/>
    <HorizontalGridLines />
    <VerticalGridLines />
    <LineMarkSeries data={data} />
    </XYPlot>
    )
}

// function Chart({data}) {
//   return 
// }

const data = new Array(19).fill(0).reduce((prev, curr) => [...prev, {
  x: prev.slice(-1)[0].x + 1,
  y: prev.slice(-1)[0].y * (0.9 + Math.random() * 0.2) 
}], [{x: 0, y: 10}]);

const chart = <Chart data={data}/>;
ReactDOM.render(chart, document.querySelector('#root'));

export default Chart;

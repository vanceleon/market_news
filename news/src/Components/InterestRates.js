// import React, { Component } from 'react';
// import {Container, Header} from 'semantic-ui-react';
// import axios from 'axios';
// import { curveCatmullRom } from 'd3-shape';
// import {
//   XYPlot,
//   XAxis,
//   YAxis,
//   HorizontalGridLines,
//   VerticalGridLines,
//   LineSeries
// } from 'index';

// class InterestRates extends Component {
//   constructor() {
//     super();
//     this.state = {
//       FedInt: null,
//       URL:
//         'https://www.quandl.com/api/v3/datasets/USTREASURY/YIELD.json?api_key=',
//       quandl_key: process.env.REACT_APP_QUANDL_API,
//       loaded: null
//     };
//   }

//   componentDidMount() {
//     this.getNews();
//   }

//   getNews = () => {
//     const URL = `${this.state.URL}${this.state.quandl_key}`;
//     axios
//       .get(URL)
//       .then(res => {
//         const fedYield = res.data;
//         // console.log("interest rates info ", fedYield);
//         this.setState({ FedInt: fedYield, loaded: true });
//       })
//       .catch(err => console.log('Error', err));
//   };

//   render() {
//     if (this.state.loaded) {
//       let interestRateData = this.state.FedInt.dataset;
//       console.log("interest rate dataset", interestRateData);
//       return (
// <div className="interest-rate-table-container">
        

//         <Container text>
//         <div style={{width:'75%'}}>
//           <Header as='h1'>{interestRateData.name}</Header>

//           <table id='interestRates' className='ui single line table'>
//             <thead>
//               <tr>
//                 {interestRateData.column_names.map((header, i) => {
//                   return <th key={i}>{header}</th>;
//                 })}
//               </tr>
//             </thead>
//             <tbody>
//               {interestRateData.data.slice(0, 10).map(daily => {
//                 return (
//                   <tr>
//                     {daily.map(rate => {
//                       return <td>{rate}</td>;
//                     })}
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>

//         </Container>
// </div>
//       );
//     } else {
//       return (
//         <div className='ui segment'>
//           <div className='ui active inverted dimmer'>
//             <div className='ui text loader'>Loading</div>
//           </div>
//           <p />
//         </div>
//       );
//     }
//   }
// }

// export default InterestRates;


import React from 'react';
import {curveCatmullRom} from 'd3-shape';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'index';

export default function Example(props) {
  return (
    <XYPlot width={300} height={300}>
      <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
      <VerticalGridLines style={{stroke: '#B7E9ED'}} />
      <XAxis
        title="X Axis"
        style={{
          line: {stroke: '#ADDDE1'},
          ticks: {stroke: '#ADDDE1'},
          text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
        }}
      />
      <YAxis title="Y Axis" />
      <LineSeries
        className="first-series"
        data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
        style={{
          strokeLinejoin: 'round',
          strokeWidth: 4
        }}
      />
      <LineSeries className="second-series" data={null} />
      <LineSeries
        className="third-series"
        curve={'curveMonotoneX'}
        data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
        strokeDasharray="7, 3"
      />
      <LineSeries
        className="fourth-series"
        curve={curveCatmullRom.alpha(0.5)}
        data={[{x: 1, y: 7}, {x: 2, y: 11}, {x: 3, y: 9}, {x: 4, y: 2}]}
      />
    </XYPlot>
  );
}
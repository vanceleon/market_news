import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import { interestDataOrganizer } from './functions/interestData';
import Data from '../_data/interestRates';

// const data = [
//   {
//     name: 'Page A', uv: 41000, pv: 1.23, amt: 300,
//   },
//   {
//     name: 'Page B', uv: 3000, pv: .05, amt: 2210,
//   },
//   {
//     name: 'Page C', uv: 2000, pv: .40, amt: 2290,
//   },
//   {
//     name: 'Page D', uv: 2780, pv: .70, amt: 2000,
//   },
//   {
//     name: 'Page E', uv: 1890, pv: .90, amt: 2181,
//   },
//   {
//     name: 'Page F', uv: 2390, pv: 1.2, amt: 2500,
//   },
//   {
//     name: 'Page G', uv: 3490, pv: 1.90, amt: 2100, test: 30002
//   },
// ];

class InterestRates extends Component {
  constructor() {
    super();
    this.state = {
      fedInt: [],
      fedData: {},
      URL:
        'https://www.quandl.com/api/v3/datasets/USTREASURY/YIELD.json?api_key=',
      quandl_key: process.env.REACT_APP_QUANDL_API,
      loaded: true
    };
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = () => {
    const URL = `${this.state.URL}${this.state.quandl_key}`;
    // axios
    //   .get(URL)
    //   .then(res => {
    //     console.log('data from api',res.data)
    const preInterestRateData = Data.dataset;
    const interestData = interestDataOrganizer(preInterestRateData);
    this.setState({
      fedInt: interestData,
      loaded: true,
      fedData: preInterestRateData
    });
    // })
    // .catch(err => console.log('Error', err));
  };

  render() {
    if (this.state.loaded) {
      let data = [0, 4,4,6,5]
      console.log('before assign',data)
      data = this.state.fedInt;
      const dates = [];
      let i = 0;
      while (i < 1) {
        for (const date in data[i]) {
          dates.push(date);
        }
        i++;
      }
      const dateRef = dates[1]
      console.log('interest rate dataset', data[1]);
      
      // next step just manually create data struture and pass that through to see if it works
      return (
        <div className='interest-rate-table-container'>
          <Header as='h1'>{this.state.fedData.name}</Header>
          {/* <div>{dates[1]}</div>
          <div>{data[4].name}</div> */}
          
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 7,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
             <Line type='monotone' dataKey={dates[1]} stroke='#82ca9d' />
            {/* <Line type='monotone' dataKey={dates[2]} stroke='#B32C2C' />
            <Line type='monotone' dataKey={dates[3]} stroke='#003f5c' />
            <Line type='monotone' dataKey={dates[4]} stroke='#58508d' />
            <Line type='monotone' dataKey={dates[5]} stroke='#bc5090' />
            <Line type='monotone' dataKey={dates[6]} stroke='#ff6361' />
            <Line type='monotone' dataKey={dates[7]} stroke='#ffa600' />
            <Line type='monotone' dataKey={dates[8]} stroke='#d45087' />
            <Line type='monotone' dataKey={dates[9]} stroke='#f95d6a' />
            <Line type='monotone' dataKey={dates[10]} stroke='#ff7c43' />
            <Line type='monotone' dataKey={dates[11]} stroke='#9dc6e0' />
            <Line type='monotone' dataKey={dates[12]} stroke='#c1e7ff' />  */}
          </LineChart> 
           
        </div>
      );
    } else {
      return (
        <div className='ui segment'>
          <div className='ui active inverted dimmer'>
            <div className='ui text loader'>Loading</div>
          </div>
          <p />
        </div>
      );
    }
  }
}

export default InterestRates;
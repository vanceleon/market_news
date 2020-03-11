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

class InterestRates extends Component {
  constructor() {
    super();
    this.state = {
      FedInt: Data,
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
    // const URL = `${this.state.URL}${this.state.quandl_key}`;
    // axios
    //   .get(URL)
    //   .then(res => {
    // console.log(Data)
    const preInterestRateData = Data.dataset;
    const interestData = interestDataOrganizer(preInterestRateData);
    this.setState({
      FedInt: interestData,
      loaded: true,
      fedData: preInterestRateData
    });
    // })
    // .catch(err => console.log('Error', err));
  };

  render() {
    if (this.state.loaded) {
      let interestRateData = this.state.FedInt;
      console.log('interest rate dataset', interestRateData);
      const dates = [];
      let i = 0;
      while (i < 1) {
        for (const date in interestRateData[i]) {
          dates.push(date);
        }
        i++;
      }
      console.log(dates);
      return (
        <div className='interest-rate-table-container'>
          <Header as='h1'>{this.state.fedData.name}</Header>
          <LineChart
            width={500}
            height={300}
            data={interestRateData}
            margin={{
              top: 7,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray=' 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Line type='monotone' dataKey={dates[1]} stroke='#82ca9d' />
            <Line type='monotone' dataKey={dates[2]} stroke='#B32C2C' />
            <Line type='monotone' dataKey={dates[3]} stroke='#003f5c' />
            <Line type='monotone' dataKey={dates[4]} stroke='#58508d' />
            <Line type='monotone' dataKey={dates[5]} stroke='#bc5090' />
            <Line type='monotone' dataKey={dates[6]} stroke='#ff6361' />
            <Line type='monotone' dataKey={dates[7]} stroke='#ffa600' />
            {/* <Line type='monotone' dataKey={dates[8]} stroke='#d45087' />
            <Line type='monotone' dataKey={dates[9]} stroke='#f95d6a' />
            <Line type='monotone' dataKey={dates[10]} stroke='#ff7c43' />
            <Line type='monotone' dataKey={dates[11]} stroke='#9dc6e0' />
            <Line type='monotone' dataKey={dates[12]} stroke='#c1e7ff' /> */}
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

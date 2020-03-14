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
    axios
      .get(URL)
      .then(res => {
    const preInterestRateData = res.data.dataset;
    const interestData = interestDataOrganizer(preInterestRateData);
    this.setState({
      fedInt: interestData,
      loaded: true,
      fedData: preInterestRateData
    });
    })
    .catch(err => console.log('Error', err));
  };

  render() {
    if (this.state.loaded) {
      let data = [0, 4,4,6,5]
      data = this.state.fedInt;
      const dates = [];
      let i = 0;
      while (i < 1) {
        for (const date in data[i]) {
          dates.push(date);
        }
        i++;
      }

      return (
        <div className='interest-rate-table-container'>
          <Header as='h1'>Treasury Yield Rates</Header>        
          <LineChart
            width={600}
            height={300}
            data={data}
            className='interest-chart'
          >
            <CartesianGrid strokeDasharray='3 3' />
            <Legend />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
             <Line type='monotone' dataKey={dates[1]} stroke='#B32C2C' strokeWidth={4} />
            <Line type='monotone' dataKey={dates[2]} stroke='#82ca9d' />
            <Line type='monotone' dataKey={dates[3]} stroke='#003f5c' />
            <Line type='monotone' dataKey={dates[7]} stroke='#ffa600' />
            <Line type='monotone' dataKey={dates[10]} stroke='#ff7c43' />
            <Line type='monotone' dataKey={dates[15]} stroke='#c1e7ff' /> 
            <Line type='monotone' dataKey={dates[20]} stroke='#95A5A5' /> 
            <Line type='monotone' dataKey={dates[30]} stroke='#8F43AD' /> 
            <Line type='monotone' dataKey={dates[45]} stroke='#D25400' /> 
            <Line type='monotone' dataKey={dates[60]} stroke='#F39B11' /> 
            <Line type='monotone' dataKey={dates[90]} stroke='#2D3E50' strokeWidth={4}/> 
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
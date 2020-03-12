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
        console.log('data from api',res.data)
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
      // const dateRef = dates[1]
      console.log('interest rate dataset', data);
      // const testData = [
      //  {name: "1 MO", date: 1.59},
      // {name: "2 MO", date: 1.56},
      //  {name: "3 MO", date: 1.53},
      //  {name: "6 MO", date: 1.42},
      //  {name: "1 YR", date: 1.26},
      //  {name: "2 YR", date: 1.16},
      //  {name: "3 YR", date: 1.14},
      //  {name: "5 YR", date: 1.14},
      //  {name: "7 YR", date: 1.25},
      //  {name: "10 YR", date: 1.33},
      //  {name: "20 YR", date: 1.64},
      // {name: "30 YR", date: 1.81}]
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
            <Line type='monotone' dataKey={dates[20]} stroke='#c1e7ff' /> 
            <Line type='monotone' dataKey={dates[30]} stroke='#c1e7ff' /> 
            <Line type='monotone' dataKey={dates[45]} stroke='#c1e7ff' /> 
            <Line type='monotone' dataKey={dates[60]} stroke='#c1e7ff' /> 
            <Line type='monotone' dataKey={dates[90]} stroke='#c1e7ff' /> 
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
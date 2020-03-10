import React, { Component, PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {Header} from 'semantic-ui-react';
import axios from 'axios';
import LineGraph from './LineChart';
import {interestDataOrganizer} from './functions/interestData';
import * as data from '../_data/interestRates.json';

const {interestData} = data

class InterestRates extends Component {
  constructor() {
    super();
    this.state = {
      FedInt: null,
      URL:
        'https://www.quandl.com/api/v3/datasets/USTREASURY/YIELD.json?api_key=',
      quandl_key: process.env.REACT_APP_QUANDL_API,
      loaded: null

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
      console.log(data)
        // const interestData = interestDataOrganizer(interestData);
        // this.setState({ FedInt: interestData, loaded: true });
      // })
      // .catch(err => console.log('Error', err));
  };



  render() {
    if (this.state.loaded) {
      let interestRateData = this.state.FedInt.dataset;
      console.log('interest rate dataset', interestRateData);
      return (
        <div className='interest-rate-table-container'>
          <Header as='h1'>{interestRateData.name}</Header>


        
     
              
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

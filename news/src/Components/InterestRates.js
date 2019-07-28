import React, { Component } from 'react';
import {Container, Header} from 'semantic-ui-react';
import axios from 'axios';
// import { dummyData } from '../dummyData.js';

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
    const URL = `${this.state.URL}${this.state.quandl_key}`;
    axios
      .get(URL)
      .then(res => {
        const fedYield = res.data;
        // console.log("interest rates info ", fedYield);
        this.setState({ FedInt: fedYield, loaded: true });
      })
      .catch(err => console.log('Error', err));
  };

  render() {
    if (this.state.loaded) {
      let interestRateData = this.state.FedInt.dataset;
      console.log("interest rate dataset", interestRateData);
      return (
<div className="interest-rate-table-container">
        

        <Container text>
        <div style={{width:'75%'}}>
          <Header as='h1'>{interestRateData.name}</Header>

          <table id='interestRates' className='ui single line table'>
            <thead>
              <tr>
                {interestRateData.column_names.map((header, i) => {
                  return <th key={i}>{header}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {interestRateData.data.slice(0, 10).map(daily => {
                return (
                  <tr>
                    {daily.map(rate => {
                      return <td>{rate}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        </Container>
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

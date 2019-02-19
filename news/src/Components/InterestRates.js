import React, { Component } from 'react';
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
      // quandl_key: "3X_mgMzWykRFrv6goGUd",
      loaded: null
    };
  }

  componentDidMount() {
    this.getNews();
    // this.setState({loaded: true})
    // this.setState({ FedInt: dummyData, loaded: true });
  }

  getNews = () => {
    // console.log(this.state.quandl_key)
    const URL = `${this.state.URL}${this.state.quandl_key}`;
    // const URL = this.state.URL
    axios
      .get(URL)
      .then(res => {
        const fedYield = res.data;
        // console.log(wsj_news);
        this.setState({ FedInt: fedYield, loaded: true });
       })
      .catch(err => console.log('Error', err));
  };

  render() {
    if (this.state.loaded) {
      let interestRateData = this.state.FedInt.dataset;
      return (
        <div className='interestRateCards'>
          <div className='interestRateTable'>
            <h1>{interestRateData.name}</h1>
            <table>
              <tr>
                {interestRateData.column_names.map((header, i) => {
                  return <th key={i}>{header}</th>;
                })}
              </tr>
              {interestRateData.data.slice(0,10).map((daily) => {
                return (
                <tr>
                  {daily.map((rate) => {
                  return <td>{rate}</td>;
                  })}
                  </tr>
                ) 
              })}
            </table>
          </div>
        </div>
      );
    } else {
      return <h1>Loading Interest Rates</h1>;
    }
  }
}

export default InterestRates;

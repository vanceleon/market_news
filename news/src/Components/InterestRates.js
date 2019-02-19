import React, { Component } from 'react';
import axios from 'axios';
import {dummyData} from '../dummyData.js'


class InterestRates extends Component {
  constructor() {
    super();
    this.state = {
      FedInt: [],
      URL: 'https://www.quandl.com/api/v3/datasets/USTREASURY/YIELD.json?api_key=',
      quandl_key: process.env.QUANDL_API,
      // interestData: dummyData,
    };
  }

  componentDidMount() {
    // this.getNews();
    this.setState({FedInt:dummyData});
  }


  // getNews = () => {
  //   // const URL = `${this.state.URL}${this.state.quandl_key}`;
  //   // const URL = this.state.URL
  //   // const interestData = this.state.interestData;
  //   axios
  //     .get(dummyData)
  //     .then(res => {
  //       console.log(res);
  //       const fedYield = res.data;
  //       // console.log(wsj_news);
  //       this.setState({ FedInt: fedYield });
  //       {
  //         console.log("interest rates", this.state.FedInt.dataset);
  //       }
  //     })
  //     .catch(err => console.log('Error', err));
  // };

  render() {

    // if (this.state.FedInt.id) {
      return (
        <div className='interestRateCards'>
          {console.log(this.state.FedInt.dataset)}
          <div className="interestRateTable">

          </div>
        </div>
      );
    // } else {
    //   return <h1>Loading</h1>;
    // }
  }
}

export default InterestRates;

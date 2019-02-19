import React, { Component } from 'react';
import axios from 'axios';
import {dummyData} from '../dummyData.js'


class InterestRates extends Component {
  constructor() {
    super();
    this.state = {
      FedInt: null,
      URL: 'https://www.quandl.com/api/v3/datasets/USTREASURY/YIELD.json?api_key=',
      quandl_key: process.env.QUANDL_API,
      loaded: null,
      // interestData: dummyData,
    };
  }

  componentDidMount() {
    // this.getNews();
    this.setState({FedInt:dummyData, loaded: true});
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
    console.log(this.state.loaded)
    console.log(this.state.FedInt);
     if (this.state.loaded){
      let interestRateData = this.state.FedInt;
      return (
        <div className='interestRateCards'>
          <div className="interestRateTable">
            <h1>{interestRateData.dataset.id}</h1>
            testing
          </div>
        </div>
      )
     }else{
       return <h1>Loading Interest Rates</h1>
     }
  }
}


export default InterestRates;

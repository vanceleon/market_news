import React, { Component } from 'react';
import axios from 'axios';

class InterestRates extends Component {
  constructor() {
    super();
    this.state = {
      FedInt: [],
      URL: 'https://www.quandl.com/api/v3/datasets/USTREASURY/YIELD.json?api_key=',
      quandl_key: process.env.QUANDL_API
    };
  }

  componentDidMount() {
    this.getNews();
  }


  getNews = () => {
    // const URL = `${this.state.URL}${this.state.quandl_key}`;
    const URL = this.state.URL
    axios
      .get(URL)
      .then(res => {
        const wsj_news = res.data;
        // console.log(wsj_news);
        this.setState({ FedInt: wsj_news });
        {
          console.log(this.state.FedInt);
        }
      })
      .catch(err => console.log('Error', err));
  };

  render() {

    if (this.state.FedInt.id) {
      return (
        <div className='wsj-Cards'>
          {console.log(this.state.FedInt)}
          {this.state.FedInt.map((news, i) => {
            return (
              <React.Fragment key={i}>
                testing
              </React.Fragment>
            );
          })}
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default InterestRates;

import React, { Component } from 'react';
import axios from 'axios';
// const URL = ``;

class WSJ extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      URL:
        'https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&apiKey=',
      wsj_key: process.env.REACT_APP_NEWS_API,
    };
  }

  componentDidMount() {
    this.getNews();
    // console.log(this.state.news);
  }

  getNews = () => {
    const url2 = `${this.state.URL}${this.state.wsj_key}`
    axios
      .get(url2)
      .then(res => {
        const wsj_news = res.data;
        console.log(wsj_news);
        this.setState({ news: wsj_news });
      })
      .catch(err => console.log('Error', err));
  };

  render() {
    return (
      <React.Fragment> 

      </React.Fragment>
    )
  }
}

export default WSJ;

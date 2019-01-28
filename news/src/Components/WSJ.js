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
    // ev.preventDefault();
    // let news = this.state.news;
    const url1 = "https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&apiKey=080e8adf25a0467ba76d99043a15928b"
    const url2 = `${this.state.URL}${this.state.wsj_key}`
    console.log(url1)
    console.log(url2)
    console.log(this.state.wsj_key);
    axios
    //   .get(`${this.state.URL}${process.env.NEWS_APIS}`)
      .get(url1)
      .then(res => {
        const wsj_news = res.data;
        console.log(wsj_news);
        this.setState({ news: wsj_news });
      })
      .catch(err => console.log('Error', err));
  };

  render() {
    return <div className='wsj-highlights'>testing</div>;
  }
}

export default WSJ;

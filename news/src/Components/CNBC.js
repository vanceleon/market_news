import React, { Component } from 'react';
import axios from 'axios';
import CentralNewsFuncComponent from './NewsFunc'; 

class CNBC extends Component {
  constructor() {
    super();
    this.state = {
      newsHeader: 'CNBC',
      newsInfo: [],
      firstCard: [],
      URL:
        'https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=',
      news_key: process.env.REACT_APP_NEWS_API
    };
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = () => {
    const URL = `${this.state.URL}${this.state.news_key}`;
    axios
      .get(URL)
      .then(res => {
        const newsDataRetrieve = res.data;
        this.setState({ newsInfo: newsDataRetrieve, firstCard: newsDataRetrieve.articles[0] });
      })
      .catch(err => console.log('Error', err));
  };

  onCardClick = event => {
    event.preventDefault();
    const collapseCard = document.getElementsByClassName('collabpsibleCard');
    console.log('I clicked the card');
  };

  render() {
    return (
      <CentralNewsFuncComponent
        newsHeader={this.state.newsHeader}
        newsInfo={this.state.newsInfo}
        firstCard={this.state.firstCard}
        getNews={this.getNews}
        onCardClick={this.onCardClick}
      />
    )
  }
}

export default CNBC;

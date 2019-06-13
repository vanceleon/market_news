import React, { Component } from 'react';
import axios from 'axios';
import CentralNewsFuncComponent from './NewsFunc'; 

class WSJ extends Component {
  constructor() {
    super();
    this.state = {
      newsHeader: 'WSJ',
      wsjNews: [],
      firstCard: [],
      URL:
        'https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&apiKey=',
      wsj_key: process.env.REACT_APP_NEWS_API
    };
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = () => {
    const URL = `${this.state.URL}${this.state.wsj_key}`;
    axios
      .get(URL)
      .then(res => {
        const wsj_news = res.data;
        this.setState({ wsjNews: wsj_news, firstCard: wsj_news.articles[0] });
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
        newsInfo={this.state.wsjNews}
        firstCard={this.state.firstCard}
        getNews={this.getNews}
        onCardClick={this.onCardClick}
      />
    )
  }
}

export default WSJ;

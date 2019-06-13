import React, { Component } from 'react';
import axios from 'axios';
import CentralNewsFuncComponent from './NewsFunc'; 

class WSJ extends Component {
  constructor() {
    super();
    this.state = {
      newsHeader: 'WSJ',
      newsInfo: [],
      firstCard: [],
      URL:
        'https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&apiKey=',
      news_key: process.env.REACT_APP_NEWS_API,
      isToggleOn: false,
    };
    this.seeMoreClick = this.seeMoreClick.bind(this);
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

  seeMoreClick() {
    // event.preventDefault();
    // const collapseCard = document.getElementsByClassName('collabpsibleCard');
    this.setState({isToggleOn: !this.state.isToggleOn});
    console.log("clicked event", this.state.isToggleOn)
    console.log('I clicked the card');
  };

  render() {
    return (
      <CentralNewsFuncComponent
        newsHeader={this.state.newsHeader}
        newsInfo={this.state.newsInfo}
        firstCard={this.state.firstCard}
        getNews={this.getNews}
        seeMoreClick={this.seeMoreClick}
      />
    )
  }
}

export default WSJ;

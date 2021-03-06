import React, { Component } from 'react';
import axios from 'axios';
import CentralNewsFuncComponent from './NewsFunc'; 

class TechCrunch extends Component {
  constructor() {
    super();
    this.state = {
      newsHeader: 'Tech Crunch',
      newsInfo: [],
      firstCard: [],
      URL:
        'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=',
      news_key: process.env.REACT_APP_NEWS_API,
      isToggleOn: false,
      navLinkId: 'TechCrunch',
      cardClass: 'techCrunch',
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
        this.setState({
          newsInfo: newsDataRetrieve,
          firstCard: newsDataRetrieve.articles[0]
        });
      })
      .catch(err => console.log('Error', err));
  };

  handleClick = () => {
    // event.preventDefault();
    this.setState({ isToggleOn: !this.state.isToggleOn });
  };

  render() {
    return (
      <CentralNewsFuncComponent
        newsHeader={this.state.newsHeader}
        newsInfo={this.state.newsInfo}
        firstCard={this.state.firstCard}
        getNews={this.getNews}
        seeMoreClick={this.seeMoreClick}
        isToggleOn={this.state.isToggleOn}
        handleClick={this.handleClick}
        navLinkId={this.state.navLinkId}
        cardClass={this.state.cardClass}
      />
    );
  }
}

export default TechCrunch;

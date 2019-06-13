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
        'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=',
      news_key: process.env.REACT_APP_NEWS_API,
      isToggleOn: false,
    };
    this.seeMoreClick = this.seeMoreClick.bind(this);
  }

  componentDidMount() {
    this.getNews();
  }


  componentDidUpdate() {
    const collapseCard = document.getElementsByClassName('collapsibleCards');
    if (this.state.isToggleOn) {
      this.seeMoreClick();
    } else {
      for (let i = 0; i < collapseCard.length; i++) {
        // console.log(collapseCard)
        collapseCard[i].style.display = 'none';
      }
    }
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

  seeMoreClick() {
    const collapseCard = document.getElementsByClassName('collapsibleCards');
    console.log('class id', collapseCard);
      for (let i = 0; i < collapseCard.length; i++) {
        collapseCard[i].style.display = 'block';
      }

    
  }

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
      />
    );
  }
}

export default TechCrunch;

import React, { Component } from 'react';
import axios from 'axios';

class CNBC extends Component {
  constructor() {
    super();
    this.state = {
      cnbcNews: [],
      URL: 'https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=',
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
        // console.log(wsj_news);
        this.setState({ cnbcNews: wsj_news });
        {
          console.log(this.state.cnbcNews.articles);
        }
      })
      .catch(err => console.log('Error', err));
  };

  render() {

    if (this.state.cnbcNews.articles) {
      return (
        <div className='newsCards'>
          {console.log(this.state.cnbcNews.articles)}
          {this.state.cnbcNews.articles.map((news, i) => {
            return (
              <React.Fragment key={i}>
                <a href={news.url}>{news.title}</a>
                <div>{news.description}</div>
                <div>{news.author}</div>
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

export default CNBC;

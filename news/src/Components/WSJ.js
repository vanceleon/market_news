import React, { Component } from 'react';
import axios from 'axios';

class WSJ extends Component {
  constructor() {
    super();
    this.state = {
      wsjNews: [],
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
        // console.log(wsj_news);
        this.setState({ wsjNews: wsj_news });
        {
          console.log(this.state.wsjNews.articles);
        }
      })
      .catch(err => console.log('Error', err));
  };

  render() {

    if (this.state.wsjNews.articles) {
      return (
        <div className='wsj-Cards'>
          {console.log(this.state.wsjNews.articles)}
          {this.state.wsjNews.articles.map((news, i) => {
            return (
              <React.Fragment key={i}>
                <div>{news.author}</div>
                <div>{news.title}</div>
                <div>{news.description}</div>
                <div>{news.url}</div>
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

export default WSJ;

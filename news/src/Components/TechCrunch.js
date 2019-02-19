import React, { Component } from 'react';
import axios from 'axios';

class TechCrunch extends Component {
  constructor() {
    super();
    this.state = {
      TCNews: [],
      URL: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=',
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
        this.setState({ TCNews: wsj_news });
        {
          console.log(this.state.TCNews.articles);
        }
      })
      .catch(err => console.log('Error', err));
  };

  render() {

    if (this.state.TCNews.articles) {
      return (
        <div className='newsCards'>
          {console.log(this.state.TCNews.articles)}
          {this.state.TCNews.articles.map((news, i) => {
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

export default TechCrunch;

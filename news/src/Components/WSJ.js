import React, { Component } from 'react';
import axios from 'axios';
// const URL = ``;

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

  componentDidUpdate(prevState) {
    if (
      this.state.wsjNews !== prevState.wsjNews ||
      this.state.wsjNews.articles.length > 0
    ) {
      console.log('update state', this.state.wsjNews);
    }
  }

  getNews = () => {
    const url2 = `${this.state.URL}${this.state.wsj_key}`;
    axios
      .get(url2)
      .then(res => {
        const wsj_news = res.data;
        // console.log(wsj_news);
        this.setState({ wsjNews: wsj_news });
        // {console.log(this.state.wsjNews.articles[0].author)}
      })
      .catch(err => console.log('Error', err));
  };

  render() {
    // const newsArticles = this.state.wsjNews.articles
    // console.log(newsArticles)
    {this.state.wsjNews.articles.map((news, i) => {
      return <li key={i}>{news.author}</li>;
    })}

    return (
      <ul className='wsj-Cards'>
        {/* {console.log(this.state.wsjNews.articles)} */}
        {/* <ul>{newsArticles}</ul> */}
        hello world
        {/* <h1>{this.state.wsjNews.articles[0].author}</h1>  */}
      </ul>
    );
  }
}

export default WSJ;

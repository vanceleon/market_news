import React, { Component } from 'react';
import {Container, Header} from 'semantic-ui-react';
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
        <Container text>
        <Header as='h1'>
          TechCrunch
        </Header>
        <div className='newsCards'>
          {console.log(this.state.TCNews.articles)}
          {this.state.TCNews.articles.map((news, i) => {
            return (
              <div key={i} className="article" style={{margin: '20px 0'}}>
                <a href={news.url}><img src={news.urlToImage } style={{width: '100%', borderRadius: '15px'}}/></a>
                <a href={news.url}>{news.title}</a>
                <div style={{margin: '10px 0 0 0'}}>{news.description}</div>
                <div style={{fontStyle: 'italic'}}>Author: {news.author}</div>
              </div>
            );
          })}
        </div>
        </Container>
      );
    } else {
      return (
        <div class="ui segment">
    <div class="ui active inverted dimmer">
      <div class="ui text loader">Loading</div>
    </div>
    <p></p>
  </div>
          )
      
    }
  }
}

export default TechCrunch;

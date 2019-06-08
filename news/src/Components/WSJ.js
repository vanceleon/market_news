import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import axios from 'axios';

class WSJ extends Component {
  constructor() {
    super();
    this.state = {
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
        console.log('array of wsj', wsj_news.articles[0]);
        this.setState({ wsjNews: wsj_news, firstCard: wsj_news.articles[0] });
      })
      .catch(err => console.log('Error', err));
  };


onCardClick = event => {
  event.preventDefault();
  const collapseCard = document.getElementsByClassName("collabpsibleCard")
  console.log("I clicked the card");
} 



  render() {
    if (this.state.wsjNews.articles) {
      return (
        <Container text>
          <Header as='h1' id='WSJ'>
            WSJ
          </Header>
          <div className='firstContainerCard' onCLick={(event) => this.onCardClick(event)}>
            <div className='article' style={{ margin: '20px 0' }}>
              <a href={this.state.firstCard.url}>
                <img
                  src={this.state.firstCard.urlToImage}
                  alt='news-highlights'
                  style={{ width: '100%', borderRadius: '15px' }}
                />
              </a>
              <a href={this.state.firstCard.url}>
                {this.state.firstCard.title}
              </a>
              <div style={{ margin: '10px 0 0 0' }}>
                {this.state.firstCard.description}
              </div>
              <div style={{ fontStyle: 'italic' }}>
                Author: {this.state.firstCard.author}
              </div>
            </div>
          </div>
          <div className='newsCards'>
            {console.log(this.state.wsjNews.articles)}
            {this.state.wsjNews.articles.map((news, i) => {
              return (
                <div key={i} className='article' style={{ margin: '20px 0' }}>
                  <a href={news.url}>
                    <img
                      src={news.urlToImage}
                      alt='news-highlights'
                      style={{ width: '100%', borderRadius: '15px' }}
                    />
                  </a>
                  <a href={news.url}>{news.title}</a>
                  <div style={{ margin: '10px 0 0 0' }}>{news.description}</div>
                  <div style={{ fontStyle: 'italic' }}>
                    Author: {news.author}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      );
    } else {
      return (
        <div class='ui segment'>
          <div class='ui active inverted dimmer'>
            <div class='ui text loader'>Loading</div>
          </div>
          <p />
        </div>
      );
    }
  }
}

export default WSJ;

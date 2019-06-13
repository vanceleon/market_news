import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const CentralNewsFuncComponent = props => {
  if (props.newsInfo.articles) {
    return (
      <Container text>
        <Header as='h1' id='WSJ'>
          {props.newsHeader}
        </Header>

        <div className='article' style={{ margin: '20px 0' }}>
          <a href={props.firstCard.url}>
            <img
              src={props.firstCard.urlToImage}
              alt='news-highlights'
              style={{ width: '100%', borderRadius: '15px' }}
            />
          </a>
          <a href={props.firstCard.url}>{props.firstCard.title}</a>
          <div style={{ margin: '10px 0 0 0' }}>
            {props.firstCard.description}
          </div>
          <div style={{ fontStyle: 'italic' }}>
            Author: {props.firstCard.author}
          </div>
        </div>
        
        <div className='collapsibleCards'>
          {props.newsInfo.articles.slice(1).map((news, i) => {

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
                <div style={{ fontStyle: 'italic' }}>Author: {news.author}</div>
              </div>
            );
            
          })}
        </div>
        <div
          className='firstContainerCard'
          onClick={props.handleClick}
        >
        See More Articles
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
};

export default CentralNewsFuncComponent;

import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const CentralNewsFuncComponent = props => {
  let classUnique = 'collapsibleCards';
  if (props.newsInfo.articles) {
    // console.log("props cardClass", props.cardClass)
    if(props.isToggleOn) {
      classUnique += `-${props.cardClass}`;
      // console.log("props CardClass 2", className);
    }
    return (
      <Container text>
        <Header as='h1' id={props.navLinkId}>
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
        
        <div className={classUnique}>
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
          className='see-more-button'
          onClick={props.handleClick}
        >
        {props.isToggleOn ? 'See Fewer Articles' : 'See More Articles'}
        </div>
      </Container>
    );
  } else {
    return (
      <div className='ui segment'>
        <div className='ui active inverted dimmer'>
          <div className='ui text loader'>Loading</div>
        </div>
        <p />
      </div>
    );
  }
};

export default CentralNewsFuncComponent;

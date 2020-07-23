import axios from 'axios';

export default function getNews(url,news_key){
  const URL = `${url}${news_key}`;
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
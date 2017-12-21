import React from 'react';

class SearchResults extends React.Component{
  constructor(props){
    super(props);
  }
  render(){

    let articles = this.props.articles || [];

    return(
      <ul>

        {articles.map( (item, i) =>
          <li key={i}>
            <a href= {item.data.url}>{item.data.title}</a>
          </li>
        )}

      </ul>

    );
  }

}

export default SearchResults;

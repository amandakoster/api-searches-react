import React from 'react';
import superagent from 'superagent';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';

const API_URL = 'https://www.reddit.com/r';
let renderIf = (test, component) => test ? component : undefined;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      results:null,
      searchErrorMessage: null,
    };

    this.redditBoardFetch = this.redditBoardFetch.bind(this);
  }

  componentDidUpdate(){
    console.log('__STATE___', this.state);
  }

  redditBoardFetch(board){
    superagent.get(`${API_URL}/${board}.json`)
      .then(res=> {
        console.log('response', res);
        this.setState({
          results:res.body.data.children,
          searchErrorMessage: null,
        });
      })
      .catch(err => {
        console.error(err);
        null;
        this.setState({
          searchErrorMessage: `Unable to find reddit board ${board}`,
        });
      });
  }

  render(){
    return(
      <main>
        <h1>Collection of API Searches</h1>
        <SearchForm handleSearch={this.redditBoardFetch} />

        {renderIf(this.state.resutls,
          <SearchResults articles={this.state.results} />)}

        {renderIf(this.state.searchErrorMessage,
          <p>{this.searchErrorMessage}</p>)}

      </main>
    );
  }
}

export default App;

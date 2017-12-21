import React from 'react';
import superagent from 'superagent';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';
import Header from './header';
import Navbar from './navbar';
import Footer from './footer';

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
        <Header />
        <Navbar />
        <SearchForm handleSearch={this.redditBoardFetch} />

        {renderIf(this.state.results,
          <SearchResults articles={this.state.results} />)}

        {renderIf(this.state.searchErrorMessage,
          <p>{this.searchErrorMessage}</p>)}

        <Footer />

      </main>
    );
  }
}

export default App;

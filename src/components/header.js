import React, {Component} from 'react';

class Footer extends Component {

  render() {
    return(

      <header>
        <h1 className="App-title">Collection of API Searches</h1>
        {this.props.children}
      </header>
    );
  }
}

export default Footer;

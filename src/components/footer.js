import React, {Component} from 'react';

class Footer extends Component {

  render() {
    return(

      <footer>
        <div className="author footer">
          <a href="https://github.com/amandakoster">By Amanda Koster</a>
        </div>
        {this.props.children}
      </footer>
    );
  }
}

export default Footer;

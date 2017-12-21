import React from 'react';



class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchText: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      searchText: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleSearch(this.state.searchText);
  }

  render() {
    return(

      <div>
        <form className="searchForm" onSubmit={this.handleSubmit}>

          <span>Reddit Search: </span>

          <input className="formIput"
            type="text"
            name="topic"
            onChange={this.handleChange}
            value={this.state.searchText}
          />
          <button type="submit">Search</button>

        </form>
      </div>
    );
  }
}

export default SearchForm;

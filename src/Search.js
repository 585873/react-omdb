import React, {Component} from 'react'

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: ""
    }
  }

  handleSearchInput (evt){
    this.setState({
      query: evt.target.value
    })
  }

  submitQuery(evt){
    evt.preventDefault();
    console.log(this.state.query)
  }
  render(){
    return(
      <div className="searchBox">
       <form onSubmit={(evt) => this.props.submitQuery(evt)}>
        <input
         onChange={(evt) => this.props.handleSearchInput(evt)}
         value={this.props.query}
         type="text" placeholder="Seach a title"/>
        <button type="Submit">Search</button>
     </form>
    </div>
    )
  }
}

export default Search

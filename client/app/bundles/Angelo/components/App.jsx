import React, { Component } from "react";
import Results from "./Results";
import { fetchAllPlaylists } from "../utils/spotify_helpers"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
  }
  componentDidMount() {
    let component = this;
    fetchAllPlaylists().then(results => {
      component.setState({
        results
      })
    })
  }
  render() {
    return (
      <div>
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;

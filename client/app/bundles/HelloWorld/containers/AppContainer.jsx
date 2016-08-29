import React, { Component } from 'react';
import App from '../components/App';

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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Results results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;

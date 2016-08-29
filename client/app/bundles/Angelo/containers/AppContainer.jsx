import React, { Component } from 'react';
import App from '../components/App';

class AppContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { name: this.props.name };
  }

  updateName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <App name={this.state.name} updateName={e => this.updateName(e)} />
      </div>
    );
  }
}

export default AppContainer

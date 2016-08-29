import React, { Component } from 'react';
import App from '../components/App';

class AppContainer extends Component {
  constructor(props, context) {
    super(props, context);
    console.log(props);
    this.state = { name: this.props.name };
  }

  render() {
    return (
      <div>
        <App user={this.props.user} />
      </div>
    );
  }
}

export default AppContainer

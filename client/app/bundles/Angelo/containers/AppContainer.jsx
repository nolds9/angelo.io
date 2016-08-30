import React, { Component } from 'react'
import App from '../components/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

class AppContainer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  render() {
    return (
      <MuiThemeProvider>
        <App data={this.props.data} />
      </MuiThemeProvider>
    );
  }
}

export default AppContainer

import React from 'react';
import ReactOnRails from 'react-on-rails';

import Container from '../containers/AppContainer';

const App = (props) => (
  <Container {...props} />
);

ReactOnRails.register({ App });

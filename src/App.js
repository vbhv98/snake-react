import React, { Component } from 'react';
import Grid from './Grid'

import './tracker'

class App extends Component {
  render() {
    return (
        <Grid rows={20} cols={20} />
    );
  }
}

export default App
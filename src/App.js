import React, { Component } from 'react';
import './App.css';
import MainInputView from './View/MainInputView'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MainInputView />
      </MuiThemeProvider>
    );
  }
}

export default App;

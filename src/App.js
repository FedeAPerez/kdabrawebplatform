import React, { Component } from 'react';
import {deepOrange900, deepOrange200} from 'material-ui/styles/colors';
import './App.css';
import MainInputView from './View/MainInputView'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange200,
    textColor: deepOrange900,
  }
});
class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <MainInputView />
      </MuiThemeProvider>
    );
  }
}

export default App;

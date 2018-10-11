import * as React from 'react';
// import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Root from "./components/Root";

const theme = createMuiTheme({ palette: { primary: green } });

const App = (): Element => (
    <MuiThemeProvider theme={theme}>
        <Root/>
    </MuiThemeProvider>
);

export default App;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// import logo from './logo.svg';
require("./App.css");
var styles_1 = require("@material-ui/core/styles");
var green_1 = require("@material-ui/core/colors/green");
var Root_1 = require("./components/Root");
var theme = styles_1.createMuiTheme({ palette: { primary: green_1.default } });
var App = function () { return (React.createElement(styles_1.MuiThemeProvider, { theme: theme },
    React.createElement(Root_1.default, null))); };
exports.default = App;
//# sourceMappingURL=App.js.map
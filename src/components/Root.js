"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FoodTruckWidget_1 = require("./home/FoodTruckWidget");
var Root = function (props) {
    if (props === void 0) { props = null; }
    return (React.createElement("html", null,
        React.createElement("head", null,
            React.createElement("meta", { name: "viewport", content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" }),
            React.createElement("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" })),
        React.createElement("div", { className: "App" },
            React.createElement(FoodTruckWidget_1.default, null))));
};
exports.default = Root;
//# sourceMappingURL=Root.js.map
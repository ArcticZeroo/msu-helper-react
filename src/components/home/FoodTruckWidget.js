"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FoodTruckStopsProvider_1 = require("../../api/food-truck/FoodTruckStopsProvider");
var PromiseBuilder_1 = require("../helper/PromiseBuilder");
var ConnectionState_1 = require("../../api/async/ConnectionState");
var css = require("../../styles/widget.css");
var FoodTruckWidget = /** @class */ (function (_super) {
    __extends(FoodTruckWidget, _super);
    function FoodTruckWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { promise: FoodTruckStopsProvider_1.default.retrieve() };
        return _this;
    }
    FoodTruckWidget.renderSnapshot = function (snapshot) {
        if (snapshot.connectionState === ConnectionState_1.default.DONE) {
            if (snapshot.hasError) {
                return (React.createElement("div", null, "Could not load stops..."));
            }
            return (React.createElement("div", { className: css.testClass },
                "Found ",
                snapshot.data.length,
                " stop(s)"));
        }
        return (React.createElement("div", null, "Loading stops..."));
    };
    FoodTruckWidget.prototype.render = function () {
        return (React.createElement(PromiseBuilder_1.default, { promise: this.state.promise, builder: FoodTruckWidget.renderSnapshot }));
    };
    return FoodTruckWidget;
}(React.Component));
exports.default = FoodTruckWidget;
//# sourceMappingURL=FoodTruckWidget.js.map
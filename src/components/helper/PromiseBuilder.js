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
var ConnectionState_1 = require("../../api/async/ConnectionState");
var AsyncSnapshot_1 = require("../../api/async/AsyncSnapshot");
var PromiseBuilder = /** @class */ (function (_super) {
    __extends(PromiseBuilder, _super);
    function PromiseBuilder(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { snapshot: new AsyncSnapshot_1.default({ connectionState: !!_this.props.promise ? ConnectionState_1.default.WAITING : ConnectionState_1.default.NONE }) };
        return _this;
    }
    PromiseBuilder.prototype.updateSnapshot = function (connectionState, data, error) {
        if (data === void 0) { data = null; }
        if (error === void 0) { error = null; }
        this.setState({
            snapshot: new AsyncSnapshot_1.default({
                connectionState: connectionState,
                data: data,
                error: error
            })
        });
    };
    PromiseBuilder.prototype.componentDidMount = function () {
        var _this = this;
        if (!this.props.promise) {
            return;
        }
        this.updateSnapshot(ConnectionState_1.default.ACTIVE);
        this.props.promise
            .then(function (data) {
            _this.updateSnapshot(ConnectionState_1.default.DONE, data);
        })
            .catch(function (e) {
            _this.updateSnapshot(ConnectionState_1.default.DONE, null, e);
        });
    };
    PromiseBuilder.prototype.render = function () {
        return this.props.builder(this.state.snapshot);
    };
    return PromiseBuilder;
}(React.Component));
exports.default = PromiseBuilder;
//# sourceMappingURL=PromiseBuilder.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionState_1 = require("./ConnectionState");
var AsyncSnapshot = /** @class */ (function () {
    function AsyncSnapshot(_a) {
        var _b = _a.data, data = _b === void 0 ? null : _b, _c = _a.error, error = _c === void 0 ? null : _c, _d = _a.connectionState, connectionState = _d === void 0 ? ConnectionState_1.default.NONE : _d;
        this.data = data;
        this.error = error;
        this.connectionState = connectionState;
    }
    Object.defineProperty(AsyncSnapshot.prototype, "hasData", {
        get: function () {
            return !!this.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncSnapshot.prototype, "hasError", {
        get: function () {
            return !!this.error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncSnapshot.prototype, "requireData", {
        get: function () {
            if (this.hasData) {
                return this.data;
            }
            throw new Error('Data does not exist in this snapshot');
        },
        enumerable: true,
        configurable: true
    });
    return AsyncSnapshot;
}());
exports.default = AsyncSnapshot;
//# sourceMappingURL=AsyncSnapshot.js.map
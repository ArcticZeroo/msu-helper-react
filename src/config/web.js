"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataPathParts;
(function (DataPathParts) {
    DataPathParts["BASE_URL"] = "http://localhost:4000";
    DataPathParts["API_BASE"] = "api";
    DataPathParts["MSU_BASE"] = "msu";
    DataPathParts["FOOD_TRUCK_BASE"] = "foodtruck";
    DataPathParts["MOVIE_NIGHT_BASE"] = "movies";
    DataPathParts["DINING_HALL_BASE"] = "dining";
    DataPathParts["LIST"] = "list";
})(DataPathParts || (DataPathParts = {}));
exports.DataPathParts = DataPathParts;
function mapPaths(obj) {
    var newObj = {};
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        newObj[key] = [DataPathParts.BASE_URL, DataPathParts.API_BASE, DataPathParts.MSU_BASE].concat(obj[key]).join('/');
    }
    return newObj;
}
var DataPaths = mapPaths({
    FOOD_TRUCK_STOPS: [DataPathParts.FOOD_TRUCK_BASE, DataPathParts.LIST]
});
exports.DataPaths = DataPaths;
//# sourceMappingURL=web.js.map
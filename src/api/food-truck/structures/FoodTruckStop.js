"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FoodTruckState_1 = require("../enum/FoodTruckState");
var FoodTruckStop = /** @class */ (function () {
    function FoodTruckStop(json) {
        this.isCancelled = json.isCancelled;
        this.start = new Date(json.start);
        this.end = new Date(json.end);
        this.locationCoordinates = json.location;
        this.location = json.place;
        this._rawLocation = json.rawLocation;
    }
    FoodTruckStop.prototype.toJSON = function () {
        return {
            isCancelled: this.isCancelled,
            start: this.start.getTime(),
            end: this.end.getTime(),
            location: this.locationCoordinates,
            rawLocation: this._rawLocation
        };
    };
    Object.defineProperty(FoodTruckStop.prototype, "isNow", {
        get: function () {
            var now = Date.now();
            return this.start.getTime() <= now && now < this.end.getTime();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FoodTruckStop.prototype, "isToday", {
        get: function () {
            var today = new Date();
            return this.start.getDate() === today.getDate()
                && this.start.getMonth() === today.getMonth()
                && this.start.getFullYear() === today.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FoodTruckStop.prototype, "currentState", {
        get: function () {
            if (this.isCancelled) {
                return FoodTruckState_1.default.CANCELLED;
            }
            else {
                if (this.isToday) {
                    var now = Date.now();
                    if (this.end.getTime() <= now) {
                        return FoodTruckState_1.default.PASSED;
                    }
                    else {
                        // Check if start <= now < end
                        if (this.isNow) {
                            return FoodTruckState_1.default.ACTIVE;
                            // Otherwise, since we know now is not after the end, it must be coming later than now
                        }
                        else {
                            return FoodTruckState_1.default.ARRIVING_SOON;
                        }
                    }
                }
            }
            // Stop has not passed, been cancelled, and is not today
            return FoodTruckState_1.default.UPCOMING;
        },
        enumerable: true,
        configurable: true
    });
    return FoodTruckStop;
}());
exports.default = FoodTruckStop;
//# sourceMappingURL=StopDisplay.js.map
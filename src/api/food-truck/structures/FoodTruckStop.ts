import FoodTruckState from "../enum/FoodTruckState";

interface IPoint {
    x: number,
    y: number
}

export default class FoodTruckStop {
    public readonly isCancelled: boolean;
    public readonly start: Date;
    public readonly end: Date;
    public readonly locationCoordinates: IPoint;
    public readonly location: string;

    private readonly _rawLocation: string;

    constructor(json: any) {
        this.isCancelled = json.isCancelled as boolean;
        this.start = new Date(json.start as number);
        this.end = new Date(json.end as number);
        this.locationCoordinates = json.location as IPoint;
        this.location = json.place as string;
        this._rawLocation = json.rawLocation as string;
    }

    toJSON(): object {
        return {
            isCancelled: this.isCancelled,
            start: this.start.getTime(),
            end: this.end.getTime(),
            location: this.locationCoordinates,
            rawLocation: this._rawLocation
        }
    }

    get isNow(): boolean {
        const now: number = Date.now();

        return this.start.getTime() <= now && now < this.end.getTime();
    }

    get isToday(): boolean {
        const today: Date = new Date();

        return this.start.getDate() === today.getDate()
            && this.start.getMonth() === today.getMonth()
            && this.start.getFullYear() === today.getFullYear();
    }

    get currentState(): FoodTruckState {
        if (this.isCancelled) {
            return FoodTruckState.CANCELLED;
        } else {
            if (this.isToday) {
                const now: number = Date.now();

                if (this.end.getTime() <= now) {
                    return FoodTruckState.PASSED;
                } else {
                    // Check if start <= now < end
                    if (this.isNow) {
                        return FoodTruckState.ACTIVE;
                        // Otherwise, since we know now is not after the end, it must be coming later than now
                    } else {
                        return FoodTruckState.ARRIVING_SOON;
                    }
                }
            }
        }
        // Stop has not passed, been cancelled, and is not today
        return FoodTruckState.UPCOMING;
    }
}
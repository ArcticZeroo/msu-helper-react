import FoodTruckStop from "./structures/FoodTruckStop";
import IDataProvider from "../DataProvider";
import ExpiringObject from "../ExpiringObject";
import restRequest from "../web/request";
import { DataPaths } from "../../config/web";

class _StopsProvider implements IDataProvider<FoodTruckStop[]> {
    private readonly _foodTruckCache: ExpiringObject<FoodTruckStop[]>;

    constructor() {
        this._foodTruckCache = new ExpiringObject<FoodTruckStop[]>({
            fetch: async (): Promise<FoodTruckStop[]> => {
                try {
                    const result: any[] = await restRequest<any[]>(DataPaths.FOOD_TRUCK_STOPS);

                    const stops = [];

                    for (const jsonEntry of result) {
                        stops.push(new FoodTruckStop(jsonEntry));
                    }

                    return stops;
                } catch (e) {
                    throw e;
                }
            }
        });
    }


    retrieve(): Promise<FoodTruckStop[]> {
        return this._foodTruckCache.retrieveValue();
    }

}

const FoodTruckStopsProvider = new _StopsProvider();

export default FoodTruckStopsProvider;
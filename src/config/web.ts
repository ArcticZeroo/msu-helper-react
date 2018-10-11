enum DataPathParts {
    BASE_URL = 'http://localhost:4000',
    API_BASE = 'api',
    MSU_BASE = 'msu',
    FOOD_TRUCK_BASE = 'foodtruck',
    MOVIE_NIGHT_BASE = 'movies',
    DINING_HALL_BASE = 'dining',
    LIST = 'list'
}

interface IDataPaths {
    FOOD_TRUCK_STOPS: string
}

function mapPaths(obj: any): object {
    const newObj = {};

    for (const key of Object.keys(obj)) {
        newObj[key] = [DataPathParts.BASE_URL, DataPathParts.API_BASE, DataPathParts.MSU_BASE, ...obj[key]].join('/');
    }

    return newObj;
}

const DataPaths: IDataPaths = mapPaths({
    FOOD_TRUCK_STOPS: [DataPathParts.FOOD_TRUCK_BASE, DataPathParts.LIST]
}) as IDataPaths;

export { DataPathParts, DataPaths };
import config from '../../config/google-maps';

export default class GoogleMaps {
    static convertToQueryString(params: any): string {
        return '?' + Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURI(params[k])}`).join('&');
    }

    static getSearchQueryUrl(query: string): string {
        return [config.BASE_URL, config.SEARCH_PATH_NAME, GoogleMaps.convertToQueryString({
            [config.API_PARAM_NAME]: config.API_VERSION,
            [config.QUERY_PARAM_NAME]: query
        })].join('/');
    }
}
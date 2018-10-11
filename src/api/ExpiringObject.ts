export default class ExpiringObject<T> {
    private _value: T;
    private _lastUpdated: number;
    private readonly _fetch: () => Promise<T>;
    private readonly _expireTimeMillis: number;

    constructor(
        { value = null, expireTime = 15*60*1000, lastUpdated = Date.now(), fetch = async (): Promise<T> => null }
        : { value?: T, expireTime?: number, lastUpdated?: number, fetch: () => Promise<T> }) {
        this._value = value;
        this._lastUpdated = lastUpdated;
        this._expireTimeMillis = expireTime;
        this._fetch = fetch;
    }

    public isValid(): boolean {
        return !!this._value && ((Date.now() - this._lastUpdated) < this._expireTimeMillis);
    }

    public async retrieveValue(): Promise<T> {
        if (this.isValid()) {
            return this._value;
        }

        let newValue: T;
        try {
            newValue = await this._fetch();
        } catch (e) {
            throw e;
        }

        this._lastUpdated = Date.now();
        this._value = newValue;

        return newValue;
    }
}
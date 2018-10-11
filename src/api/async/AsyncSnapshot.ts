import ConnectionState from "./ConnectionState";

export default class AsyncSnapshot<T> {
    public readonly data: T;
    public readonly error: any;
    public readonly connectionState: ConnectionState;

    constructor(
        { data = null, error = null, connectionState = ConnectionState.NONE }
        : { data?: T, error?: any, connectionState?: ConnectionState }) {
        this.data = data;
        this.error = error;
        this.connectionState = connectionState;
    }

    get hasData(): boolean {
        return !!this.data;
    }

    get hasError(): boolean {
        return !!this.error;
    }

    get requireData(): T {
        if (this.hasData) {
            return this.data;
        }

        throw new Error('Data does not exist in this snapshot');
    }
}
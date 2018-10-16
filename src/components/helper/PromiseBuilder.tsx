import * as React from 'react';
import ConnectionState from "../../api/async/ConnectionState";
import AsyncSnapshot from "../../api/async/AsyncSnapshot";

interface IPromiseBuilderProps<T> {
    promise: Promise<T> | null;
    builder: (snapshot: AsyncSnapshot<T>) => Element;
}

interface IPromiseBuilderState<T> {
    snapshot: AsyncSnapshot<T>;
}

export default class PromiseBuilder<T> extends React.Component<IPromiseBuilderProps<T>, IPromiseBuilderState<T>> {
    constructor(props) {
        super(props);

        this.state = { snapshot: new AsyncSnapshot({ connectionState: !!this.props.promise ? ConnectionState.WAITING : ConnectionState.NONE }) };
    }

    updateSnapshot(connectionState: ConnectionState, data: any = null, error: any = null) {
        this.setState({
            snapshot: new AsyncSnapshot<T>({
                connectionState: connectionState,
                data: data,
                error: error
            })
        });
    }

    async _waitForPromise() {
        try {
            const data: T = await this.props.promise;

            this.updateSnapshot(ConnectionState.DONE, data);
        } catch (e) {
            this.updateSnapshot(ConnectionState.DONE, null, e);
        }
    }

    _handleBuildingLifecycle() {
        if (!this.props.promise) {
            return;
        }

        this.updateSnapshot(ConnectionState.ACTIVE);

        // @ts-ignore
        this._waitForPromise().catch(console.error);
    }

    componentDidUpdate(prevProps: IPromiseBuilderProps<T>) {
        if (prevProps.promise != this.props.promise) {
            this._handleBuildingLifecycle();
        }
    }

    componentDidMount() {
        this._handleBuildingLifecycle();
    }

    render() {
        return this.props.builder(this.state.snapshot);
    }
}
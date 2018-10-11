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

    componentDidMount() {
        if (!this.props.promise) {
            return;
        }

        this.updateSnapshot(ConnectionState.ACTIVE);

        this.props.promise
            .then(data => {
                this.updateSnapshot(ConnectionState.DONE, data);
            })
            .catch(e => {
                this.updateSnapshot(ConnectionState.DONE, null, e);
            });
    }

    render() {
        return this.props.builder(this.state.snapshot);
    }
}
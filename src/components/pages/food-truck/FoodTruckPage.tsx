import * as React from 'react';
import FoodTruckStop from '../../../api/food-truck/structures/FoodTruckStop';
import FoodTruckStopsProvider from '../../../api/food-truck/FoodTruckStopsProvider';
import AsyncSnapshot from '../../../api/async/AsyncSnapshot';
import PromiseBuilder from '../../helper/PromiseBuilder';
import ConnectionState from '../../../api/async/ConnectionState';
import ErrorCard from '../../helper/ErrorCard';
import StopDisplay from './StopDisplay';

interface IFoodTruckPageState {
    promise?: Promise<FoodTruckStop[]>;
}

export default class FoodTruckPage extends React.Component<any, IFoodTruckPageState> {
    constructor(props) {
        super(props);

        this.state = { promise: null };
    }

    static renderSnapshot(snapshot: AsyncSnapshot<FoodTruckStop[]>): Element {
        if (snapshot.connectionState === ConnectionState.DONE) {
            if (snapshot.hasError) {
                return (<ErrorCard text={'Could not load stops...'} />);
            }

            return snapshot.data.map(stop => (<StopDisplay stop={stop}/>));
        }

        return (<div>Loading...</div>);
    }

    componentDidMount() {
        this.setState({ promise: FoodTruckStopsProvider.retrieve() });
    }

    render(): Element {
        return (<PromiseBuilder promise={this.state.promise} builder={FoodTruckPage.renderSnapshot} />);
    }
}
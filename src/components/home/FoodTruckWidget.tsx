import * as React from 'react';
import FoodTruckStop from "../../api/food-truck/structures/FoodTruckStop";
import FoodTruckStopsProvider from "../../api/food-truck/FoodTruckStopsProvider";
import AsyncSnapshot from "../../api/async/AsyncSnapshot";
import PromiseBuilder from "../helper/PromiseBuilder";
import ConnectionState from "../../api/async/ConnectionState";
import * as css from '../../styles/widget.css';

interface IFoodTruckWidgetState {
    promise?: Promise<FoodTruckStop[]>;
}

export default class FoodTruckWidget extends React.Component<any, IFoodTruckWidgetState> {
    constructor(props) {
        super(props);

        this.state = { promise: FoodTruckStopsProvider.retrieve() };
    }

    static renderSnapshot(snapshot: AsyncSnapshot<FoodTruckStop[]>): Element {
        if (snapshot.connectionState === ConnectionState.DONE) {
            if (snapshot.hasError) {
                return (<div>Could not load stops...</div>);
            }

            return (<div className={css.testClass}>Found {snapshot.data.length} stop(s)</div>);
        }

        return (<div>Loading stops...</div>);
    }

    render(): Element {
        return (<PromiseBuilder promise={this.state.promise} builder={FoodTruckWidget.renderSnapshot} />);
    }
}
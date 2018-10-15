import * as React from 'react';
import FoodTruckStop from "../../../api/food-truck/structures/FoodTruckStop";
import FoodTruckStopsProvider from "../../../api/food-truck/FoodTruckStopsProvider";
import AsyncSnapshot from "../../../api/async/AsyncSnapshot";
import PromiseBuilder from "../../helper/PromiseBuilder";
import ConnectionState from "../../../api/async/ConnectionState";
import Card from '@material-ui/core/Card/Card';
import Icon from '@material-ui/core/Icon/Icon';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItem from '@material-ui/core/ListItem/ListItem';
import MiniWidget from './MiniWidget';

const styles = {
    cardContainer: {

    }
};

interface IFoodTruckWidgetState {
    promise?: Promise<FoodTruckStop[]>;
}

export default class FoodTruckWidget extends React.Component<any, IFoodTruckWidgetState> {
    constructor(props) {
        super(props);

        this.state = { promise: FoodTruckStopsProvider.retrieve() };
    }

    static renderCard(subtitle: string): Element {
        return (
            <MiniWidget iconName="local_shipping" title="Food Truck Stops" subtitle={subtitle} />
        );
    }

    static renderSnapshot(snapshot: AsyncSnapshot<FoodTruckStop[]>): Element {
        if (snapshot.connectionState === ConnectionState.DONE) {
            if (snapshot.hasError) {
                return FoodTruckWidget.renderCard('Could not load stops...');
            }

            return (FoodTruckWidget.renderCard(`Found ${snapshot.data.length} stop(s)`));
        }

        return FoodTruckWidget.renderCard('Loading stops...');
    }

    render(): Element {
        return (<PromiseBuilder promise={this.state.promise} builder={FoodTruckWidget.renderSnapshot} />);
    }
}
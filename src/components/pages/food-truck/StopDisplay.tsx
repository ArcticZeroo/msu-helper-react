import * as React from 'react';

import FoodTruckStop from '../../../api/food-truck/structures/FoodTruckStop';
import Paper from '@material-ui/core/Paper/Paper';

interface IStopDisplayProps {
    stop: FoodTruckStop;
}

export default class StopDisplay extends React.Component<IStopDisplayProps, any> {
    render() {
        return (
            <Paper elevation={1}>
                <div>
                    {this.props.stop.location}, {new Date(this.props.stop.start).toLocaleString()}
                </div>
            </Paper>
        );
    }
}
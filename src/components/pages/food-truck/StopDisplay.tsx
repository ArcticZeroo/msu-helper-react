import * as React from 'react';

import FoodTruckStop from '../../../api/food-truck/structures/FoodTruckStop';
import Paper from '@material-ui/core/Paper/Paper';
import GoogleMapsLink from '../../helper/GoogleMapsLink';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Icon from '@material-ui/core/Icon/Icon';

import * as dateFormat from 'dateformat';
import { blue, grey, red } from '@material-ui/core/colors';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

interface IStopDisplayProps {
    stop: FoodTruckStop;
}

interface IStopInfoComponent {
    icon: string;
    text: string;
    backgroundColor?: string;
    flipColor?: boolean;
}

export default class StopDisplay extends React.Component<IStopDisplayProps, any> {
    static formatTime(date): string {
        return dateFormat(date, 'h:MM TT');
    }

    static formatDay(date): string {
        return dateFormat(date, 'dddd, mmmm dS, yyyy');
    }

    createStopInfoComponents() : IStopInfoComponent[] {
        const components: IStopInfoComponent[] = [];
        const { stop } = this.props;

        components.push({
            icon: 'location_on',
            text: stop.location
        });

        components.push({
            icon: 'today',
            text: StopDisplay.formatDay(stop.start)
        });

        components.push({
            icon: 'access_time',
            text: StopDisplay.formatTime(stop.start) + ' - ' + StopDisplay.formatTime(stop.end)
        });

        components.push({
            icon: 'access_time',
            text: StopDisplay.formatTime(stop.start) + ' - ' + StopDisplay.formatTime(stop.end),
            backgroundColor: '#2196F3',
            flipColor: true
        });

        return components;
    }

    renderComponents() {
        return this.createStopInfoComponents().map(component => (
            <ListItem style={{ backgroundColor: component.backgroundColor }}>
                <MuiThemeProvider theme={createMuiTheme({ palette: { primary: grey, secondary: { ...grey, main: grey[50] } } })}>
                    <Icon color={ component.flipColor ? 'secondary' : 'primary' }>{component.icon}</Icon>
                </MuiThemeProvider>
                <div style={{ paddingLeft: 12, color: component.flipColor ? 'white' : '#212121' }}>
                    {component.text}
                </div>
            </ListItem>
        ));
    }

    render() {
        return (
            <GoogleMapsLink place={this.props.stop.location}>
                <Paper elevation={1} style={{ display: 'inline-block', paddingBottom: 8, paddingTop: 8, margin: 16 }} >
                    {this.renderComponents()}
                </Paper>
            </GoogleMapsLink>
        );
    }
}
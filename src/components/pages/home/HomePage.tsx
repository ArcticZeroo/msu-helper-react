import * as React from 'react';
import FoodTruckWidget from './FoodTruckWidget';
import NavigationBarController from '../../navigation/NavigationBarController';
import TapAware from '../../helper/TapAware';

interface IHomePageProps {
    navigationBar: NavigationBarController;
}

export default class HomePage extends React.Component<IHomePageProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TapAware onClick={() => this.props.navigationBar.setPage(1)}>
                <FoodTruckWidget />
            </TapAware>
        );
    }
}
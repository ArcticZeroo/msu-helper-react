import * as React from 'react';

import Icon from '@material-ui/core/Icon/Icon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import NavigationBarController from './NavigationBarController';
import HomePage from '../pages/home/HomePage';
import FoodTruckPage from '../pages/food-truck/FoodTruckPage';

export default class PortalPage extends React.Component<any, any> {
    private readonly _navigationBar: NavigationBarController;

    constructor(props) {
        super(props);

        this._navigationBar = new NavigationBarController(() => this.setState({}));
        this._navigationBar.addPage({
            appBarTitle: 'Home Page',
            bottomBarTitle: 'Home',
            bottomBarIconBuilder: () => (<Icon>home</Icon>),
            pageBuilder: () => (<HomePage navigationBar={this._navigationBar}/>)
        });
        this._navigationBar.addPage({
            appBarTitle: 'Food Truck Stops',
            bottomBarTitle: 'Food Truck',
            bottomBarIconBuilder: () => (<Icon>local_shipping</Icon>),
            pageBuilder: () => (<FoodTruckPage />)
        });
    }

    _renderAppBar() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" align="center">
                        {this._navigationBar.getSelectedPageData().appBarTitle}
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }

    _renderActivePage() {
        return this._navigationBar.renderPage();
    }

    _renderNavigationBar(): Element {
        return this._navigationBar.renderNavigationBar();
    }

    render() {
        return (
            <div className="portal">
                {this._renderAppBar()}
                <div style={{ padding: 16, paddingBottom: 52 + 16 }}>
                    {this._renderActivePage()}
                </div>
                {this._renderNavigationBar()}
            </div>
        );
    }
}
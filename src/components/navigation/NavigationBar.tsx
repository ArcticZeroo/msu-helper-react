import { Component } from 'react';
import * as React from 'react';
import IPageData from './IPageData';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

class NavigationBar extends Component {
    private readonly _pages: IPageData[] = [];

    addPage(pageData: IPageData): void {
        this._pages.push(pageData);
    }

    renderChildren() {
        return this._pages.map(child => (
            <BottomNavigationAction label={child.bottomBarTitle} icon={child.bottomBarIcon} />
        ));
    }

    render() {
        return (
            <BottomNavigation>
                {}
            </BottomNavigation>
        );
    }
}
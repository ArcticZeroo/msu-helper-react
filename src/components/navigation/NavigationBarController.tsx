import * as React from 'react';
import IPageData from './IPageData';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { green } from '@material-ui/core/colors';

const bottomBarTheme = createMuiTheme({
    palette: {
        primary: green,
        secondary: green
    }
});

export default class NavigationBarController {
    private readonly _pages: IPageData[] = [];
    private readonly _onChange: () => any;
    private _selected: number = 0;

    constructor(onChange: () => any) {
        this._onChange = onChange;
    }

    addPage(pageData: IPageData): void {
        this._pages.push(pageData);
    }

    setPage(page: number): void {
        if (this._selected == page) {
            return;
        }

        this._selected = page;
        this._onChange();
    }

    getSelectedPageData(): IPageData {
        return this._pages[this._selected];
    }

    renderPage() : Element {
        // @ts-ignore
        console.log('Rendering page', this.getSelectedPageData().appBarTitle);
        return this._pages[this._selected].pageBuilder();
    }

    _renderNavigationActions() {
        return this._pages.map((pageData, i) => (
            <BottomNavigationAction key={pageData.bottomBarTitle} value={i} label={pageData.bottomBarTitle} icon={pageData.bottomBarIconBuilder()} />
        ));
    }

    renderNavigationBar() {
        return (
           <MuiThemeProvider theme={bottomBarTheme}>
               <BottomNavigation
                   onChange={ (event, value) => this.setPage(value) }
                   value={this._selected}
                   style={{
                       width: '100%',
                       position: 'fixed',
                       bottom: 0,
                   }}>
                   {this._renderNavigationActions()}
               </BottomNavigation>
           </MuiThemeProvider>
        );
    }
}
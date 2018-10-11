import * as React from 'react';
import FoodTruckWidget from "./home/FoodTruckWidget";

const Root = (props = null) => (
    <html>
    <head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </head>
    <div className="App">
        <FoodTruckWidget />
    </div>
    </html>
);

export default Root;
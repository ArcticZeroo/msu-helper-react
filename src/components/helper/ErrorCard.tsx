import * as React from 'react';
import Card from '@material-ui/core/Card/Card';
import { red } from '@material-ui/core/colors';

interface IErrorCardProps {
    text: string;
}

export default class ErrorCard extends React.Component<IErrorCardProps, any> {
    render() {
        return (
          <Card style={{ backgroundColor: red[500], color: 'white', display: 'inline-block', padding: 16 }}>
              {this.props.text}
          </Card>
        );
    }
}
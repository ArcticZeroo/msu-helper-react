import ListItem from '@material-ui/core/ListItem/ListItem';
import Icon from '@material-ui/core/Icon/Icon';
import * as React from 'react';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Paper from '@material-ui/core/Paper/Paper';

interface IMiniWidgetProps {
    title?: string;
    subtitle?: string;
    iconName: string;
}

export default class MiniWidget extends React.Component<IMiniWidgetProps, any> {
    render() {
        return (
            <Paper elevation={2}>
                <ListItem>
                    <Icon color="primary">
                        local_shipping
                    </Icon>
                    <div style={{ paddingLeft: 8 }}>
                        <ListItemText primary={this.props.title || ''} secondary={this.props.subtitle || ''} />
                    </div>
                </ListItem>
            </Paper>
        );
    }
}
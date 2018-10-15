import * as React from 'react';

interface ITapAwareProps {
    onClick: () => any;
}

export default class TapAware extends React.Component<ITapAwareProps, any> {
    render(): Element {
        return (
            <div onClick={this.props.onClick}>
                {this.props.children}
            </div>
        );
    }
}
import * as React from 'react';

import styles from '../../styles/global';

interface ITapAwareProps {
    onClick: () => any;
}

export default class TapAware extends React.Component<ITapAwareProps, any> {
    render(): Element {
        return (
            <button onClick={this.props.onClick} style={styles.buttonWithoutStyle}>
                {this.props.children}
            </button>
        );
    }
}
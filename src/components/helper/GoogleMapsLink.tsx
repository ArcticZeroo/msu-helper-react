import * as React from 'react';
import GoogleMaps from '../../api/modules/google-maps';
import styles from '../../styles/global';

interface IGoogleMapsLinkProps {
    place: string;
}

export default class GoogleMapsLink extends React.Component<IGoogleMapsLinkProps, any> {
    render() {
        return (
            <a href={GoogleMaps.getSearchQueryUrl(this.props.place)} style={styles.linkWithoutTextStyling} target="_blank">
                {this.props.children}
            </a>
        );
    }
}
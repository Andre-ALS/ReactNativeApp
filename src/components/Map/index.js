import React, { Component } from 'react';
import { View } from 'react-native'
import PropTypes from 'prop-types';
import MapView from 'react-native-maps';

import Search from '../Search';
import Directions from '../Directions';
import styles from './styles';

class MapTest extends Component {
	static propTypes = {
    type: PropTypes.string,
	};

	state = {
		region: null,
		destination: null,
	}

	componentDidMount () {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude}}) => {
				this.setState({
					region: {
						latitude,
						longitude,
						latitudeDelta: 0.0143,
						longitudeDelta: 0.0134,
					}
				});
			}, //success
			() => {}, //error
			{
				timeout: 2000,
				enableHighAccuracy: true,
				maximumAge: 1000,
			}
		).catch(e => console.tron.log(e));
	}

	handleLocationSelected = (data, { geometry }) => {
		const { location: { lat: latitude, lng: longitude } } = geometry;

		this.setState({
			destination: {
				latitude,
				longitude,
				title: data.structured_formatting.main_text,
			}
		})
	}
	
	render() {

		const { region, destination } = this.state;
		const { type } = this.props;

		return (
			<View style={styles.container}>
				<MapView 
					style={styles.mapStyle}
					region={region}
					followsUserLocation={true}
					showsUserLocation={true}
					loadingEnabled
					mapType={type}
					ref={el => {this.mapView = el}}
				>
					{
						destination &&
						<Directions
							origin={region}
							destination={destination}
							onReady={result => {
								this.mapView.fitToCoordinates(result.coordinates);
							}}
						/>
					}
				</MapView>
				<Search onLocationSelected={this.handleLocationSelected}/>
			</View>
		)
	}
}

export default MapTest;

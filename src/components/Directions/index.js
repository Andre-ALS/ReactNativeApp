import React, { Component } from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
	<MapViewDirections 
		destination={destination}
		origin={origin}
		onReady={onReady}
		apikey='AIzaSyAgToDeC0XcnA_SqlNgBMt-e1VqyrtVsyQ'
		strokeWidth={3}
		strokeColor='#222'
	/>
)

export default Directions;

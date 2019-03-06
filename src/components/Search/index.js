import React, { Component } from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class Search extends Component {
	static propTypes = {
		onLocationSelected: PropTypes.func,
	};

	state = {
		searchFocused: true,
	}

	render() {
		const { onLocationSelected } = this.props;
		const { searchFocused } = this.state;

		return (
			<GooglePlacesAutocomplete 
				placeholder='Para onde?'
				placeholderTextColor="#333"
				onPress={onLocationSelected}
				query={{
					key: 'AIzaSyAgToDeC0XcnA_SqlNgBMt-e1VqyrtVsyQ',
					language: 'pt',
				}}
				textInputProps={{
					onFocus: () => { this.setState({ searchFocused: true } )},
					onBlur: () => { this.setState({ searchFocused: false} )},
					autoCapitalize: 'none',
					autoCorrect: false,
				}}
				listViewDisplayed={searchFocused}
				fetchDetails
				enablePoweredByContaier={false}
				styles={{
					container: {
						position: 'absolute',
						top: Platform.select({ ios: 60, android: 40 }),
						width: '100%'
					},

					textInputContainer: {
						flex: 1,
						backgroundColor: 'transparent',
						height: 54,
						marginHorizontal: 20,
						borderTopWidth: 0,
						borderBottomWidth: 0
					},

					textInput: {
						height: 54,
						margin: 0,
						marginTop: 0,
						marginLeft: 0,
						marginRight: 0,
						paddingTop: 0,
						paddingLeft: 20,
						paddingRight: 20,
						paddingBottom: 0,
						elevation: 5,
						shadowColor: '#000',
						shadowOpacity: 0.1,
						shadowOffset: { x: 0, y: 0 },
						shadowRadius: 15,
						borderWidth: 1,
						borderColor: '#ddd',
						fontSize: 18
					},

					listView: {
						borderWidth: 1,
						borderColor: '#ddd',
						backgroundColor: '#fff',
						marginHorizontal: 20,
						elevation: 5,
						shadowColor: '#000',
						shadowOpacity: 0.1,
						shadowOffset: { x: 0, y: 0 },
						shadowRadius: 15,
						marginTop: 10,
					},

					description: {
						fontSize: 16,
					},

					row: {
						padding: 20,
						height: 58,
					},
				}}
			/>
		)
	}
}

export default Search;

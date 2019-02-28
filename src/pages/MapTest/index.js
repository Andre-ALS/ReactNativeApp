import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Button, StatusBar } from 'react-native';
import { Picker } from 'native-base'
import MapView from 'react-native-maps';

import styles from './styles';

class MapTest extends Component {
  static propTypes= {
    navigation: PropTypes.shape().isRequired,
  };
  
  state = {
    type: 'standard',
    mapTypes: [
      'standard',
      'satellite',
      'terrain',
      'none',
    ]
  };

  loadPickerOptions = () => {
    return this.state.mapTypes.map((type, index) => (
        <Picker.Item 
          label={type} 
          value={type}
          key={JSON.stringify(index)}/>
      ));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={false}/>
        <MapView 
          style={styles.mapStyle}
          region={{
            latitude: -23.19920816,
            longitude: -45.88654494,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          }}
          showsUserLocation={true}
          loadingEnabled
          mapType={this.state.type}
        />
        <View>
          <Picker
            selectedValue={this.state.type}
            onValueChange={type => this.setState({type})}
          >
            {this.loadPickerOptions()}
          </Picker>
        </View>
        <Button 
          title="Ir Para a Tela Principal"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}

export default MapTest;

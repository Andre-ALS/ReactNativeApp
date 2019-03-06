import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Button, StatusBar, Picker } from 'react-native';

import Map from '../../components/Map'
import styles from './styles';

class MapTest extends Component {
  static propTypes= {
    navigation: PropTypes.shape().isRequired,
  };
  
  state = {
    mapType: 'standard',
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
        <Map type={this.state.mapType}/>
        {/* <View style={styles.mapOptions}>
          <Picker
              selectedValue={this.state.mapType}
              style={styles.pickerType}
              onValueChange={mapType => this.setState({mapType})}
            >
            {this.loadPickerOptions()}
          </Picker>
          <Button 
            color="#000"
            title="Voltar"
            onPress={() => this.props.navigation.navigate('Main')}
          />
        </View> */}
      </View>
    );
  }
}

export default MapTest;

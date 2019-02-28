import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, Text, Button } from 'react-native'

class Main extends Component {
  static propTypes= {
    navigation: PropTypes.shape().isRequired,
  };

  render() {
    return (
      <View>
        <Text>Main</Text>
        <Button 
          title="Ir Para o Mapa"
          onPress={() => this.props.navigation.navigate('MapTest')}
        />
      </View>
    );
  }
}

export default Main;

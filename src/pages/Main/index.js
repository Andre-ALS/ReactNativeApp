import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

class Main extends Component {
  static propTypes= {
    navigation: PropTypes.shape().isRequired,
  };

  render() {
    return (
      <View>
        <Text>Main!</Text>
      </View>
    );
  }
}

export default Main;

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import CircularButton from '../components/CircularButton';

import AppColors from '../constants/AppColors';

class CalculatorHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          backgroundColor: AppColors.blackbackground,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CircularButton>1</CircularButton>
      </View>
    );
  }
}

export default CalculatorHome;

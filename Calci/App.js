import React, {Component} from 'react';
import {View, Text} from 'react-native';
import CalculatorHome from './src/screens/CalculatorHome';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CalculatorHome></CalculatorHome>;
  }
}

export default App;

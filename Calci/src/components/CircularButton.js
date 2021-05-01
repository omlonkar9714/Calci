import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppColor from '../constants/AppColors';

class CircularButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={1} style={{height: 50, width: 50}}>
        <View
          style={{
            top: -1,
            left: -1,
            position: 'absolute',
            elevation: 2,
            shadowColor: AppColor.white,
            height: 50,
            width: 50,
            borderRadius: 25,
          }}></View>
        <View
          style={{
            elevation: 5,
            shadowColor: AppColor.black,
            height: 50,
            width: 50,
            backgroundColor: AppColor.blackbackground,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
          }}>
          <Text style={{color: AppColor.white, fontSize: 20}}>
            {this.props.children}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default CircularButton;

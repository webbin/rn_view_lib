/*
 * @Author: your name
 * @Date: 2020-03-24 10:14:53
 * @LastEditTime: 2020-03-24 14:46:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /rn_view_lib/src/TextView.js
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class TextView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          marginVertical: 20,
        }}>
        <Text>version 0.0.2</Text>
        <Text style={{fontSize: 20, color: 'black'}}> TextView </Text>
      </View>
    );
  }
}

import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {call} from 'redux-saga/effects';

const FullWidthButton = ({callback, label}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#18c900',
          flex: 1,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={callback}>
        <Text
          style={{
            color: '#FFF',
            fontSize: 24,
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FullWidthButton;

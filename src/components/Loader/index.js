import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const Loader = ({style, color, size}) => {
  return (
    <ActivityIndicator
      color={color ? color : COLORS.light_green}
      size={size ? size : 'large'}
      style={[{marginTop: SIZES.padding2}, style]}
    />
  );
};

export default Loader;

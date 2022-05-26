import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS, FONTS} from '../../constants';

const CustomText = ({style, text, numberOfLines}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[textStyles.defaultText, style]}>
      {text}
    </Text>
  );
};
const textStyles = StyleSheet.create({
  defaultText: {
    textAlign: 'center',
    ...FONTS.RedHatBlack14,
    color: COLORS.black,
  },
});

export default CustomText;

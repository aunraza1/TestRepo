import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text} from '../index';
import {COLORS, FONTS, SIZES} from '../../constants';

const Button = ({
  btnStyle,
  imgStyle,
  btnText,
  imgSource,
  isIcon = false,
  onPress,
  btnTextStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={[styles.btn, btnStyle]}>
      {isIcon && <Image style={[styles.img, imgStyle]} source={imgSource} />}
      <Text style={[styles.btn_text, btnTextStyle]} text={btnText} />
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding2,
    elevation: 4,
    height: SIZES.padding * 2,
    backgroundColor: COLORS.white,
    width: '45%',
    borderRadius: SIZES.padding2 * 0.4,
    alignItems: 'center',
  },
  btn_text: {
    ...FONTS.RedHatMedium14,
    marginLeft: SIZES.padding2,
  },
  img: {
    height: SIZES.padding,
    width: SIZES.padding,
  },
});

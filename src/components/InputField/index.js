import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const InputField = ({
  style,
  placeholder,
  onChangeText,
  secureText,
  keyboardType,
  defaultValue,
  onFocus,
  onBlur,
  ref,
  isEdit,
  value,
}) => {
  return (
    <TextInput
      ref={ref}
      value={value}
      placeholderTextColor={COLORS.black}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      placeholder={placeholder}
      secureTextEntry={secureText}
      style={[styles.input, style]}
      defaultValue={defaultValue}
      onFocus={onFocus}
      onBlur={onBlur}
      editable={isEdit}
      underlineColorAndroid="transparent"
    />
  );
};
const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    height: 50,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: SIZES.padding2,
    ...FONTS.RedHatLight14,
    color: COLORS.black,
    backgroundColor: COLORS.light_gray,
    marginTop: SIZES.padding2,
  },
});

export default InputField;

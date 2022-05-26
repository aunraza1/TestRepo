import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export const COLORS = {
  white: '#fff',
  light_gray: '#DCDCDC',
  gray: '#808080',
  black: '#000000',
  transparent: 'transparent',
  light_green: '#3CB371',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 20,
  padding2: 12,

  // font sizes
  h12: 12,
  h13: 13,
  h14: 14,
  h15: 15,
  h16: 16,
  h17: 17,
  h18: 18,
  h19: 19,
  h20: 20,
  h21: 21,
  h22: 22,
  h24: 24,
  h25: 25,
  h27: 27,
  h28: 28,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  RedHatBlack25: {
    fontFamily: 'RedHatDisplay-Black',
    fontSize: RFValue(SIZES.h25),
  },
  RedHatBlack21: {
    fontFamily: 'RedHatDisplay-Black',
    fontSize: RFValue(SIZES.h21),
  },
  RedHatBlack18: {
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: RFValue(SIZES.h18),
  },
  RedHatBlack17: {
    fontFamily: 'RedHatDisplay-Black',
    fontSize: RFValue(SIZES.h17),
  },
  RedHatBlack16: {
    fontFamily: 'RedHatDisplay-Black',
    fontSize: RFValue(SIZES.h16),
  },
  RedHatBlack15: {
    fontFamily: 'RedHatDisplay-Black',
    fontSize: RFValue(SIZES.h15),
  },
  RedHatBlack14: {
    fontFamily: 'RedHatDisplay-Black',
    fontSize: RFValue(SIZES.h14),
  },
  RedHatBlack13: {
    fontFamily: 'RedHatDisplay-Black',
    fontSize: RFValue(SIZES.h13),
  },
  RedHatBlack12: {
    fontFamily: 'RedHatDisplay-Black',
    fontSize: RFValue(SIZES.h12),
  },

  RedHatLight25: {
    fontFamily: 'RedHatDisplay-Light',
    fontSize: RFValue(SIZES.h25),
  },
  RedHatLight21: {
    fontFamily: 'RedHatDisplay-Light',
    fontSize: RFValue(SIZES.h21),
  },
  RedHatLight18: {
    fontFamily: 'RedHatDisplay-Light',
    fontSize: RFValue(SIZES.h18),
  },
  RedHatLight17: {
    fontFamily: 'RedHatDisplay-Light',
    fontSize: RFValue(SIZES.h17),
  },
  RedHatLight16: {
    fontFamily: 'RedHatDisplay-Light',
    fontSize: RFValue(SIZES.h16),
  },
  RedHatLight15: {
    fontFamily: 'RedHatDisplay-Light',
    fontSize: RFValue(SIZES.h15),
  },
  RedHatLight14: {
    fontFamily: 'RedHatDisplay-Light',
    fontSize: RFValue(SIZES.h14),
  },
  RedHatLight13: {
    fontFamily: 'RedHatDisplay-Light',
    fontSize: RFValue(SIZES.h13),
  },
  RedHatLight12: {
    fontFamily: 'RedHatDisplay-Light',
    fontSize: RFValue(SIZES.h12),
  },

  RedHatMedium25: {
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: RFValue(SIZES.h25),
  },
  RedHatMedium21: {
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: RFValue(SIZES.h21),
  },
  RedHatMedium18: {
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: RFValue(SIZES.h18),
  },
  RedHatMedium17: {
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: RFValue(SIZES.h17),
  },
  RedHatMedium16: {
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: RFValue(SIZES.h16),
  },
  RedHatMedium15: {
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: RFValue(SIZES.h15),
  },
  RedHatMedium14: {
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: RFValue(SIZES.h14),
  },
  RedHatMedium13: {
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: RFValue(SIZES.h13),
  },
  RedHatMedium12: {
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: RFValue(SIZES.h12),
  },
};

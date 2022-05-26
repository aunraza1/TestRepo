import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import {InputField, Text, Loader, Button} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {authenticateUser} from '../../redux/actions/auth-action';
const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const {loading} = useSelector(state => state.AuthReducer);

  const userLogin = () => {
    if (email == '' || email == null) {
      alert('Enter Email');
    } else if (password == '' || password == null) {
      alert('Enter Password');
    } else {
      dispatch(authenticateUser(email, password));
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.main_view}>
      <View style={styles.curved_view}>
        <Image style={styles.image} source={images.logo} />
      </View>
      <View style={styles.sub_view}>
        <Text style={styles.text} text="Log in with :" />
        <View
          style={[
            styles.row,
            {marginTop: SIZES.padding * 2, justifyContent: 'space-around'},
          ]}>
          <Button
            onPress={() => console.log('Facebook')}
            isIcon={true}
            btnText="Facebook"
            imgSource={images.facebook_logo}
          />
          <Button
            onPress={() => console.log('Google')}
            isIcon={true}
            btnText="Google"
            imgSource={images.google_logo}
          />
        </View>
        <View style={[styles.row, {marginTop: SIZES.padding}]}>
          <View style={styles.horizontal_line} />
          <View style={styles.or_view}>
            <Text style={styles.or_text} text="Or" />
          </View>
          <View style={styles.horizontal_line} />
        </View>
        <Text style={styles.label_text} text="Email or Phone" />
        <InputField
          onChangeText={text => setEmail(text)}
          placeholder="Enter your email or phone number"
        />
        <Text style={styles.label_text} text="Password" />
        <InputField
          onChangeText={text => setPassword(text)}
          secureText={true}
          placeholder="Enter your password"
        />
        <TouchableOpacity>
          <Text
            style={[styles.label_text, {textAlign: 'right', bottom: 6}]}
            text="Forgot Password"
          />
        </TouchableOpacity>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Button
              btnTextStyle={{color: COLORS.white}}
              btnText="Log in"
              btnStyle={styles.btn}
              onPress={() => userLogin()}
            />
            <Button
              btnText="Sign Up"
              btnStyle={[styles.btn, {backgroundColor: COLORS.whiteÎ}]}
              onPress={() => console.log('Hello')}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
};
export default Login;

const styles = StyleSheet.create({
  main_view: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  curved_view: {
    height: 170,
    backgroundColor: COLORS.light_gray,
    borderBottomEndRadius: 170,
    borderBottomStartRadius: 170,
    justifyContent: 'center',
  },
  sub_view: {
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding2,
  },
  image: {
    height: '30%',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  text: {
    ...FONTS.RedHatMedium18,
    marginTop: SIZES.padding2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontal_line: {
    width: '40%',
    height: 1,
    backgroundColor: COLORS.light_gray,
  },
  or_text: {
    ...FONTS.RedHatLight13,
  },
  or_view: {
    width: '20%',
  },
  label_text: {
    textAlign: 'left',
    marginTop: SIZES.padding2,
    ...FONTS.RedHatMedium14,
    color: COLORS.gray,
  },
  btn: {
    width: '100%',
    backgroundColor: COLORS.light_green,
    height: SIZES.padding * 2.6,
    borderRadius: SIZES.padding2,
    marginTop: SIZES.padding2,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React, { useEffect, useState,useRef } from 'react';
import { Col, Container, Content, View } from 'native-base';
import Label from '../../Components/Label';
import GlobalStyle from '../../Utils/GlobalStyle';
import CheckButton from '../../Components/CheckButton';
import CustomButton from '../../Components/CustomButton';
import TopNavigation from '../../Components/TopNavigation';
import { calcHeight, calcWidth } from '../../Utils/ConvertSize';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Images from '../../Utils/Images';
import VerRuler from '../../Components/MainHeader';
import Colors from '../../Utils/Colors';
import validate from '../../Utils/validation_wrapper';
import action from '../../Redux/Actions/auth';
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';

const TermCondition = ({ navigation }) => {
  const content = useSelector((state) => state.signInReducer);
  const dispatch = useDispatch();
  // HANDLE API RESPONSE HERE
  const [checked, setChecked] = React.useState(false);
  
  useEffect(() => {
    console.log('RESPONSE **', content);
  }, [content]);

  const loginClick = () => {
    navigation.navigate('Instructions');
  };
  const checkFunc = () => {
    if (checked) setChecked(false);
    else setChecked(true);

  }
  return (
    <Container style={GlobalStyle.container}>
      <TopNavigation title="TERMS & CONDITIONS" />
      <Content style={GlobalStyle.subContainer}>
        <VerRuler height={15} />
        <Label color={Colors.TEXT_DARK} weight400 font15 style={style.description}>
          Lorem ipsum dolor sit amet, Quisque eu bibendum magna. Proin et tempus risus. Integer tincidunt nisi sit amet magna faucibus pulvinar. Vivamus lacus elit, hendrerit non augue vel, pulvinar cursus nibh. Curabitur ut vestibulum purus. Etiam sit amet malesuada est. Praesent vehicula, risus ac tristique suscipit, sapien enim tincidunt neque, vitae porta est diam gravida risus. Aliquam vel volutpat urna, vestibulum interdum arcu. In fermentum at mi non cursus. Suspendisse commodo gravida aliquam. Phasellus in vestibulum dui, eget auctor ante. Ut sollicitudin, sem ac sagittis vestibulum, diam augue egestas quam, at volutpat purus nisi et eros. Aliquam erat volutpat.
          </Label>
        <VerRuler height={50} />
        <CheckButton title="I Agree to Terms & Conditions" onPress={checkFunc} checked={checked} />
        <VerRuler height={30} />
        <CustomButton title="Accept & Continue" onPress={loginClick} loading={content.loading} />
      </Content>
    </Container>
  );
};

export default TermCondition;

const style = StyleSheet.create({
  forgotPasswordView: {
    height: 20,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
    marginTop: 5,
  },
  description: {
    letterSpacing: 1.5,
  }
});

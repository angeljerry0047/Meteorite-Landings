import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from 'native-base';
import Colors from '../Themes/Colors';
import Fonts from '../Themes/Fonts';
import {
  deviceWidth,
  deviceHeight,
  calcHeight,
  calcWidth,
} from '../Themes/ConvertSize';
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.TRANSPARENT,
    height: calcHeight(60),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:calcHeight(20),
  },
  title: {
    fontSize: Fonts.font30,
    color: Colors.WHITE,
  },
});
const MainHeader = (props) => {
  return (
    <Header style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </Header>
  );
};

export default MainHeader;

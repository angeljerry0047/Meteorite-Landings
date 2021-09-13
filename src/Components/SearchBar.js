import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
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
    backgroundColor: Colors.OPACITY,
    height: calcHeight(50),
    alignItems: 'center',
    width: deviceWidth * 0.95,
    borderRadius: calcHeight(5),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: calcHeight(5),
    marginTop: calcHeight(10),
    marginBottom: calcHeight(5),
  },
  title: {
    fontSize: Fonts.font12,
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
  input: {
    width: '49%',
    backgroundColor: Colors.TEXT_DARK,
    paddingHorizontal: 5,
    paddingVertical: 2.5,
    borderRadius: calcHeight(10),
    color: Colors.WHITE,
    fontSize: Fonts.font12,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    width: calcWidth(60),
    height: calcHeight(40),
    borderRadius: calcHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={Colors.TEXT_PLACEHOLDER}
        placeholder="Search by name."
        style={styles.input}
        onChangeText={props.onChangeName}
        value={props.nameclue}></TextInput>
      <TextInput
        placeholderTextColor={Colors.TEXT_PLACEHOLDER}
        placeholder="Search by id."
        style={styles.input}
        onChangeText={props.onChangeId}
        keyboardType={'number-pad'}
        value={props.idclue}></TextInput>
    </View>
  );
};

export default SearchBar;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../Themes/Colors';
import Fonts from '../Themes/Fonts';
import {
  deviceWidth,
  deviceHeight,
  calcHeight,
  calcWidth,
} from '../Themes/ConvertSize';
import moment from 'moment';
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.OPACITY,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: calcHeight(7.5),
    width: deviceWidth * 0.95,
    borderRadius: calcHeight(5),
    alignSelf: 'center',
    paddingVertical: calcHeight(10),
  },
  title: {
    fontSize: Fonts.font25,
    color: Colors.TEXT_PLACEHOLDER,
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    marginVertical:calcHeight(5),
  },
  subitem1: {
    alignItems: 'center',
    width: '45%',
    marginLeft: calcWidth(10),
    fontSize: Fonts.font16,
    color: Colors.PRIMARY,
  },
  subitem2: {
    alignItems: 'center',
    width: '55%',
    marginLeft: calcWidth(10),
    fontSize: Fonts.font16,
    color: Colors.PRIMARY,
  },
});
const DataItem = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name:  {data.name}</Text>
      <View style={styles.item}>
        <Text style={styles.subitem1}>Id: {data.id} </Text>
        <Text style={styles.subitem2}>nametype: {data.nametype} </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.subitem1}>recclass: {data.recclass} </Text>
        <Text style={styles.subitem2}>mass: {data.mass} </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.subitem1}>fall: {data.fall} </Text>
        <Text style={styles.subitem2}>year: {moment(data.year).year()} </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.subitem1}>reclat: {data.reclat} </Text>
        <Text style={styles.subitem2}>reclong: {data.reclong} </Text>
      </View>
    </View>
  );
};

export default DataItem;

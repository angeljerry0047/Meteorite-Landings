import {StyleSheet} from 'react-native';
import { deviceWidth,deviceHeight, calcHeight, calcWidth } from './Themes/ConvertSize';
import Colors from './Themes/Colors';
import Fonts from './Themes/Fonts';

const styles = StyleSheet.create({
  bg: {
    width: deviceWidth,
    height: deviceHeight,
  },
  noresult:{
      color:Colors.DARK_RED,
      alignSelf:'center',
      fontSize: Fonts.font25,
      marginTop:calcHeight(25),
  },
  spinnerTextStyle:{
      color:Colors.WHITE
  }
});
export default styles;

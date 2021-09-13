import {Dimensions} from 'react-native';
const DesignWidth = 343;
const DesignHeight = 812;
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const calcHeight = (x) => (deviceHeight / DesignHeight) * x;
export const calcWidth = (x) => (deviceWidth / DesignWidth) * x;
export const DEVICE_PADDING_WIDTH = Dimensions.get('window').width - 30;

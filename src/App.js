import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData} from './API';
import {ImageBackground, StatusBar} from 'react-native';
import styles from './style';
import Images from './Themes/Images';
import {MainHeader, DataItem, SearchBar} from './Components';
import Spinner from 'react-native-loading-spinner-overlay';
import {Content} from 'native-base';
const App = () => {
  const [spinner, setSpinner] = useState(true);
  const [result, setResult] = useState([]);
  const [nameclue, setNameclue] = useState(null);
  const [idclue, setIdclue] = useState(null);
  useEffect(() => {
    initFetch();
    getSavedData();
  }, []);
  const initFetch = async () => {
    let response = await getData();
    setResult(response.data);
    setSpinner(false);
  };
  const storeData = async (value, keyVal) => {
    try {
      await AsyncStorage.setItem(`clue${keyVal}`, value);
    } catch (e) {
      console.log(e);
    }
  };
  const getSavedData = async () => {
    try {
      const namevalue = await AsyncStorage.getItem('cluename');
      const idvalue = await AsyncStorage.getItem('clueid');
      if (namevalue !== null) {
        setNameclue(namevalue);
      }
      if (idvalue !== null) {
        setIdclue(idvalue);
      }
      return;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ImageBackground source={Images.bg} style={styles.bg}>
      <StatusBar hidden={true} />
      <MainHeader title="Meteorite Landings" />
      <SearchBar
        nameclue={nameclue}
        idclue={idclue}
        onChangeName={(nameclue) => {
          setNameclue(nameclue);
          storeData(nameclue, 'name');
        }}
        onChangeId={(idclue) => {
          setIdclue(idclue);
          storeData(idclue, 'id');
        }}
      />
      <Content>
        {nameclue === null &&
          idclue === null &&
          result.map((item, index) => <DataItem key={index} data={item} />)}
        {nameclue !== null &&
          idclue === null &&
          result.map(
            (item, index) =>
              item.name.includes(nameclue) && (
                <DataItem key={index} data={item} />
              ),
          )}
        {nameclue === null &&
          idclue !== null &&
          result.map(
            (item, index) =>
              item.id.includes(idclue) && <DataItem key={index} data={item} />,
          )}
        {nameclue !== null &&
          idclue !== null &&
          result.map(
            (item, index) =>
              item.id.includes(idclue) &&
              item.name.includes(nameclue) && (
                <DataItem key={index} data={item} />
              ),
          )}
      </Content>
      <Spinner
        visible={spinner}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
    </ImageBackground>
  );
};

export default App;

import 'react-native-gesture-handler';
import React, {Component} from "react";
import { AppRegistry, Navigator,  ImageBackground, StyleSheet, Text, View, TextInput, Button, Alert, Touchable, TouchableOpacity } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';

// import NoTelp from './pages/noTelpScreen';
// import KodeOtp from './pages/kodeOtpScreen';
// import Perusahaan from './pages/perusahaanScreen';
// import Kelompok from './pages/kelompokScreen';
// import Notifikasi from './pages/notifikasiScreen';
// import Search from './pages/searchScreen';
// import Help from './pages/helpScreen';

const image = require('D:/MagangInAja/MagangInAja/images/login.png');

const noTelpInput = () => {
  const [value, onChangeText] = React.useState('Email');
}
const alertLogin = () => Alert.alert("","Login Berhasil");

const App = () => (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Daftar</Text>
      <Text style={styles.email}>Nomor Telepon</Text>
      <TextInput source={noTelpInput} style={styles.inputE} placeholder={"Nomor"}></TextInput>
    <NavigationContainer>
      <View style={styles.MainContainer}>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 } 
          onPress={ () => alertLogin}>
            <Text style={styles.TextStyle}> Next </Text>
        </TouchableOpacity>
      </View>
      </NavigationContainer>
      <Text style={styles.note}>*Nomor telepon akan digunakan untuk verifikasi</Text>
    </ImageBackground>
  </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    fontFamily: "rockb",
    color: "black",
    fontSize: 40,
    textAlign: "center", 
    marginTop: 170,
  },
  email:{
    color: "black",
    fontFamily: "rockwen",
    fontSize: 27,
    textAlign: "center",
    marginTop: 70,
    marginBottom: 20
  },
  inputE:{
    height: 44,
    width: 273,
    marginHorizontal: 42,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 25,
    padding: 15,
    fontSize: 15
  },
  note:{
    fontFamily: "rockwen",
    fontSize: 18,
    color: "#939393",
    textAlign: "center",
    width: 250,
    marginHorizontal: 50,
    marginTop: 20,
    opacity: 0.5
  },
  MainContainer: {
  },
 
  SubmitButtonStyle: {
    width: 132,
    height: 43,
    marginTop:110,
    marginBottom: -10,
    paddingTop:6,
    paddingBottom:6,
    marginHorizontal: 110,
    backgroundColor:'#42A047',
    borderRadius:25,
    borderWidth: 1,
    borderColor: "transparent"
  },
 
  TextStyle:{
      fontFamily: "rockb",
      fontSize: 24,
      color:'#fff',
      textAlign:'center',
  }
});

export default App;

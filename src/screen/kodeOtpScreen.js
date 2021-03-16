import 'react-native-gesture-handler';
import React, {Component} from "react";
import { AppRegistry, Navigator,  ImageBackground, StyleSheet, Text, View, TextInput, Button, Alert, Touchable, TouchableOpacity,SafeAreaView } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

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

const KodeOtpScreen = () => (
  <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Icon name="chevron-back" size={127} color="white" style={{
        position:'absolute',
        top:133,
        marginLeft:-25,
        marginBottom:0
      }}/>
      <Text style={styles.text}>Daftar</Text>
      <Text style={styles.email}>Kode OTP</Text>
      <TextInput source={noTelpInput} style={styles.inputE} placeholder={"Kode"}></TextInput>
    <NavigationContainer>
      <View style={styles.MainContainer}>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 } 
          onPress={alertLogin}>
            <Text style={styles.TextStyle}> Verifikasi </Text>
        </TouchableOpacity>
      </View>
      </NavigationContainer>
      <Text style={styles.note}>Tidak menerima kode?</Text>
      <Text style={styles.resend}>Kirim Ulang</Text>
    </ImageBackground>
  </View>
  </SafeAreaView>
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
    marginTop: 160,
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
    fontFamily: "rockb",
    fontSize: 18,
    color: "black",
    textAlign: "center",
    width: 250,
    marginHorizontal: 50,
    marginTop: 30,
  },
  resend:{
    fontFamily: "rockb",
    fontSize: 18,
    textDecorationLine: "underline",
    color: "#42A047",
    textAlign: "center",
    width: 250,
    marginHorizontal: 50,
    marginTop: 10
  },
  MainContainer: {
  },
 
  SubmitButtonStyle: {
    width: 132,
    height: 45,
    marginTop:70,
    marginBottom: -10,
    paddingTop:7,
    paddingBottom:7,
    marginHorizontal: 110,
    backgroundColor:'#42A047',
    borderRadius:25,
    borderWidth: 1,
    borderColor: "transparent"
  },
 
  TextStyle:{
      fontFamily: "rockb",
      fontSize: 22,
      color:'#fff',
      textAlign:'center',
  }
});

export default KodeOtpScreen;

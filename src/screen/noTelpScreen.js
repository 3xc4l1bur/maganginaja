import 'react-native-gesture-handler';
import React, {Component} from "react";
import { AppRegistry, Navigator,  ImageBackground, StyleSheet, Text, View, TextInput, Button, Alert, Touchable, TouchableOpacity } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const image = require('D:/MagangInAja/MagangInAja/images/login.png');
const numberInput = () => {
    const [value, onChangeText] = React.useState('Number');
  }

  const App = () => (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Daftar</Text>
      <Text style={styles.noTelp}>No. Telepon</Text>
      <TextInput source={numberInput} style={styles.inputNo} placeholder={"No."}></TextInput>
      <View style={styles.MainContainer}>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }>
 
            <Text style={styles.TextStyle}> Next </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.note}>*Nomor akan digunakan untuk verifikasi akun.</Text>
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
      marginTop: 80,
      marginBottom:50,
    },
    noTelp:{
      color: "black",
      fontFamily: "rockwen",
      fontSize: 27,
      textAlign: "center",
      marginTop: 30,
      marginBottom: 10
    },
    inputNo:{
      height: 44,
      width: 273,
      marginHorizontal: 40,
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
      marginTop: 30,
      opacity: 0.5
    },
    MainContainer: {
    },
   
    SubmitButtonStyle: {
      width: 132,
      height: 43,
      marginTop:25,
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
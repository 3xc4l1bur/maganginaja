import 'react-native-gesture-handler';
import React, {Component} from "react";
import { AppRegistry, Navigator,  ImageBackground, StyleSheet, Text, View, TextInput, Button, Alert, Touchable, TouchableOpacity, Linking } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';

const image = require('D:/MagangInAja/MagangInAja/images/login.png');

const emailInput = () => {
  const [value, onChangeText] = React.useState('Email');
}
const passInput = () => {
  const [value, onChangeText] = React.useState('Password');
}


const App = ({navigation}) => {
  return(
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Daftar</Text>
      <Text style={styles.email}>Email</Text>
      <TextInput source={emailInput} style={styles.inputE} placeholder={"Email"}></TextInput>
      <Text style={styles.email}>Password</Text>
      <Icon style={styles.eye} name="eye-with-line" size={25} color="black" />
      <TextInput source={passInput} style={styles.inputP} placeholder={"Password"}></TextInput>
    <NavigationContainer>
      <View style={styles.MainContainer}>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }>
            <Text style={styles.TextStyle}> Daftar </Text>
        </TouchableOpacity>
      </View>
      </NavigationContainer>
      <Text style={styles.note}>*Gunakan email anda untuk mendaftar Aplikasi</Text>
    </ImageBackground>
  </View>
  );
}


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
    marginTop: 30,
    marginBottom: 15
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
  inputP:{
    height: 44,
    width: 273,
    marginHorizontal: 42,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 25,
    padding: 15,
    fontSize: 15
  },
  eye:{
    marginLeft: 275,
    marginTop: -25,
    top: 35
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
    marginTop:40,
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

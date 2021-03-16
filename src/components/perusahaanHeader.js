import React, {Component} from "react";
import {StyleSheet, Text, View} from 'react-native';
import { State, TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Feather';

const Header = ({ navigation }) => {
  return(
    <View>
      <View style={styles.header}>
        <View View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.navigate('KodeOtp')}>
            <Icon
              size= {30} 
              color={'white'}
              name={"menu"} />
          </TouchableOpacity>
          <Text style={styles.text}>Perusahaan</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <View>
            <Icon
              size={25}
              color={'white'}
            name={'search'}
            />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.underHeader}>
        <View style={styles.jurusanSelected}>
          <Text style={styles.jurusanText}>RPL</Text>
        </View>
        <View style={styles.jurusanNotSelected}>
          <Text style={styles.jurusanText}>AKL</Text>
        </View>
        <View style={styles.jurusanNotSelected}>
          <Text style={styles.jurusanText}>OTP</Text>
        </View>
        <View style={styles.jurusanNotSelected}>
          <Text style={styles.jurusanText}>TKJ</Text>
        </View>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  header:{
    position: 'absolute',
    width: '100%',
    height: 50,
    backgroundColor: '#43A047',
    padding:5,
    marginTop: -10,
    borderRadius: 12,
    elevation: 6,
    shadowOffset: {width:10 ,height:20},
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowRadius: 1,
  },
  underHeader:{
    width:'100%',
    height: 83,
    backgroundColor: '#337836',
    padding:3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  menu:{
    marginLeft: 5,
    flexDirection: 'row',
    marginRight: 10,
    marginTop: 9
  },
  text:{
    color: 'white',
    fontFamily:'Recoleta-Regular',
    fontSize: 30,
    marginLeft: 10,
    marginRight: 140
  },
  jurusanSelected:{
    padding:2,
    marginTop: 48,
    marginHorizontal: 10,
    height: 25,
    width: 62,
    borderRadius: 15,
    backgroundColor: '#43A047',
  },
  jurusanNotSelected:{
    padding:2,
    marginTop: 48,
    marginHorizontal: 10,
    height: 25,
    width: 62,
  },
  jurusanText:{
    color: 'white',
    fontSize: 16,
    fontFamily: 'roboto',
    alignSelf: 'center',
  }
});

export default Header;
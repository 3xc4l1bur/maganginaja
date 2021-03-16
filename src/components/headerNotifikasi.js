import React, {Component} from "react";
import {StyleSheet, Text, View} from 'react-native';
import { State } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Feather';

const Header = () => {
  return(
    <View>
      <View style={styles.header}>
        <View View style={styles.menu}>
          <Icon
            size= {30} 
            color={'white'}
            name={"menu"} />
          <Text style={styles.text}>Notifikasi</Text>
          <Icon
          style={{right:-24}}
            size={25}
            color={'white'}
           name={'search'}
          />
        </View>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  header:{
    position: 'relative',
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
    marginBottom:0
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
});

export default Header;
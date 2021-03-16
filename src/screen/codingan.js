import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import RegisScreen from './src/screen/regisScreen';
import NotificationsScreen from './src/screen/notifikasiScreen';
import PerusahaanScreen from './src/screen/perusahaanScreen';
import DetailPerusahaanScreen from './src/screen/detailPerusahaanScreen';
import KelompokScreen from './src/screen/kelompokScreen';
import SearchScreen from './src/screen/searchScreen';
import BuatKelompokScreen from './src/screen/buatKelompok';
import NewKelompokScreen from './src/screen/newKelompok';
import HelpScreen from './src/screen/helpScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Perusahaan"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Perusahaan" component={PerusahaanScreen}/>
        <Stack.Screen name="Details" component={DetailPerusahaanScreen}/>
        <Stack.Screen name="Search" component={SearchScreen}/>
      </Stack.Navigator>
  )
}

function KelompokStack() {
  return (
    <Stack.Navigator
      initialRouteName="Kelompok"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Kelompok" component={KelompokScreen} />
      <Stack.Screen name="Search" component={SearchScreen} /> 
      <Stack.Screen name="BuatKelompok" component={BuatKelompokScreen}/>
      <Stack.Screen name="NewKelompok" component={NewKelompokScreen}/>
    </Stack.Navigator>
  )
}

function NotificationsStack(){
  return(
    <Stack.Navigator
    initialRouteName="Notifikasi"
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Notifikasi" component={NotificationsScreen}/>
      <Stack.Screen name="Search" component={SearchScreen}/>
    </Stack.Navigator>
  )
}

function TabNavigator(){
  return(
      <Tab.Navigator
        initialRouteName="Perusahaan"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Perusahaan') {
              iconName = focused
                ? 'briefcase'
                : 'briefcase-outline';
            } else if (route.name === 'Kelompok') {
              iconName = focused ? 'account-group' : 'account-group-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'bell' : 'bell-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={30} color={'#42A047'} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#42A047',
          inactiveTintColor: '#42A047',
          labelStyle: {
            fontFamily:'Recoleta-Regular',
            fontSize:15
          }
        }}
        >
        <Tab.Screen
          name="Perusahaan"
          component={HomeStack}
        />
        <Tab.Screen
          name="Kelompok"
          component={KelompokStack}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsStack}
        />
      </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
       <Drawer.Navigator initialRouteName="Menu">
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Help" component={HelpScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;

import React, {Component, useState} from 'react';
import {View, Text, Button, ScrollView, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchCard from '../components/searchCard';

const searchInput = () => {
    const [value, onChangeText] = React.useState('Search');
  }

const searchScreen = ({ navigation }) => {
    return(
        <View style={{flex:1}}>
            <View style={styles.top}>
                <View style={styles.inside}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="ios-arrow-back-circle-outline" size={40} color="white"/>
                    </TouchableOpacity>
                    <TextInput source={searchInput} style={styles.searchInput} placeholder="Telusuri disini"/>
                    <Icon name="ios-close-circle" size={30} color="#43A047" style={{marginLeft:-30, marginTop:7}}/>
                    <Icon name="ios-search" size={35} color="white" style={{marginLeft:9, marginTop:2}}/>
                </View>
            </View>
            <ScrollView style={{marginTop:50}}>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <SearchCard/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <SearchCard/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <SearchCard/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <SearchCard/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <SearchCard/>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    top:{
        position: 'absolute',
        width: '100%',
        height: 65,
        backgroundColor: '#43A047',
        padding:5,
        marginTop: -10,
        marginBottom:40,
        borderRadius: 12,
        elevation: 6,
        shadowOffset: {width:10 ,height:20},
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowRadius: 1,
    },
    inside:{
        marginTop:10,
        flexDirection:'row',
    },
    searchInput:{
        padding:3,
        fontFamily:'Recoleta-Regular',
        fontSize:18,
        width:'75%',
        height:37,
        marginTop:5,
        marginLeft:5,
        backgroundColor:'white',
        borderRadius:3,
        borderColor:'black',
        borderWidth: 1
    }
})

export default searchScreen;

import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { State } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Card(){
    return(
        <View style={{justifyContent: 'center', alignContent:'center'}}>
            <View style={styles.card}>
                <View style={styles.logo}>
                    <Icon name="building" color='black' size={30}/>
                </View>
                <Text style={styles.text}>PT. Anilo Adikarya Sentosa</Text>
            </View>
            <View style={styles.cardDetails}>
                <View style={styles.jurusan}>
                    <Text style={styles.jurusanText}>RPL</Text>
                </View>
                <Text style={styles.cardAlamat}>
                    Jl. Cendrawasih Mas V Blok A5 No.1
                    Tanjung Barat, Jagakarsa, Jakarta Selatan, 12530.
                </Text>
                <View style={styles.viewMoreBox}>
                    <Text style={styles.viewMore}>View more</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        width:'95%',
        height: 158,
        padding: 10,
        flexDirection: 'row',
        alignSelf:'center',
        backgroundColor:"white",
        borderRadius: 6,
        marginTop: 10,
        marginLeft:10,
        marginRight:10,
    },
    icon:{
        
    },
    text:{
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 30,
    },
    cardDetails:{
        position: 'absolute',
        height: 100,
        width: '90%',
        backgroundColor: '#D9DFDF',
        top: 60,
        borderRadius: 15,
        marginLeft:18,
    },
    jurusan:{
        width:44,
        height:32,
        position:'absolute',
        padding:2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#43A047",
    },
    jurusanText:{
        color:'white',
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:16,
    },
    cardAlamat:{
        width:235,
        height:64,
        fontFamily: 'Recoleta-Bold',
        fontSize: 16,
        color: 'black',
        left: 60,
        top: 20,
    },
    viewMore:{
        color:'white',
        fontFamily:'Recoleta-Bold',
        fontSize: 16,
    },
    viewMoreBox:{
        padding:4,
        width:80,
        height:25,
        left: 244,
        top: 11,
        backgroundColor : '#72B0E6'  
    },
})

import * as React from 'react';
import {View, Text, Button, ScrollView, StyleSheet, TouchableOpacity,TouchableHighlight, SafeAreaView, Alert} from 'react-native';

import Card from '../components/perusahaanCard';
import Icon from 'react-native-vector-icons/Feather';
import SearchScreen from './searchScreen';

const PerusahaanScreen = ({ props,navigation }) => {
    const [rpl,setRpl] = React.useState(styles.jurusanSelected);
    const [otp,setOtp] = React.useState(styles.jurusanNotSelected);
    const [akl,setAkl] = React.useState(styles.jurusanNotSelected);
    const [tkj,setTkj] = React.useState(styles.jurusanNotSelected);

    return(
        <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View View style={styles.menu}>
                        <TouchableOpacity style={{flex:0.25,marginTop:4}}>
                        <Icon
                            size= {30} 
                            color={'white'}
                            name={"menu"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1.5,marginTop:3,marginLeft:2}}>
                            <Text style={styles.text}>Perusahaan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:0.5,marginTop:5,marginRight:-63}} onPress={() => Alert.alert("Halo")}>
                        <Icon
                            size={25}
                            color={'white'}
                            name={'search'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.underHeader}>
                    <TouchableOpacity style={styles.touch} onPress={() => {setRpl(styles.jurusanSelected),setOtp(styles.jurusanNotSelected),setAkl(styles.jurusanNotSelected),setTkj(styles.jurusanNotSelected)}}>
                        <View style={rpl}>
                            <Text style={styles.jurusanText}>RPL</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={() => {setAkl(styles.jurusanSelected),setOtp(styles.jurusanNotSelected),setRpl(styles.jurusanNotSelected),setTkj(styles.jurusanNotSelected)}}>
                        <View style={akl}>
                            <Text style={styles.jurusanText}>AKL</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={() => {setOtp(styles.jurusanSelected),setRpl(styles.jurusanNotSelected),setAkl(styles.jurusanNotSelected),setTkj(styles.jurusanNotSelected)}}>
                        <View style={otp}>
                            <Text style={styles.jurusanText}>OTP</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={() => {setTkj(styles.jurusanSelected),setOtp(styles.jurusanNotSelected),setAkl(styles.jurusanNotSelected),setRpl(styles.jurusanNotSelected)}}>
                        <View style={tkj}>
                            <Text style={styles.jurusanText}>TKJ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                        <Card/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                        <Card/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                        <Card/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                        <Card/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                        <Card/>
                    </TouchableOpacity>
                </ScrollView>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#D9DFDF'
  },
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
    marginTop: 5,
    height:'100%',
  },
  text:{
    color: 'white',
    fontFamily:'Recoleta-Regular',
    fontSize: 30,
  },
  jurusanSelected:{
    padding:2,
    marginTop: 5,
    marginHorizontal: 10,
    height: 25,
    width: 62,
    borderRadius: 15,
    backgroundColor: '#43A047',
  },
  jurusanNotSelected:{
    padding:2,
    marginTop: 5,
    marginHorizontal: 10,
    height: 25,
    width: 62,
  },
  jurusanText:{
    color: 'white',
    fontSize: 16,
    fontFamily: 'roboto',
    alignSelf: 'center',
  },
  touch:{
    marginTop:40,
  }
})

export default PerusahaanScreen;
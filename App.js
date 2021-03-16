import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, TouchableOpacity, Image , SafeAreaView, ScrollView, StyleSheet, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/AntDesign';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import EmailScreen from './src/screen/emailScreen';
import NoTelpScreen from './src/screen/noTelpScreen';
import KodeOtpScreen from './src/screen/kodeOtpScreen';
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

function LoginStack(){
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={EmailScreen}/>
      <Stack.Screen name="NoTelp" component={NoTelpScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const StackHome = createStackNavigator();
function HomeStack() {
  return (
      <StackHome.Navigator
        initialRouteName="Perusahaan"
        screenOptions={{
          headerShown: false
        }}>
        <StackHome.Screen name="Perusahaan" component={PerusahaanScreen}/>
        <StackHome.Screen name="Details" component={DetailPerusahaanScreen}/>
        <StackHome.Screen name="Search" component={SearchScreen} /> 
      </StackHome.Navigator>
  )
}

const StackKelompok = createStackNavigator();
function KelompokStack() {
  return (
    <StackKelompok.Navigator
      initialRouteName="Kelompok"
      screenOptions={{
        headerShown: false
      }}>
      <StackKelompok.Screen name="Kelompok" component={KelompokScreen} />
      <StackKelompok.Screen name="BuatKelompok" component={BuatKelompokScreen}/>
      <StackKelompok.Screen name="NewKelompok" component={NewKelompokScreen}/>
    </StackKelompok.Navigator>
  )
}

const StackNotifikasi = createStackNavigator();
function NotificationsStack(){
  return(
    <StackNotifikasi.Navigator
    initialRouteName="Notifikasi"
    screenOptions={{
      headerShown: false
    }}>
      <StackNotifikasi.Screen name="Notifikasi" component={NotificationsScreen}/>
    </StackNotifikasi.Navigator>
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
              color = focused
                ? '#42A047'
                : 'black';
            } else if (route.name === 'Kelompok') {
              iconName = focused ? 'account-group' : 'account-group-outline';
              color = focused
                ? '#42A047'
                : 'black';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'bell' : 'bell-outline';
              color = focused
                ? '#42A047'
                : 'black';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          keyboardHidesTabBar:true,
          activeTintColor: '#42A047',
          inactiveTintColor: 'black',
          labelStyle: {
            fontFamily:'Recoleta-Regular',
            fontSize:15
          },
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

function CustomDrawerContent(props,navigation) {
  return(
  <SafeAreaView style={{flex:1,backgroundColor:'#323232'}}>
    <View style={{height:'25%',backgroundColor:'#43A047',flexDirection:'row'}}>
      <Image source={require('./images/boy.png')} 
      style={{height:80,width:80,marginTop:10,marginLeft:10}}/>
      <View style={{marginTop:30,marginLeft:5}}>
        <Text style={styles.textDrawer}>Ahmad Ghani</Text>
        <Text style={{...styles.textDrawer,fontSize:20}}>+62 877-7415-1420</Text>
        <Text style={{...styles.textDrawer,fontSize:25,left:-80,marginTop:20}}>ghanioke@gmail.com</Text>
      </View>
      
    </View>
    <ScrollView style={{marginLeft:10,flexDirection:'column-reverse'}}>
      <TouchableOpacity style={{marginBottom:280,flexDirection:'row'}} 
      >
        <Icon3 name="home" color="white" size={30}/>
        <Text style={styles.textList}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginBottom:40,flexDirection:'row'}} onPress={() => Alert.alert("Halo","Anjing")} 
      >
        <Icon name="help-circle-outline" color="white" size={30}/>
        <Text style={styles.textList}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginBottom:20,flexDirection:'row'}} 
      onPress={() => navigation.navigate('RegisScreen')}
      >
        <Icon2 name="sign-out" color='white' size={30}/>
        <Text style={styles.textList}>Exit</Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
  )
}

function App() {
  return (
    <NavigationContainer>
       <Drawer.Navigator initialRouteName="Menu" 
       drawerContent={props => CustomDrawerContent(props)}>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Help" component={HelpScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default NoTelpScreen;

const styles = StyleSheet.create({
  textDrawer:{
    fontFamily:'Recoleta-Regular',
    fontSize:32,
    color:'white'
  },
  textList:{
    fontFamily:'Recoleta-Regular',
    fontSize:30,
    color:'white',
    marginLeft:20
  }
})
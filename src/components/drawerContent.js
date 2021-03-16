import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, TouchableOpacity, Image , SafeAreaView, ScrollView, StyleSheet, Alert} from 'react-native';
import Icon3 from 'react-native-vector-icons/AntDesign';

export default class DrawerScreen extends Component{
    render(){
        return(
    <SafeAreaView style={{flex:1,backgroundColor:'#323232'}}>
    <View style={{height:'25%',backgroundColor:'#43A047',flexDirection:'row'}}>
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
      <TouchableOpacity style={{marginBottom:40,flexDirection:'row'}} onPress={() => navigation.navigate('Help')} 
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
}

const styles=StyleSheet.create({
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
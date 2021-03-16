import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Feather';
import PerusahaanScreen from "./perusahaanScreen";
import SearchScreen from "./searchScreen";

const Tab = createBottomTabNavigator();

const Kelompok = ({ route , navigation }) => {
    return(
        <View>
            <View>
                <View style={styles.header}>
                    <View View style={styles.menu}>
                    <Icon2
                        size= {30} 
                        color={'white'}
                        name={"menu"} />
                    <Text style={styles.text}>Kelompok</Text>
                    </View>
                </View>
                <View style={{
                    top:240,
                    left:150
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('BuatKelompok')}>
                        <View style={styles.circlePlus}></View>
                        <View style={{
                
                            marginTop:-70
                        }}>
                            <Icon name="circle-with-plus" size={80} color="white"/>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text2}>Anda belum mempunyai kelompok silahkan buat kelompok baru</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    circlePlus:{
        width: 70,
        height: 70,
        borderRadius: 70/2,
        backgroundColor: '#43A047'
    }, 
    text2:{
        width:'80%',
        fontFamily: 'Recoleta-Regular',
        textAlign:'center',
        fontSize:21,
        left:30,
        top:242,
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
})

export default Kelompok;
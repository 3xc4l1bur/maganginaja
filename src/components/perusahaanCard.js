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
import React, {Component, useState} from 'react';
import {View, Text, Button, ScrollView, StyleSheet, TextInput, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const notifCard = () => {
    return(
        <View style={{justifyContent: 'center', alignContent:'center'}}>
            <View style={styles.card}>
                <Text style={styles.text}>Anda telah diterima untuk magang di PT. Anilo Adikarya Sentosa</Text>
                <Icon style={styles.icon} name="circle" size={13} color="#FF0000"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        width:375,
        height: 89,
        padding: 10,
        flexDirection: 'row',
        alignSelf:'center',
        backgroundColor:"white",
        position:'relative',
        marginTop:18,
        marginBottom:-5,
        marginLeft:10,
        marginRight:10,
        elevation: 6,
        shadowOffset: {width:10 ,height:20},
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowRadius: 1,
    },
    text:{
        fontFamily: 'Recoleta-Regular',
        fontSize: 22,
        marginLeft: 15,
        marginRight:10,
        marginTop:-2,
    },
    icon:{
        right:16
    }
})

export default notifCard;
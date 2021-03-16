import React, {Component, useState} from 'react';
import {View, Text, Button, ScrollView, StyleSheet, TextInput, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const searchCard = () => {
    return(
        <View style={{justifyContent: 'center', alignContent:'center'}}>
            <View style={styles.card}>
                <Text style={styles.text}>PT. Anilo Adikarya Sentosa</Text>
                <View style={styles.jurusan}>
                    <Text style={styles.jurusanText}>RPL</Text>
                </View>
                    <Text style={styles.cardAlamat}>
                        Jl. Cendrawasih Mas V Blok A5 No.1 Tanjung Barat, Jagakarsa, Jakarta Selatan, 12530. kabsdk a jsbd as aubsd aiusbd ausbd ib
                    </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        width:'95%',
        height: 130,
        padding: 10,
        flexDirection: 'row',
        alignSelf:'center',
        backgroundColor:"white",
        position:'relative',
        borderRadius: 6,
        marginTop:20,
        marginLeft:10,
        marginRight:10,
        elevation: 6,
        shadowOffset: {width:10 ,height:20},
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowRadius: 1,
    },
    icon:{
        
    },
    text:{
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 60,
        marginTop:-5,
    },
    jurusan:{
        transform: [{ rotate:'-45deg'}],
        width:44,
        height:32,
        position:'absolute',
        padding:3,
        justifyContent:'center',
        alignItems:'center',
        left:-2
    },
    jurusanText:{
        position:'relative',
        color:'#43A047',
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:20,
    },
    cardAlamat:{
        width:'90%',
        height:'100%',
        fontFamily: 'Recoleta-Bold',
        marginTop: 35,
        left:-280,
        fontSize: 16,
        color: 'black',
    },
})

export default searchCard;
import 'react-native-gesture-handler';
import * as React from 'react';
import {DataTable} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert,Modal} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../components/headerKelompok';

    
const Kelompok = () =>{
    this.state = {
        tableHead: [' No.', 'Nama', 'Absen'],
      tableTitle: [' 1 ', ' 2 ', ' 3 ', ' 4 '],
      tableData: [
        ['Adam Roxann', '1'],
        ['Ahmad Ghani', '4'],
        ['Joesnadya Azzuhra', '12'],
        ['Taufiq AM', '33']
        ]
      }
    const state = this.state;
    return(
       <View style={{flex:1,backgroundColor:'#D9DFDF',height:'100%'}}>
           <View>
               <Header/>
               <View style={styles.box}>
                   <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.kelompok}>Kelompok Roxann</Text>
                    <TouchableOpacity  style={{right:-55}}>
                        <Icon name="more-vertical" size={25}/>
                    </TouchableOpacity>
                   </View>
                <View style={styles.jBox}>
                    <Text style={styles.textKiri}>Jurusan :</Text>
                    <View>
                        <Text style={{...styles.textKanan,marginLeft:50}}> RPL </Text>
                    </View>
                </View>
                <View style={styles.jBox}>
                    <Text style={styles.textKiri}>Jumlah  :</Text>
                    <View>
                        <Text style={styles.textKanan}> 4 Orang </Text>
                    </View>
                </View>
                <View style={styles.jBox}>
                    <Text style={styles.textKiri}>Kode      :</Text>
                    <View>
                        <Text style={styles.textKanan}>     PUBG </Text>
                    </View>
                </View>
                <Text style={{...styles.textKanan, alignSelf:'center', marginLeft:0,marginTop:60}}>Anggota</Text>
                <View style={styles.container}>
                    <Table borderStyle={{borderWidth: 1}}>
                    <Row data={state.tableHead} flexArr={[0.6, 3, 0.8]} style={styles.head} textStyle={{...styles.text, color:'white'}}/>
                    <TableWrapper style={styles.wrapper}>
                        <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
                        <Rows data={state.tableData} flexArr={[3, 0.8, 0.6]} style={styles.row} textStyle={styles.text}/>
                    </TableWrapper>
                    </Table>
                </View>
               </View>
           </View>
       </View> 
    )
}

const styles = StyleSheet.create({
    box:{
        width:337,
        height:495,
        borderRadius:15,
        backgroundColor:'white',
        marginLeft:10,
        marginRight:10,
        marginTop: 55,
        elevation: 6,
        shadowOffset: {width:10 ,height:20},
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowRadius: 1,
        paddingTop:10
    },
    kelompok:{
        fontFamily:'Recoleta-Regular',
        fontSize :25,
    },
    jBox:{
        flexDirection:"row",
        marginLeft:15,
        marginTop:15
    },
    textKiri:{
        fontFamily:'Recoleta-Regular',
        fontSize: 25,
    },
    textKanan:{
        fontFamily:'Recoleta-Bold',
        fontSize:25,
        marginLeft:25,
        textAlign:'center',
    },
    container: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 30
    },
    head: {   
        height: 40,  
        backgroundColor: '#69B25E'  
    },
    wrapper: { 
        flexDirection: 'row' 
    },
    title: { 
        flex: 0.71, 
        backgroundColor: 'white'
    },
    row: {  
        height: 28  
    },
    text: { 
      textAlign: 'center',
      fontFamily:'Recoleta-Regular',
      fontSize:17
    },
})

export default Kelompok;

import 'react-native-gesture-handler';
import * as React from 'react';
import {RadioButton, TextInput} from 'react-native-paper';
import {Form, Item, Label, Picker,Input} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/headerKelompok';
import PerusahaanScreen from "./perusahaanScreen";



const Kelompok = ({ route , navigation, props }) => {
    const [checked, setChecked] = React.useState('first');
    const [nama, setNama] = React.useState('');
    const [jumlah, setJumlah] = React.useState('');
    const [jurusan, setJurusan] = React.useState('');
    const [kode, setKode] = React.useState('');
    const [edit,setEdit] = React.useState(false);
    const [edit2,setEdit2] = React.useState(true);
    const [selected, setSelected] = React.useState('');

    return(
        <View style={{backgroundColor:'#D9DFDF', height:'100%'}}>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.menu} onPress={() => navigation.goBack()}>
                    <Icon
                        size= {30} 
                        color={'white'}
                        name={"chevron-back-outline"} />
                    <Text style={styles.textHeader}>Kelompok</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => {setChecked('first'), setEdit(false), setEdit2(true)}}/>
                <Text style={styles.text}>Buat kelompok baru</Text>
                <View style={styles.textInput}>
                    <Item floatingLabel inlineLabel={false} style={{borderBottomWidth:1,borderBottomColor:'#84C187'}}>
                        <Label>Nama Kelompok</Label>
                        <Input 
                            value={nama}
                            editable={edit2}
                            onChangeText={nama => setNama(nama)}
                        />
                    </Item>
                        <View style={{marginTop:10,borderBottomWidth:1,borderBottomColor:'#43A047'}}>
                            <Text style={{fontSize:15,opacity:0.5}}>Jumlah Orang</Text>
                            <Picker
                                mode="dropdown"
                                style={{borderColor:'black',borderWidth:1,borderRadius:12}}
                                selectedValue={jumlah}
                                onValueChange={jumlah => setJumlah(jumlah)}
                                enabled={edit2}
                            >
                                <Picker.Item label="2" value="2"/>
                                <Picker.Item label="3" value="3"/>
                                <Picker.Item label="4" value="4"/>
                                <Picker.Item label="5" value="5"/>
                            </Picker>
                        </View>
                        <View style={{marginTop:10,borderBottomWidth:1,borderBottomColor:'#43A047'}}>
                            <Text style={{fontSize:15,opacity:0.5}}>Jurusan</Text>
                            <Picker
                                mode="dropdown"
                                style={{borderColor:'black',borderWidth:1,borderRadius:12}}
                                selectedValue={jurusan}
                                onValueChange={jurusan => setJurusan(jurusan)}
                                enabled={edit2}
                            >
                                <Picker.Item label="RPL" value="RPL"/>
                                <Picker.Item label="AKL" value="AKL"/>
                                <Picker.Item label="OTP" value="OTP"/>
                                <Picker.Item label="TKJ" value="TKJ"/>
                            </Picker>
                        </View>
                </View>
                <View style={{
                    marginTop:15
                }}>
                    <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => {setChecked('second'), setEdit(true),setEdit2(false)}}/>
                    <Text style={styles.text2}>Gabung dengan kode</Text>
                    <View style={styles.textInput}>
                    <Item floatingLabel inlineLabel={false} style={{borderBottomWidth:1,borderBottomColor:'#84C187'}}>
                        <Label>Kode Kelompok</Label>
                        <Input 
                            value={kode}
                            editable={edit}
                            onChangeText={kode => setKode(kode)}
                        />
                    </Item>
                    </View>
                    <View style={styles.MainContainer}>
                        <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        activeOpacity = { .5 } 
                        onPress={ () => navigation.navigate("NewKelompok")}>
                            <Text style={styles.TextStyle}> Buat </Text>
                        </TouchableOpacity>
                </View>
                </View>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
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
    text:{
        fontFamily: 'Recoleta-Regular',
        fontSize:15,
        marginTop:-25,
        marginLeft:35
    },
    text2:{
        fontFamily: 'Recoleta-Regular',
        fontSize:15,
        marginTop:-25,
        marginLeft:35
    },
    textInput:{
        marginLeft:30,
        marginTop:10,
        width:280,
    },
    input:{
        backgroundColor:'white',
        fontFamily: 'Recoleta-Regular',
        fontSize:15,
        marginBottom:30
    },   
    SubmitButtonStyle: {
      width: 110,
      height: 43,
      marginTop:10,
      paddingTop:6,
      paddingBottom:6,
      marginHorizontal: 110,
      backgroundColor:'#42A047',
      borderRadius:12,
      borderWidth: 1,
      borderColor: "transparent"
    },
   
    TextStyle:{
        fontFamily: "Recoleta-Regular",
        fontSize: 24,
        color:'#fff',
        textAlign:'center',
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
      textHeader:{
        color: 'white',
        fontFamily:'Recoleta-Regular',
        fontSize: 30,
        marginLeft: 10,
        marginRight: 140,
      },
})

export default Kelompok;
import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

const Detail = (route,navigation,props) => {
    return(
        <View style={styles.main}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.menu}>
                    <View>
                        <Icon
                        size= {35} 
                        color={'white'}
                        name={"ios-chevron-back-outline"} 
                        />
                    </View>
                </TouchableOpacity>
                <Text style={styles.headerText}>Details</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.textpt}>PT. Anilo Adikarya Sentosa</Text>
                <Text style={styles.judul}>Deskripsi :</Text>
                <Text style={styles.text}>ANILO was established in 2012 for providing innovative IT solutions for companies who demand reliable smart technologies. ANILO innovates by combining old-fashioned and cutting-edge technologies, crafting products designed for massive impacts. In honor and honesty, ANILO solutions should be able to lower business costs or increase business revenue, or even both.</Text>
                <Text style={styles.judul}>Contact :</Text>
                <View style={{...styles.contact, marginTop:-5}}>
                    <Icon name="ios-call" size={25}/>
                    <Text style={styles.text}>021-22701274</Text>
                </View>
                <View style={styles.contact}> 
                    <Icon2 name="email" size={25}/>
                    <Text style={styles.text}>koko@karyaanilo.com</Text>
                </View>
                <View style={styles.contact}>
                    <Icon3 name="web" size={25}/>
                        <Text  onPress={() => Linking.openURL('http://karyaanilo.com')} style={{...styles.text, textDecorationLine:'underline', color:'#039BE5'}}>http://karyaanilo.com/</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#D9DFDF',
        height:'100%',
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
        flexDirection:'row',
      },
    menu:{
        marginLeft: 5,
        flexDirection: 'row',
        marginTop: 5,
      },
    headerText:{
        color: 'white',
        fontFamily:'Recoleta-Regular',
        fontSize: 31,
        textAlign:'center',
        marginTop:9,
        marginLeft: 100
      },
    container:{
        backgroundColor:'white',
        width:337,
        height:495,
        flexDirection:'column',
        justifyContent:'center',
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
        paddingLeft:13,
        paddingRight:12
    },
    textpt:{
        fontFamily:'Recoleta-Regular',
        fontSize:23,
        textAlign:'center',
        maxWidth:'100%',
        marginBottom:20,
        marginTop:-12
    },
    judul: {
        fontFamily:'Recoleta-Bold',
        fontSize:25,
        marginTop:8,
        marginBottom:10
    },
    contact:{
        flexDirection:'row',
        paddingLeft:10,
        marginTop:2,
        paddingTop:5
    },
    text:{
        fontFamily:'Recoleta-Regular',
        fontSize:20,
        paddingLeft:10
    }
});

export default Detail;
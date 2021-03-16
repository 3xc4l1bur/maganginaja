import * as React from 'react';
import {View,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import {Form, Textarea, Text,Button} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const Help = ({navigation}) => {
    return(
        <View style={{backgroundColor:'#D9DFDF', height:'100%'}}>
            <View>
                <View style={styles.header}>
                    <View View style={styles.menu}>
                    <Icon
                        size= {35} 
                        color={'white'}
                        name={"chevron-back-outline"} />
                    <Text style={styles.textHeader}>Help</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <Form>
                        <Text style={{...styles.text,marginLeft:15,fontSize:27}}>Keluhan : </Text>
                        <Textarea style={{
                            marginHorizontal:15,
                            borderRadius:15,
                            borderWidth:1,
                            elevation: 2,
                            shadowOffset: {width:-1 ,height:1},
                            shadowColor: 'black',
                            shadowOpacity: 5,
                            shadowRadius: 5,
                            marginTop:15,
                            fontFamily:'Recoleta-Regular'
                            }} rowSpan={6} bordered placeholder="Tulis disini"/>
                    </Form>
                    <Button rounded style={{backgroundColor:"#43A047",height:35,marginHorizontal:120, marginTop:20}}>
                        <Text uppercase={false} style={{...styles.text,color:'white'}}>  Kirim  </Text>
                    </Button>
                    <Text style={{...styles.text, marginTop:35,marginHorizontal:75}}>Atau hubungi CS di :</Text>
                    <View style={styles.contactBox}>
                        <Text style={{...styles.text,marginLeft:10,marginTop:5,fontSize:27}}>Contact</Text> 
                        <View style={{flexDirection:'row',marginTop:10,marginLeft:15}}>
                            <Icon name="call" size={30} color="black"/>
                            <Text style={{...styles.text,color:'black',marginLeft:8,marginTop:5,fontSize:26}}>+62 877-7415-1420</Text>
                        </View>
                        <View style={{flexDirection:'row',marginTop:10,marginLeft:15}}>
                            <Icon name="logo-whatsapp" size={30} color="black"/>
                            <Text style={{...styles.text,color:'black',marginLeft:8,marginTop:5,fontSize:26}}>085781046614</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        marginTop: 6
      },
      textHeader:{
        color: 'white',
        fontFamily:'Recoleta-Regular',
        fontSize: 30,
        marginLeft: 10,
        marginRight: 140,
        marginTop:2,
        left:90
      },
      box:{
        width:337,
        height:540,
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
        fontFamily:'Recoleta-Bold',
        fontSize:20,
        color:'#49A34C',
      },
      kolom:{
        width:280,
        height:120,
        borderRadius:15,
        marginLeft:15,
        marginTop:10,
        elevation: 3,            
        shadowOffset: {width:5 ,height:2},
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowRadius: 5,
      },
      contactBox:{
        flexDirection:'column',
        alignSelf:'center',
        backgroundColor:'white',
        width:'85%',
        height:150,
        borderRadius:15,
        elevation: 6,
        shadowOffset: {width:10 ,height:20},
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowRadius: 1,
        marginTop:15,
      }
    
})

export default Help;

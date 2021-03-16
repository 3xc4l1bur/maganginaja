import * as React from 'react';
import {View, Text, Button, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

import Card from '../components/notifikasiCard';
import Icon from 'react-native-vector-icons/Feather';

const NotifikasiScreen = ({ navigation }) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={{flex:1}}>
                <View style={styles.header}>
                    <View View style={styles.menu}>
                    <Icon
                        size= {30} 
                        color={'white'}
                        name={"menu"} />
                    <Text style={styles.text}>Notifikasi</Text>
                    </View>
                </View>
                <ScrollView>
                    <TouchableOpacity>
                        <Card/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Card/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Card/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Card/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Card/>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#D9DFDF'
    },
    header:{
        position: 'relative',
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
        marginBottom:0
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

export default NotifikasiScreen;
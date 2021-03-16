import React, {Component} from "react";
import {ActivityIndicator,View, Text, ScrollView, StyleSheet, TouchableOpacity,TouchableHighlight, SafeAreaView, Alert} from 'react-native';
import {Button} from 'native-base';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Feather'
import _ from 'lodash';
import { FlatList } from "react-native-gesture-handler";

export default class PerusahaanScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[],
            fullData:[],
            loading:false,
            error:null,
            rplValue: styles.jurusanSelected,
            aklValue: styles.jurusanNotSelected,
            otpValue: styles.jurusanNotSelected,
            tkjValue: styles.jurusanNotSelected,
        }
    }

    componentDidMount(){
        this.requestApiPhotos()
    }
  
    requestApiPhotos = _.debounce(() => {
        this.setState({loading:true})
        const apiURL = "https://raw.githubusercontent.com/3xc4l1bur/example_json/main/data.json"
        fetch(apiURL)
        .then((res) => res.json())
        .then((resJson) => {
          this.setState({
            loading:false,
            data:resJson,
            fullData:resJson,
            query:""
          })
        }).catch(error => {
          this.setState({error, loading:false})
        })
    },250)

    renderFooter = () => {
        if(!this.state.loading) return null
          return(
            <View style={{paddingVertical:20,borderTopWidth:1,borderColor:"#CED0CE"}}>
              <ActivityIndicator animating size="large" />
            </View>
          )
    }

    _renderItem = ({item, index}) => {
        return(
        <View style={{justifyContent: 'center', alignContent:'center'}}>
            <View style={styles.card}>
                <View style={styles.logo}>
                    <Icon2 name="building" color='black' size={30}/>
                </View>
                <Text style={styles.textCard}>{item.nama}</Text>
            </View>
            <View style={styles.cardDetails}>
                <View style={styles.jurusan}>
                    <Text style={styles.jurusanText}>{item.jurusan}</Text>
                </View>
                <Text numberOfLines={3} style={styles.cardAlamat}>
                    {item.url}
                </Text>
                <View style={styles.viewMoreBox}>
                    <Text style={styles.viewMore}>View more</Text>
                </View>
            </View>
        </View>
        )
    }

    onPressRpl = () => {
        this.setState({
            rplValue: styles.jurusanSelected,
            aklValue: styles.jurusanNotSelected,
            otpValue: styles.jurusanNotSelected,
            tkjValue: styles.jurusanNotSelected,
        })
    }
    
    onPressAkl = () => {
        this.setState({
            aklValue: styles.jurusanSelected,
            rplValue: styles.jurusanNotSelected,
            otpValue: styles.jurusanNotSelected,
            tkjValue: styles.jurusanNotSelected,
        })
    }

    onPressTkj = () => {
        this.setState({
            tkjValue: styles.jurusanSelected,
            aklValue: styles.jurusanNotSelected,
            otpValue: styles.jurusanNotSelected,
            rplValue: styles.jurusanNotSelected,
        })
    }

    onPressOtp = () => {
        this.setState({
            otpValue: styles.jurusanSelected,
            aklValue: styles.jurusanNotSelected,
            rplValue: styles.jurusanNotSelected,
            tkjValue: styles.jurusanNotSelected,
        })
    }

    render(navigation,props) {
        return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity style={{flex:0.25,marginTop:7}} onPress={() => this.props.navigation.openDrawer()}>
                <Icon
                    size= {30} 
                    color={'white'}
                    name={"menu"} />
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1.5,marginTop:7,marginLeft:2}}>
                    <Text style={styles.text}>Perusahaan</Text>
                </TouchableOpacity>
                <Button transparent onPress={() => this.props.navigation.navigate('Search')}>
                    <Icon name='search' size={25} color='white'/>
                </Button>
            </View>
            <View style={styles.underHeader}>
                    <TouchableOpacity style={styles.touch} onPress={this.onPressRpl}>
                        <View style={this.state.rplValue}>
                            <Text style={styles.jurusanText}>RPL</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={this.onPressAkl} >
                        <View style={this.state.aklValue}>
                            <Text style={styles.jurusanText}>AKL</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={this.onPressOtp} >
                        <View style={this.state.otpValue}>
                            <Text style={styles.jurusanText}>OTP</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={this.onPressTkj} >
                        <View style={this.state.tkjValue}>
                            <Text style={styles.jurusanText}>TKJ</Text>
                        </View>
                    </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                <FlatList
                    data = {this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={(item,index) => index.toString()}
                    ListFooterComponent={this.renderFooter}
                />
            </TouchableOpacity>
        </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#D9DFDF'
    },
    header:{
        width: '100%',
        height: 50,
        backgroundColor: '#43A047',
        flexDirection:'row',
        padding:5,
        marginTop: -10,
        borderRadius: 12,
        elevation: 6,
        shadowOffset: {width:10 ,height:20},
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowRadius: 1,
    },
    underHeader:{
        width:'100%',
        height: 53,
        backgroundColor: '#337836',
        marginTop:-12,
        padding:3,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    menu:{
        marginLeft: 5,
        flexDirection: 'row',
        marginRight: 10,
        marginTop: 5,
        height:'100%',
    },
    text:{
        color: 'white',
        fontFamily:'Recoleta-Regular',
        fontSize: 30,
    },
    jurusanSelected:{
        paddingHorizontal:17,
        paddingVertical:2,
        marginTop: 5,
        marginHorizontal: 10,
        height: 25,
        width: 62,
        borderRadius: 15,
        backgroundColor: '#43A047',
        justifyContent:'center',
        alignContent:'center'
    },
    jurusanNotSelected:{
        paddingHorizontal:17,
        paddingVertical:2,
        marginTop: 5,
        marginHorizontal: 10,
        height: 25,
        width: 62,
        justifyContent:'center',
        alignContent:'center'
    },
    jurusanText:{
        color: 'white',
        fontSize: 16,
        fontFamily: 'roboto',
        alignSelf: 'center',
    },
    touch:{
        marginTop:10
    },
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
    textCard:{
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

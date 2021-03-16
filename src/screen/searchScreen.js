import React, {Component} from "react";
import {View,FlatList,ActivityIndicator} from 'react-native';
import { Header, Item, Input, Icon, Button, Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import _ from 'lodash';
export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[],
            fullData:[],
            loading:false,
            error:null
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
        <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{ uri: item.thumbnailUrl }} />
        </Left>
        <Body>
          <Text>{item.nama}</Text>
          <Text note numberOfLines={1}>{item.url}</Text>
        </Body>
        <Right>
          <Button transparent>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
      )
    }

    handleSearch = (text) =>{
      const formattedQuery = text.toLowerCase()
      const data = _.filter(this.state.fullData, photo =>{
        if(photo.nama.toLowerCase().includes(formattedQuery)){
          return true
        }
        return false
      })
      this.setState({data, query: text})
    }
    render() {
      return (
        <Container>
          <Header searchBar rounded style={{backgroundColor:"#43A047"}}>
            <Item rounded underline={false}>
              <Icon name="ios-search" />
              <Input placeholder="Search" style={{marginRight:10}} onChangeText={this.handleSearch}/>
            </Item>
          </Header>
          <List>
              <FlatList
                data = {this.state.data}
                renderItem={this._renderItem}
                keyExtractor={(item,index) => index.toString()}
                ListFooterComponent={this.renderFooter}
              />
          </List>
        </Container>
      );
    }
  }
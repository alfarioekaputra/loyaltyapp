import React, {Component} from 'react';
import {Image, Platform} from 'react-native';
import { Text, Container, Content, View, Left, Right, Body, Header, Button, Card, CardItem, Thumbnail } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class PromotionScreen extends Component {
    static navigationOptions = {
        title: 'Promotion',
        drawerLabel: 'Promotion',
        tabBarIcon: ({tintColor}) => (
            <MaterialIcons
              name="shopping-basket"
              size={26}
              style={{color:tintColor}}
              />
        )
      };
      render() {
          const {navigation} = this.props;
          return (
              <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
                  <Header>
                      <Left>
                          <Button
                              transparent
                              onPress={() => navigation.navigate('DrawerOpen')}>
                              <MaterialIcons name="reorder" size={26}/>
                          </Button>
                      </Left>
                      <Body>
                          <Text>Promotion</Text>
                      </Body>
                      <Right/>
                  </Header>
                  <Content padder>
                    <Card style={{marginBottom: 15}}>
                            <CardItem>
                                <Left style={{marginRight: -100}}>
                                    <Thumbnail square source={require('../../assets/images/tokopedia.jpg')} />
                                </Left>
                                <Body>
                                    <Text style={{marginBottom: 15}}>Promo bebas ongkir</Text>
                                    <Button full success rounded small><Text>Get Promo</Text></Button>
                                    
                                </Body>
                            </CardItem>
                            <CardItem style={{ paddingVertical: 0 }}>
                                <Left>
                                <Text>Date of expiry <Text style={{color: 'red'}}>06-10-2017</Text></Text>   
                                </Left>
                            </CardItem>
                    </Card>
                    <Card style={{marginBottom: 15}}>
                            <CardItem>
                                <Left style={{marginRight: -100}}>
                                    <Thumbnail square source={require('../../assets/images/bukalapak.jpg')} />
                                </Left>
                                <Body>
                                    <Text style={{marginBottom: 15}}>Barang pilihanmu dapat diskon 20%</Text>
                                    <Button full success rounded small><Text>Get Promo</Text></Button>
                                    
                                </Body>
                            </CardItem>
                            <CardItem style={{ paddingVertical: 0 }}>
                                <Left>
                                <Text>Date of expiry <Text style={{color: 'red'}}>20-10-2017</Text></Text>   
                                </Left>
                            </CardItem>
                    </Card>
                    <Card style={{marginBottom: 15}}>
                            <CardItem>
                                <Left style={{marginRight: -100}}>
                                    <Thumbnail square source={require('../../assets/images/bliblicom.png')} />
                                </Left>
                                <Body>
                                    <Text style={{marginBottom: 15}}>Promo belanja hari ini dapatkan diskon 40%</Text>
                                    <Button full success rounded small><Text>Get Promo</Text></Button>
                                    
                                </Body>
                            </CardItem>
                            <CardItem style={{ paddingVertical: 0 }}>
                                <Left>
                                <Text>Date of expiry <Text style={{color: 'red'}}>25-10-2017</Text></Text>   
                                </Left>
                            </CardItem>
                    </Card>
                        
                  </Content>
              </Container>
          )
      }
}

export default PromotionScreen;
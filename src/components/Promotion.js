import React, {Component} from 'react';
import {Image} from 'react-native';
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
              <Container>
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
                        <CardItem bordered>
                            <Left>
                                <Thumbnail square source={require('../../assets/images/tokopedia.jpg')} />
                                <Body>
                                    
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                
                            </Body>
                        </CardItem>
                        <CardItem style={{ paddingVertical: 0 }}>
                            <Left>
                                <MaterialIcons name="account-circle" />
                                
                            </Left>
                        </CardItem>
                    </Card>
                  </Content>
              </Container>
          )
      }
}

export default PromotionScreen;
import React, {Component} from 'react';
import {Image, Platform} from 'react-native';
import { Text, Container, Content, View, Left, Right, Body, Header, Button } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';

class CatalogueScreen extends Component {
    static navigationOptions = {
        title: 'Catalogue',
        drawerLabel: 'Catalogue',
        drawerIcon: ({ tintColor }) => (
          <FontAwesome
            name="tag"
            size={26}
            style={{ color: tintColor }}
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
                          <Text>Catalogue</Text>
                      </Body>
                      <Right/>
                  </Header>
                  <Content>
                      <View>
                          <Image source={require('../../assets/images/logo.jpg')}  style={{width: null, height: 130}}/>
                      </View>
                  </Content>
              </Container>
          )
      }
}

export default CatalogueScreen;
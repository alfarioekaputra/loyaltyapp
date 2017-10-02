import React, {Component} from 'react';
import {Image} from 'react-native';
import { Text, Container, Content, View, Left, Right, Body, Header, Button } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons
            name="home"
            size={24}
            style={{ color: tintColor }}
          />
        ),
        tabBarIcon: ({tintColor}) => (
            <MaterialIcons
              name="home"
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
                          <Text>Home</Text>
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

export default HomeScreen;
import React, {Component} from 'react';
import {Image, Platform} from 'react-native';
import { Text, Container, Content, Switch, View, Left, Right, Body, Header, Button, List, ListItem, Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';

class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
        tabBarIcon: ({tintColor}) => (
            <MaterialIcons
              name="settings"
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
                          <Text>Settings</Text>
                      </Body>
                      <Right/>
                  </Header>
                  <Content>
                    <List>
                        <ListItem icon>
                            <Left>
                                <MaterialIcons name="gps-fixed" size={26} />
                            </Left>
                            <Body>
                                <Text>Enable/Disable Geo fencing</Text>
                            </Body>
                            <Right>
                                <Switch value={false} />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <FontAwesome name="bell" size={26} style={{color: 'red'}} />
                            </Left>
                            <Body>
                                <Text>Enable/Disable Push Notification</Text>
                            </Body>
                            <Right>
                                <Switch value={false} />
                            </Right>
                        </ListItem>
                    </List>
                  </Content>
              </Container>
          )
      }
}

export default SettingsScreen;
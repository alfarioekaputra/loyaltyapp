import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, Image } from 'react-native';
import { Container, Content, View, Left, Right, Body, Header, Button } from 'native-base';
import { DrawerNavigator, TabNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//import component
import HomeScreen from './components/Home';
import NewsEventScreen from './components/NewsEvent';
import PromotionScreen from './components/Promotion';

const MyNavScreen = ({ navigation, banner, header }) => (
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
                <Text>{header}</Text>
            </Body>
            <Right/>
        </Header>
        <Content>
            <View>
                <Text>{banner}</Text>
                <Button
                onPress={() => navigation.navigate('DrawerOpen')}
                title="Open drawer"
                />
                <Button onPress={() => navigation.goBack(null)} title="Go back" />
            </View>
        </Content>
    </Container>
  
);

const InboxScreen = ({ navigation }) => (
  <MyNavScreen banner={'Inbox Screen'} header={'Inbox'} navigation={navigation} />
);
InboxScreen.navigationOptions = {
  drawerLabel: 'Inbox',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="move-to-inbox"
      size={24}
      style={{ color: tintColor }}
    />
  ),
};

class SettingsScreen extends React.Component {
    static navigationOptions = {
      title: 'Setting',
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
        return <MyNavScreen banner={'Settings Screen'} header={'Settings'} navigation={navigation} />
    }
}

const DraftsScreen = ({ navigation }) => (
  <MyNavScreen banner={'Drafts Screen'} header={'Draft'} navigation={navigation} />
);
DraftsScreen.navigationOptions = {
  drawerLabel: 'Drafts',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
  ),
};

const TabsScreen = TabNavigator({
    Home: {
      screen: HomeScreen
    },
    NewsEvent: {
        screen: NewsEventScreen
    },
    PromotionEvent: {
        screen: PromotionScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  });
  
  TabsScreen.navigationOptions = {
    title: 'Stacks Screen'
  };
  

const DrawerExample = DrawerNavigator(
  {
    Home: {
      path: '/',
      screen: TabsScreen,
    },
    Chats: {
      path: '/sent',
      screen: DraftsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default DrawerExample;
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, Image } from 'react-native';
import { Container, Content, View, Left, Right, Body, Header, Button } from 'native-base';
import { DrawerNavigator, TabNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//import component
import HomeScreen from './components/Home';
import NewsEventScreen from './components/NewsEvent';
import PromotionScreen from './components/Promotion';
import SettingsScreen from './components/Settings';
import CatalogueScreen from './components/Catalogue';

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
  }, {
    headerMode: 'none',
    tabBarPosition: 'bottom',
    shoIcon : true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: 'red',  // Color of tab when pressed
      inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
      showIcon: 'true', // Shows an icon for both iOS and Android
      showLabel: (Platform.OS !== 'android'), //No label for Android
      labelStyle: {
        fontSize: 11,
      },
      style: {
        backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
        height: (Platform.OS === 'ios') ? 48 : 50 // I didn't use this in my app, so the numbers may be off. 
      }
    },
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
    Catalogue: {
      screen: CatalogueScreen,
    },
    BrandInfo: {
      path: '/sent',
      screen: DraftsScreen,
    },
    GitfCard: {
      path: '/sent',
      screen: DraftsScreen,
    },
    MembershipCard: {
      path: '/sent',
      screen: DraftsScreen,
    },
    BrandInformation: {
      path: '/sent',
      screen: DraftsScreen,
    },
    Inbox: {
      path: '/sent',
      screen: DraftsScreen,
    },
    NearestShop: {
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
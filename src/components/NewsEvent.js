import React, {Component} from 'react';
import {Image, ActivityIndicator, FlatList, Dimensions, Platform} from 'react-native';
import { Text, Container, Content, View, Left, Right, Body, Header, Button, Card, CardItem, Thumbnail} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

const deviceWidth = Dimensions.get("window").width;

class NewsEventScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            articles: [],
            isLoading: true
        }
    }

    static navigationOptions = {
        title: 'News & Event',
        tabBarIcon: ({tintColor}) => (
            <MaterialIcons
              name="event"
              size={26}
              style={{color:tintColor}}
              />
        )
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        let res = await fetch(`https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=be060bcb81814c4d89d8db3c67142271`);
        let news = await res.json();
        let articles = await news.articles;
        //console.log('news', news.articles.author);

        this.setState({ 
            articles,
            isLoading: false
        });
    }

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
                          <Text>News Event</Text>
                      </Body>
                      <Right/>
                  </Header>
                  <Content padder>
                        {
                            this.state.isLoading ? 
                                <ActivityIndicator size="large" color="#4c4c4c" style={{ marginTop: 55 }}/>
                            :
                            <Text/>
                        }
                        <FlatList
                            data={this.state.articles}
                            renderItem={({ item }) => {
                                let urlImage = item.urlToImage;

                                if(!urlImage){
                                    urlImage = 'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'
                                }
                                return (
                                    <Card style={{marginBottom: 15}}>
                                        <CardItem bordered>
                                            <Left>
                                                <Thumbnail source={require('../../assets/images/news.png')} />
                                                <Body>
                                                    <Text>{item.title}</Text>
                                                    <Text note>{moment(item.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}</Text>
                                                </Body>
                                            </Left>
                                        </CardItem>
                                        <CardItem>
                                            <Body>
                                                <Image 
                                                    source={{uri: urlImage}} 
                                                    style={{
                                                        alignSelf: "center",
                                                        height: 150,
                                                        resizeMode: "cover",
                                                        width: deviceWidth / 1.18,
                                                        marginVertical: 5
                                                    }}
                                                />
                                                <Text>
                                                    {item.description}
                                                </Text>
                                            </Body>
                                        </CardItem>
                                        <CardItem style={{ paddingVertical: 0 }}>
                                            <Left>
                                                <MaterialIcons name="account-circle" />
                                                <Text note>{item.author}</Text>
                                            </Left>
                                        </CardItem>
                                    </Card>
                                )
                            }}
                            
                        />
                  </Content>
              </Container>
          )
      }
}

export default NewsEventScreen;
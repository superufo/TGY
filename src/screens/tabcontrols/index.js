import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Text,
  Body,
  Left,
  Right,
  Item,
  Input,
  Icon
} from "native-base";
import styles from "./styles";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      searchVal:""
    };
  }

  render() {
    return (
        <Container style={styles.container}>

        <Header searchBar rounded>
          <Item>
            <Icon active name="search" />
            <Input placeholder="Search" onChangeSearch={(searchVal) => this.setState({searchVal})}  value={this.state.searchVal}/>
            <Icon active name="people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content padder>
          <Button
            block
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
            <Text>Back</Text>
          </Button>
        </Content>

         <Footer>
              <FooterTab>
                <Button active={true} onPress={() => this.props.navigation.navigate("Index")}>
                  <Icon active={true} name="home" ref='home' />
                  <Text>首页</Text>
                </Button>
                <Button  onPress={() => this.props.navigation.navigate("Discovery")}>
                  <Icon  name="compass" />
                  <Text>发现</Text>
                </Button>
                <Button  onPress={() => this.props.navigation.navigate("Message")}>
                  <Icon  name="chatboxes" />
                  <Text>消息</Text>
                </Button>
                <Button  onPress={() => this.props.navigation.navigate("Profile")}>
                  <Icon  name="contact" />
                  <Text>我的</Text>
                </Button>
              </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Index;

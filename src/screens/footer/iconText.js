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

class IconText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    };
  }

  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
  }

  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });
  }

  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    });
  }

  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true
    });
  }

  render() {
    return (
        <Container style={styles.container}>

        <Header searchBar rounded>
          <Item>
            <Icon active name="search" />
            <Input placeholder="Search" />
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
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Icon active={this.state.tab1} name="home" ref='home' />
              <Text>首页</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} name="compass" />
              <Text>发现</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Icon active={this.state.tab3} name="chatboxes" />
              <Text>消息</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
              <Icon active={this.state.tab4} name="contact" />
              <Text>我的</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default IconText;

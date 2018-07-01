import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text,H2 } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

class Home extends Component {
   state = {
            timeout: 50,
   }

   componentDidMount() {
         setInterval(() => {
             console.log();
             var to = --this.state.timeout;
             if( to===0 ){
                this.props.navigation.navigate("Index");
             }else{
                 this.setState({
                     timeout: to
                 });
             }
         }, 1000);
   }

   render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 50,
              backgroundColor: "transparent"
            }}
          >
            <H3 style={styles.text}>App to showcase</H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>NativeBase components</H3>
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button
              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("Index")}
            >
              <Text>Let's Go</Text>
            </Button>

          </View>

           <View
             style={{
                        alignItems: "center",
                        marginBottom: 50,
                        backgroundColor: "transparent"
                      }}
            >
             <H2 style={styles.text}>{this.state.timeout}</H2>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { StyleProvider } from "native-base";

import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

import { Provider } from 'react-redux';
import configureStore from "../configureStore";

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
          <Provider store={this.state.store}>
                    <App />
          </Provider>
      </StyleProvider>
    );
  }
}

import React , { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import FooterTabsIconTextExample from './App.js';
import { Field, reduxForm } from 'redux-form';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';

import allReducers from './app/reducers/index.js';
//import SimpleForm from './src/components/SimpleForm.js';

const store = createStore(allReducers);

export default class Root extends Component {
  render(){
      return(
          <Provider store= {store}>
                <FooterTabsIconTextExample />
          </Provider>
    )
 }
}




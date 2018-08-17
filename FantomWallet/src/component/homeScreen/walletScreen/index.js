import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import style from './style';

import WalletNavigationTab from '../../../general/navigationTab/walletNavigationTab/';

/**
 * To Display WalletTab related tasks
 */
export default class WalletScreen extends Component {

  // handleGoBack = () => {
  //   console.log('sdjfghaskdfagsj', this.props.navigation);

  //   this.props.navigation.goBack();
  // }


  render() {
    return (
      <View style={style.walletViewStyle} >
        {/* <View style={style.arrowNavigationStyle}>
          <TouchableOpacity onPress={this.handleGoBack}>
            <MaterialIcon name="arrow-back" size={25} />
          </TouchableOpacity>
        </View> */}
        <View style={style.walletScreenStyle}>
          <WalletNavigationTab />
        </View>

      </View>
    );
  }
}
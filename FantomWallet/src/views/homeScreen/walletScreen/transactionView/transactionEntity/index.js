import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
import { SUCCESS, SENT, RECEIVED, FAILED } from '../../../../../common/constants/';

/**
 * TransacationEntity: This component is meant for rendering transaction cards. 
 */
class TransacationEntity extends Component {
    render() {
        const { transaction, publicKey } = this.props;
        return (

            <View style={style.transactionCardStyle}>
                <View style={style.rowOneStyle}>
                    <Text style={style.transactionTypeStyle}> {transaction.type} {(transaction.type === SENT ? ' To' : ' From')} </Text>
                    <View style={style.rowOneViewStyle}>
                        <Text style={style.rowOneTextStyle}> {(transaction.type === SENT ? '-' : '+')} {transaction.amount}</Text>
                        <Text style={style.unitStyle}> {transaction.amountUnit} </Text>
                    </View>
                </View>
                <View style={style.rowTwoStyle}>
                    <Text numberOfLines={1} style={style.transactionIdStyle}> {transaction.transactionId}</Text>
                    <View style={style.rowTwoViewStyle}>
                        <Text style={(transaction.transactionStatus === SUCCESS) ? style.successTextStyle : style.failureTextStyle}> {transaction.transactionStatus} </Text>
                    </View>
                </View>
            </View>
        )
    }
}

TransacationEntity.propTypes = {
    publicKey: PropTypes.string,
    transaction: PropTypes.object,
}

export default TransacationEntity;
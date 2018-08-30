import React, { Component } from 'react';
import { View } from 'react-native';

/*** Color Constants */
import { ACTIVE_SUB_TAB_COLOR, WHITE_COLOR, } from '../../../../common/constants/';

import style from './style';
import DepositNavigationTab from '../depositNavigationTab/index';
import DepositViewInfo from '../depositViewInfo/';

class DepositNavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0,
            tabRenderInfo: 'Point',
            tabIconList: [
                { tabRenderInfo: 'Point' },
                { tabRenderInfo: 'Fantom' },
                // { tabRenderInfo: 'Ethererum' }, /* To render Ethererum tab uncomment 'Ethererum' object  */
            ]
        }
    }

    handleSelectedTab = (index, tabRenderInfo) => {
        this.setState({
            activeTabIndex: index,
            tabRenderInfo: tabRenderInfo,
        })
    }
    renderTabNavigation() {
        const { tabIconList, activeTabIndex } = this.state;
        return (
            <>
                {
                    tabIconList.length > 0 && tabIconList.map((tabIfo, index) => (
                        <DepositNavigationTab
                            key={index}
                            activeTabIndex={activeTabIndex}
                            index={index}
                            activeTabColor={ACTIVE_SUB_TAB_COLOR}
                            inActiveTabColor={WHITE_COLOR}
                            tabIfo={tabIfo}
                            handleSelectedTab={this.handleSelectedTab.bind(this)} />
                    ))
                }
            </>
        )
    }
    render() {
        
        const navigation = this.props.navigation;

        return (
            <View style={style.mainContainerStyle}>
               {/* <View style={style.navigationTabStyle}>
                    {this.renderTabNavigation()}
                </View> */}
                <View style={style.tabInfoStyle}>
                    <DepositViewInfo navigation={navigation} selectedTab={this.state.tabRenderInfo} />
                </View>
            </View>
        )
    }
}

export default DepositNavigationBar;


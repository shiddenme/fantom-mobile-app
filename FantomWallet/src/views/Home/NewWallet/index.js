import React, { Component } from "react";
import {
  View,
  WebView,
  StatusBar,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { SafeAreaView } from "react-navigation";
import styles from "./styles";
import Button from "../../../components/general/Button";
import { Colors } from "../../../theme";
import Icon from "react-native-vector-icons/FontAwesome";
import CardImage from "../../../images/Binance_logo.png";
import GridIcon from "../../../images/card-01.png";
import CardView from "./components/cardView";
import ListView from "./components/listView";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import Carousel from "react-native-snap-carousel";
export default class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListView: false,
      activeSlide: 0,
      isEnableSnap:true
    };
    this.carousel = React.createRef();
  }

  renderHeader = (showCard) => {
    const { isListView } = this.state;
    return (
      <View >
        <View style={styles.headerContainer}>
          <View style={styles.headerItems}>
            <Text style={styles.headerText}>$0</Text>
            <Icon
              style={styles.iconStyle}
              name={"eye"}
              size={18}
              color={Colors.grey}
            />
          </View>
          <Text style={styles.subHeading}>Total balance</Text>
        </View>
        <View style={styles.listHeader}>
          <Text style={styles.headerText}>Wallets</Text>
          {isListView ? (
            <TouchableOpacity
              //style={styles.iconStyle}
              style={{
                top: 6,
                justifyContent: "center",
                alignSelf: "center"
              }}
              onPress={() => this.setState({ isListView: !isListView })}
            >
              <Image
                // style={styles.iconStyle}
                height={16}
                width={16}
                source={GridIcon}
              ></Image>
            </TouchableOpacity>
          ) : (
            <Icon
              onPress={() => this.setState({ isListView: !isListView })}
              style={styles.iconStyle}
              name={isListView ? "list-ol" : "list-ul"}
              size={16}
              color={Colors.grey}
            />
          )}
        </View>
      {showCard &&<CardView showCard={true} showList={false}/>}
      </View>
    );
  };

  render() {
    const { isListView, activeSlide, isEnableSnap } = this.state;
    return (
      <View style={styles.mainContainer}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />

          {/* <View style={styles.headerContainer}>
            <View style={styles.headerItems}>
              <Text style={styles.headerText}>$0</Text>
              <Icon
                style={styles.iconStyle}
                name={"eye"}
                size={18}
                color={Colors.grey}
              />
            </View>
            <Text style={styles.subHeading}>Total balance</Text>
          </View>
          <View style={styles.listHeader}>
            <Text style={styles.headerText}>Wallets</Text>
            {isListView ? (
              <TouchableOpacity
                //style={styles.iconStyle}
                style={{
                  top: 6,
                  justifyContent: "center",
                  alignSelf: "center"
                }}
                onPress={() => this.setState({ isListView: !isListView })}
              >
                <Image
                  // style={styles.iconStyle}
                  height={16}
                  width={16}
                  source={GridIcon}
                ></Image>
              </TouchableOpacity>
            ) : (
              <Icon
                onPress={() => this.setState({ isListView: !isListView })}
                style={styles.iconStyle}
                name={isListView ? "list-ol" : "list-ul"}
                size={16}
                color={Colors.grey}
              />
            )}
          </View> */}
          {isListView ? (
            <View>
              {this.renderHeader(false)}
            <FlatList
              style={styles.listContainer}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeperatorStyle} />
              )}
              data={[1, 2, 3, 4]}
              renderItem={({ item }) => {
                return (
                  <ScrollView
                    style={styles.listScrollView}
                    showsVerticalScrollIndicator={false}
                  >
                    <ListView />
                  </ScrollView>
                );
              }}
            />
            </View>
          ) : (
            <Carousel
              style={styles.listContainer}
              sliderWidth={Dimensions.get("window").width}
              ref={c => {
                this.carousel = c;
              }}
              contentContainerCustomStyle={{
                justifyContent: "center",
                //  backgroundColor: "red",
                padding: 50
                // height: 380
              }}
              activeSlideOffset={20}
              inactiveSlideScale={1}
              enableSnap={true}
              lockScrollWhileSnapping={true}
              useScrollView={true}
              activeSlideAlignment={"center"}
              pagingEnabled={true}
              swipeThreshold={150}
              onBeforeSnapToItem={index => {
                this.setState({ activeSlide: index });
              }}
              // layoutCardOffset={50}
              itemWidth={Dimensions.get("window").width}
              renderItem={({ item, index }) => {
                return (
                  <ParallaxScrollView
                    onChangeHeaderVisibility={isVisible => {
                      this.setState({ isEnableSnap: isVisible });
                    }}
                    backgroundColor="white"
                    showsVerticalScrollIndicator={false}
                    // contentBackgroundColor="pink"
                    stickyHeaderHeight={80}
                    parallaxHeaderHeight={400}
                    renderStickyHeader={() => (
                      <View style={{ height: 60 }}>
                        <ListView />
                      </View>
                    )}
                    renderForeground={() => this.renderHeader(true)}
                  >
                    <ScrollView
                      style={styles.listScrollView}
                      showsVerticalScrollIndicator={false}
                    >
                      <CardView
                        showCard={false}
                        showList={true}
                      />
                    </ScrollView>
                  </ParallaxScrollView>
                );
              }}
              data={[1, 2, 3, 4]}
            />
          )}
        </SafeAreaView>
      </View>
    );
  }
}

import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  FlatList
} from "react-native";
import styles from "./styles";
import { CrossIcon } from "../../../images";
import { NavigationService, routes } from "~/navigation/helpers";
import { setLanguage } from "../../../redux/language/actions";
import { connect } from "react-redux";
import { setMylanguage } from "../../../theme/messages";
import Entypo from "react-native-vector-icons/Entypo";

const LanguageSelect = props => {
  const { language } = props;
  const [selectedLanguage, setSelectedLanguage] = useState(
    language.selectedLanguage
  );
  const languageList = [
    {
      name: "Phone Language",
      value: ""
    },
    {
      name: "English",
      value: "en"
    },
    {
      name: "Chinese",
      value: "zh-Hans"
    },
    {
      name: "Korean",
      value: "ko"
    }
  ];

  const handleLanguageSelect = (item, index) => {
    const { setLanguage } = props;
    if (item) {
      setLanguage(item.value);
      setMylanguage(item.value);
      setSelectedLanguage(item.value);
      NavigationService.pop();
    }
  };
  return (
    <View style={styles.mainView}>
      <SafeAreaView style={styles.mainView}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.headingView}>
          <TouchableOpacity onPress={() => NavigationService.pop()}>
            <Image
              source={CrossIcon}
              style={styles.crossIcon}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
          <Text style={styles.headingText}>Choose Language</Text>
        </View>

        <FlatList
          data={languageList}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={styles.languageSelect}
                onPress={() => handleLanguageSelect(item, index)}
              >
                <Text style={styles.languageText}>{item.name}</Text>
                {selectedLanguage === item.value && (
                  <Entypo name="check" size={25} color="green" />
                )}
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = state => ({
  language: state.selectedLanguage
});

const mapDispatchToProps = {
  setLanguage: setLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelect);

import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

import styles from "./styles";

function ActivityIndicator({ visible = false }) {
  if (!visible) {
    return null;
  }
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../../assets/animations/loader.json")}
      />
    </View>
  );
}

export default ActivityIndicator;

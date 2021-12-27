import React from "react";
import { SafeAreaView } from "react-native";

import styles from "../Screen/styles";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

export default Screen;

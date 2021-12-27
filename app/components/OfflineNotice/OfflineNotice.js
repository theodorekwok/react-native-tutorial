import React from "react";
import { View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import AppText from "../AppText";
import Screen from "../Screen";
import styles from "./styles";

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <Screen>
        <View style={styles.container}>
          <AppText style={styles.text}>No Internet Connection</AppText>
        </View>
      </Screen>
    );
  }
  return null;
}

export default OfflineNotice;

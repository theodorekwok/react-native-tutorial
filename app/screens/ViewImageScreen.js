import React from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftTop}>
          <MaterialCommunityIcons name="close" color="white" size={30} />
        </View>
        <View style={styles.centerPlaceholder} />
        <View style={styles.rightTop}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="white"
            size={35}
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/chair.jpg")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  topContainer: {
    backgroundColor: colors.black,
    marginTop: StatusBar.currentHeight,
    width: "100%",
    height: "7%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  leftTop: {
    width: "15%",
    height: "100%",
    alignItems: "center",
  },
  centerPlaceholder: {
    backgroundColor: colors.black,
    width: "50%",
    height: "100%",
  },
  rightTop: {
    width: "15%",
    height: "100%",
    alignItems: "center",
  },
  imageContainer: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

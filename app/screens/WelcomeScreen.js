import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import AppButton from "../components/AppButton/AppButton";
import colors from "../config/colors";
import routes from "../navigation/routes";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      blurRadius={5}
      source={require("../assets/background.jpg")}
      style={styles.container}
    >
      <View style={styles.topContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.imageContainer}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.tagLine}>Sell What You Don't Need</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    padding: 10,
    width: "100%",
  },
  container: { flex: 1 },
  imageContainer: {
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    width: 80,
    height: 80,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  textContainer: {
    width: "100%",
    height: "50%",
    alignItems: "center",
  },
  topContainer: {
    top: 50,
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
  },
});

import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 50,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});

export default styles;

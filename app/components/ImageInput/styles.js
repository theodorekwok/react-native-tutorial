import { StyleSheet } from "react-native";

import defaultStyles from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    width: 90,
    height: 90,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default styles;

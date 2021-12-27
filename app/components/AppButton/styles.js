import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 25,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default styles;

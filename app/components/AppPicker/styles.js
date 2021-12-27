import { StyleSheet } from "react-native";

import defaultStyles from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    flex: 1,
    color: defaultStyles.colors.medium,
  },
  text: {
    flex: 1,
  },
});

export default styles;

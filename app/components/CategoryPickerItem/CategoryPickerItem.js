import React from "react";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

import AppText from "../AppText";
import Icon from "../Icon/Icon";
import styles from "./styles";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          backgroundColor={item.backgroundColor}
          iconName={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CategoryPickerItem;

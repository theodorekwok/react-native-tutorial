import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function Icon({
  iconName,
  iconColor = colors.white,
  backgroundColor,
  size = 25,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.5,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={iconName}
        size={size * 0.5}
        color={iconColor}
      />
    </View>
  );
}

export default Icon;

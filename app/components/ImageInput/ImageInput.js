import React, { useEffect } from "react";
import { Alert, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

import defaultStyles from "../../config/styles";
import Icon from "../Icon/Icon";
import styles from "./styles";

function ImageInput({ imageUri, onChangeImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this button", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        {
          text: "No",
          style: "default",
        },
      ]);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={handlePress}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <Icon
          iconName="camera"
          iconColor={defaultStyles.colors.medium}
          backgroundColor={defaultStyles.colors.light}
          size={70}
        />
      )}
    </TouchableWithoutFeedback>
  );
}

export default ImageInput;

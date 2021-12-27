import React, { useRef } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import ImageInput from "../ImageInput/ImageInput";

import styles from "./styles";

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        horizontal={true}
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                key={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

export default ImageInputList;

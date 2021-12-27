import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import CategoryPickerItem from "../components/CategoryPickerItem/CategoryPickerItem";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
  FormImagePicker,
} from "../components/forms";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Decription"),
  category: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .nullable(),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "red",
    icon: "apps",
  },
  {
    label: "Kitchen Item",
    value: 2,
    backgroundColor: "green",
    icon: "email",
  },
];

function ListingEditScreen(props) {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (value, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const request = await listingsApi.addListing(
      { ...value, location },
      (progress) => setProgress(progress)
    );

    if (!request.ok) {
      setUploadVisible(false);
      alert("Could not save the listing");
      resetForm();
      return;
    }
    resetForm();
  };
  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField
          name="title"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Title"
          maxLength={255}
        />
        <AppFormField
          name="price"
          keyboardType="numeric"
          placeholder="Price"
          maxLength={8}
          width="30%"
        />
        <AppFormPicker
          name="category"
          items={categories}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          name="description"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Description"
          numberOfLines={3}
          maxLength={255}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;

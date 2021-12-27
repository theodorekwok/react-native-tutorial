import React from "react";
import { View, Keyboard, Alert } from "react-native";
import * as Notifications from "expo-notifications";

import messagesApi from "../../api/messages";
import { AppForm, AppFormField, SubmitButton } from "../forms";

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();
    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message!");
    }

    resetForm();

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Awesome!",
        body: "Your message was sent to the seller",
      },
      trigger: null,
    });
  };

  return (
    <View>
      <AppForm initialValues={{ message: "" }} onSubmit={handleSubmit}>
        <AppFormField
          name="message"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Message..."
        />
        <SubmitButton title="Contact Seller" />
      </AppForm>
    </View>
  );
}

export default ContactSellerForm;

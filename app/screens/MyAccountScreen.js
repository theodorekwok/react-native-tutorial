import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import { ListItemSeparator, ListItem } from "../components/lists";
import Icon from "../components/Icon/Icon";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";

const accountDetails = {
  name: "Mosh",
  email: "mosh@gmail.com",
  image: require("../assets/mosh.jpg"),
};

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function MyAccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={accountDetails.image}
          onPress={() => console.log("Profile pressed")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  iconName={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                  size={50}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <Icon iconName="logout" backgroundColor="#ffe66d" size={50} />
        }
        onPress={() => logOut()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: "10%",
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default MyAccountScreen;

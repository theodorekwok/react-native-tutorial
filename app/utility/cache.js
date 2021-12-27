import { AsyncStorage } from "react-native";
import dayjs from "dayjs";

import logger from "./logger";

const prefix = "cache";
const expiryInMinutes = 5;

const store = (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    logger.log(new Error(error));
  }
};

const isExpired = (item) => {
  const now = dayjs(Date.now());
  const storedTime = dayjs(item.timestamp);
  const isExpired = now.diff(storedTime, "minutes") > expiryInMinutes;

  return isExpired;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    logger.log(new Error(error));
  }
};

export default {
  store,
};

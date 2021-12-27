import React from "react";

import AppText from "../../AppText";
import styles from "./styles";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

export default ErrorMessage;

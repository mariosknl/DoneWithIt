import React from "react";
import { Modal } from "react-native";
import { View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

import Text from "../components/Text";
import colors from "../config/colors";

function UploadScreen({ progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar color={colors.primary} progress={progress} width={200} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadScreen;

import { StyleSheet } from "react-native";
import { RootNavigation } from "./RootNavigation";
import React from "react";
import { SnackBarProvider } from "./Component/CustomSnackbar";

export default function App() {
  return (
    <SnackBarProvider>
      <RootNavigation />
    </SnackBarProvider>
  );
}

const styles = StyleSheet.create({
  Container: {},
});

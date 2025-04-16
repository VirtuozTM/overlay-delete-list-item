import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ImmersiveOverlay } from "@/components";

const RootLayout = () => {
  return (
    <>
      <ImmersiveOverlay>
        <Stack screenOptions={{ headerShown: false }} />
      </ImmersiveOverlay>
      <StatusBar style="light" backgroundColor="transparent" />
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});

import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { White } from "../Constant/Color";
import * as Haptics from "expo-haptics";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FooterIcon_1A, FooterIcon_1B, FooterIcon_2A, FooterIcon_2B, FooterIcon_3A, FooterIcon_3B, FooterIcon_4A, FooterIcon_4B, FooterIcon_5 } from "../Constant/Images";

export default function U_Footer() {
  const navigation = useNavigation<any>();
  const router = useRoute();

  // Haptics
  async function handleRouting(route: string) {
    await Haptics.selectionAsync();
    navigation.navigate(route);
  }
  return (
    <View style={styles.FooterContainer}>
      {/* Home Tab */}
      {router.name == "U_HomeScreen" ? (
        <>
          <View style={styles.Tab}>
            <TouchableOpacity
              style={styles.TabBlock}
              onPress={() => handleRouting("U_HomeScreen")}
            >
              <Image
                source={FooterIcon_1A}
                resizeMode="center"
                style={styles.Icon}
              ></Image>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.Tab}>
          <TouchableOpacity
            style={styles.TabBlock}
            onPress={() => handleRouting("U_HomeScreen")}
          >
            <Image
              source={FooterIcon_1B}
              resizeMode="center"
              style={styles.Icon}
            ></Image>
          </TouchableOpacity>
        </View>
      )}

      {/* Prayer Wall Tab */}
      {router.name == "U_PrayerBoardScreen" ? (
        <>
          <View style={styles.Tab}>
            <TouchableOpacity
              style={styles.TabBlock}
              onPress={() => handleRouting("U_PrayerBoardScreen")}
            >
              <Image
                source={FooterIcon_2A}
                resizeMode="center"
                style={styles.Icon}
              ></Image>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.Tab}>
          <TouchableOpacity
            style={styles.TabBlock}
            onPress={() => handleRouting("U_PrayerBoardScreen")}
          >
            <Image
              source={FooterIcon_2B}
              resizeMode="center"
              style={styles.Icon}
            ></Image>
          </TouchableOpacity>
        </View>
      )}

      {/* Timer Tab */}
      <View style={styles.Tab}>
        <TouchableOpacity
          style={styles.TabBlock}
          onPress={() => handleRouting("U_AlarmScreen")}
        >
          <Image
            source={FooterIcon_5}
            resizeMode="center"
            style={styles.MainIcon}
          ></Image>
        </TouchableOpacity>
      </View>

      {/* Upcoming Events Tab */}
      {router.name == "U_EventScreen" ? (
        <>
          <View style={styles.Tab}>
            <TouchableOpacity
              style={styles.TabBlock}
              onPress={() => handleRouting("U_EventScreen")}
            >
              <Image
                source={FooterIcon_3A}
                resizeMode="center"
                style={styles.Icon}
              ></Image>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.Tab}>
          <TouchableOpacity
            style={styles.TabBlock}
            onPress={() => handleRouting("U_EventScreen")}
          >
            <Image
              source={FooterIcon_3B}
              resizeMode="center"
              style={styles.Icon}
            ></Image>
          </TouchableOpacity>
        </View>
      )}

      {/* Store Tab */}
      {router.name == "U_StoreScreen" ? (
        <>
          <View style={styles.Tab}>
            <TouchableOpacity
              style={styles.TabBlock}
              onPress={() => handleRouting("U_StoreScreen")}
            >
              <Image
                source={FooterIcon_4A}
                resizeMode="center"
                style={styles.Icon}
              ></Image>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.Tab}>
          <TouchableOpacity
            style={styles.TabBlock}
            onPress={() => handleRouting("U_StoreScreen")}
          >
            <Image
              source={FooterIcon_4B}
              resizeMode="center"
              style={styles.Icon}
            ></Image>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  FooterContainer: {
    height: 80,
    backgroundColor: White,
    elevation: 15,
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  Tab: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  TabBlock: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  Icon: {
    height: 30,
    width: 30,
  },
  MainIcon: {
    height: 65,
    width: 65,
  },
});
 
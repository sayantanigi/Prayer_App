import { useNavigation } from "@react-navigation/native";
import { Video, ResizeMode } from "expo-av";
import React, { useState } from "react";
import { StyleSheet, Image, Pressable, View, Text } from "react-native";
import { White } from "../Constant/Color";
import { BlankImage } from "../Constant/Images";

export default function VideoContainer(this: any) {
  const navigation = useNavigation<any>();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View>
      <Video
        ref={video}
        style={styles.Video}
        source={require("../assets/Video/Video1.mp4")}
        resizeMode={ResizeMode.CONTAIN}
        useNativeControls
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />

      {/* Video Owner */}
      <Pressable style={styles.VideoOwner} onPress={() => navigation.navigate("U_VideoDetailsScreen")}>
        <View style={styles.VideoOwnerText}>
          <Image style={styles.VideoOwnerImg} source={BlankImage} resizeMode="center" />
          <Text style={styles.VideoOwnerHeading} numberOfLines={2}>Name and details of the video are displayed here</Text>
        </View>
        <Text style={styles.VideoOwnerView}>12K View</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Video: {
    width: "100%",
    height: 221,
  },
  VideoOwner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: White,
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 4,
  },
  VideoOwnerImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  VideoOwnerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  VideoOwnerHeading: {
    fontSize: 12,
    fontFamily: "Inter-Medium",
    width: 200,
    paddingLeft: 10,
  },
  VideoOwnerView: {
    fontSize: 12,
    fontFamily: "Inter-Medium",
  },
});

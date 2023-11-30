import React from "react";
import U_ScreenLayout from "../U_ScreenLayout";
import { View, StyleSheet, Text, Pressable, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BlankImage, BlankVideo } from "../../../../Constant/Images";

export default function U_VideoPlayerScreen() {
    const navigation = useNavigation<any>();
    const video = React.useRef(null);

    return (
        <U_ScreenLayout
            HeaderHidden
            BannerHidden
            ProductBuyHidden
            ProductCartHidden
            ProductCheckoutHidden
            title="Videos"
        >
            {/* All Videos */}
            <View style={styles.DataBlock}>
                {/* Single Video Tile Start */}
                {new Array(5).fill(0).map((item, Videoindex) => (
                    <View key={Videoindex} style={styles.VideoBlock}>
                        <Pressable style={styles.VideoData} onPress={() => navigation.navigate("U_VideoPlayerScreen")}>
                            <Image style={styles.VideoImg} source={BlankVideo} resizeMode="cover" />
                        </Pressable>
                        <Pressable style={styles.VideoOwner} onPress={() => navigation.navigate("U_VideoDetailsScreen")}>
                            <View style={styles.VideoOwnerText}>
                                <Image style={styles.VideoOwnerImg} source={BlankImage} resizeMode="center" />
                                <Text style={styles.VideoOwnerHeading} numberOfLines={2}>Name and details of the video are displayed here</Text>
                            </View>
                            <Text style={styles.VideoOwnerView}>12K View</Text>
                        </Pressable>
                    </View>
                ))}
                {/* Single Video Tile End */}
            </View>
        </U_ScreenLayout>
    );
}

const styles = StyleSheet.create({
    // Video
    DataBlock: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    VideoBlock: {
        width: Dimensions.get("window").width - 40,
        marginBottom: 20,
    },
    VideoData: {
        width: Dimensions.get("window").width - 40,
        borderRadius: 10,
        elevation: 3,
        height: 180,
        position: "relative",
    },
    VideoImg: {
        width: Dimensions.get("window").width - 40,
        height: 180,
        borderRadius: 10,
    },
    VideoOwner: {
        flexDirection: "row",
        marginTop: 10,
        alignItems: "center",
        justifyContent: "space-between",
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
})
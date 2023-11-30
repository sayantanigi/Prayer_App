import { useNavigation } from "@react-navigation/native";
import U_ScreenLayout from "../U_ScreenLayout";
import { View, StyleSheet, TextInput, Image, Text, Dimensions, Pressable } from "react-native";
import React from "react";
import { PrimaryColor, TextColor, White } from "../../../../Constant/Color";
import { Back_1, BlankImage, Icon_8 } from "../../../../Constant/Images";

export default function U_OrganizationListScreen() {
    const navigation = useNavigation<any>();

    return (
        <U_ScreenLayout
            HeaderHidden
            BannerHidden
            VideoHidden
            ProductBuyHidden
            ProductCartHidden
            ProductCheckoutHidden
            title="Organization List"
        >
            {/* Search Bar */}
            <View style={styles.SearchBarContainer}>
                <TextInput style={styles.SearchBarInput}
                    placeholder="Search"
                />
                <Image style={styles.SearchIcon} source={Icon_8} resizeMode="center" />
            </View>

            <View style={styles.Block}>
                {/* Single Block */}
                {new Array(4).fill(0).map((item, Joinindex) => (
                    <View key={Joinindex} style={styles.JorgBlock}>
                        <View style={styles.JorgImgBlock}>
                            <Image
                                style={styles.JorgImg}
                                source={BlankImage}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.JorgData}>
                            <Text style={styles.JorgHeading} numberOfLines={2}>Organization Name Displayed Here</Text>
                            <View style={styles.JorgCovers}>
                                <View style={styles.JorgCoverImgs}>
                                    <Image style={[styles.JorgCoverImg, styles.JorgImg1]} source={require("../../../../assets/Images/Images/Cover1.png")} resizeMode="cover" />
                                    <Image style={[styles.JorgCoverImg, styles.JorgImg2]} source={require("../../../../assets/Images/Images/Cover2.png")} resizeMode="cover" />
                                    <Image style={[styles.JorgCoverImg, styles.JorgImg3]} source={require("../../../../assets/Images/Images/Cover3.png")} resizeMode="cover" />
                                    <Image style={[styles.JorgCoverImg, styles.JorgImg4]} source={require("../../../../assets/Images/Images/Cover4.png")} resizeMode="cover" />
                                    <Image style={[styles.JorgCoverImg, styles.JorgImg5]} source={require("../../../../assets/Images/Images/Cover5.png")} resizeMode="cover" />
                                </View>
                                <Text style={styles.JorgCoverText}>+ 154 More</Text>
                            </View>
                        </View>
                        <Pressable style={styles.JorgBtn} onPress={() => navigation.navigate("U_OrganizationDetailsScreen")}>
                            <Text style={styles.JorgBtnText}>JOIN</Text>
                            <Image
                                style={styles.JorgBtnTextBack}
                                source={Back_1}
                                resizeMode="cover"
                            />
                        </Pressable>
                    </View>
                ))}
            </View>
        </U_ScreenLayout>
    );
}

const styles = StyleSheet.create({
    // Search Bar
    SearchBarContainer: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    SearchBarInput: {
        height: 55,
        width: "100%",
        elevation: 10,
        backgroundColor: White,
        borderRadius: 100,
        paddingLeft: 50,
    },
    SearchIcon: {
        width: 20,
        height: 20,
        position: "absolute",
        left: 40,
    },

    // Common
    Block: {
    },
    ViewAll: {
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        height: 25,
        elevation: 10,
        backgroundColor: White,
        borderRadius: 100
    },
    ViewAllText: {
        fontSize: 12,
        fontFamily: "Inter-SemiBold",
        color: PrimaryColor
    },

    // Join Organization
    JorgBlock: {
        width: Dimensions.get("window").width - 40,
        alignSelf: "center",
        marginBottom: 15,
        backgroundColor: White,
        elevation: 4,
        flexDirection: "row",
        borderRadius: 10,
    },
    JorgImgBlock: {
        width: "25%",
        padding: 10,
    },
    JorgImg: {
        width: "100%",
        height: 70,
        borderRadius: 5,
    },
    JorgData: {
        width: "50%",
        padding: 10,
        flexDirection: "column",
        paddingLeft: 0,
        justifyContent: "space-between",
    },
    JorgHeading: {
        fontFamily: "Inter-SemiBold",
        fontSize: 14,
        color: PrimaryColor,
        width: "80%",
    },
    JorgBtn: {
        width: "25%",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
    JorgBtnText: {
        fontFamily: "Inter-SemiBold",
        fontSize: 14,
        color: White,
        zIndex: 1,
    },
    JorgBtnTextBack: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        zIndex: 0,
    },
    JorgCovers: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 5,
    },
    JorgCoverImgs: {
        position: "relative",
    },
    JorgCoverImg: {
        width: 25,
        height: 25,
        borderRadius: 100,
    },
    JorgImg1: {
        zIndex: 1,
    },
    JorgImg2: {
        position: "absolute",
        left: 10,
        zIndex: 0,
    },
    JorgImg3: {
        position: "absolute",
        left: 20,
        zIndex: -1,
    },
    JorgImg4: {
        position: "absolute",
        left: 30,
        zIndex: -2,
    },
    JorgImg5: {
        position: "absolute",
        left: 40,
        zIndex: -3,
    },
    JorgCoverText: {
        fontFamily: "Inter-Regular",
        color: TextColor,
        fontSize: 12,
        paddingLeft: 50,
    },
})
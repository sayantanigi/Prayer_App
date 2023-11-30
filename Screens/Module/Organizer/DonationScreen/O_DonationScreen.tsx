import { useNavigation } from "@react-navigation/native";
import O_ScreenLayout from "../O_ScreenLayout";
import React from "react";
import { View, StyleSheet, Text, TextInput, Image, Pressable, Dimensions, ScrollView } from "react-native";
import { Black, PrimaryColor, TextColor, White } from "../../../../Constant/Color";
import { Back_1, BlankImage, Icon_50, Icon_8 } from "../../../../Constant/Images";

export default function O_DonationScreen() {
    const navigation = useNavigation<any>();

    return (
        <O_ScreenLayout
            HeaderHidden
            BannerHidden
            VideoHidden
            ProductBuyHidden
            ProductCartHidden
            ProductCheckoutHidden
            title="Donation"
        >
            {/* Search Bar */}
            <View style={styles.SearchBarContainer}>
                <TextInput style={styles.SearchBarInput}
                    placeholder="Search"
                />
                <Image style={styles.SearchIcon} source={Icon_8} resizeMode="center" />
            </View>

            {/* New Donation */}
            <View style={styles.Block}>
                <View style={styles.BlockHeading}>
                    <Text style={styles.DataBlockHeading}>Donate to Help</Text>
                </View>

                <ScrollView
                    horizontal
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <Pressable style={styles.DonationBlock} onPress={() => navigation.navigate("O_DonationPaidScreen")}>
                        <View style={styles.DonationImageContainer}>
                            <Image
                                style={styles.DonationBack}
                                source={Back_1}
                                resizeMode="cover"
                            />
                            <Image
                                style={styles.DonationImg}
                                source={require("../../../../assets/Images/Images/Donation1.png")}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.DonationData}>
                            <Text style={styles.DonationHeading}>
                                Distributing food during a prayer ceremony
                            </Text>
                            <View style={styles.DonationDetails}>
                                <Text style={styles.DonationTarget}>
                                    Target $5000
                                </Text>
                                <Image
                                    style={styles.CertifiedIcon}
                                    source={Icon_50}
                                    resizeMode="center"
                                />
                            </View>
                        </View>
                    </Pressable>

                    <Pressable style={styles.DonationBlock} onPress={() => navigation.navigate("O_DonationPaidScreen")}>
                        <View style={styles.DonationImageContainer}>
                            <Image
                                style={styles.DonationBack}
                                source={Back_1}
                                resizeMode="cover"
                            />
                            <Image
                                style={styles.DonationImg}
                                source={require("../../../../assets/Images/Images/Donation2.png")}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.DonationData}>
                            <Text style={styles.DonationHeading}>
                                distributing food during a prayer ceremony
                            </Text>
                            <View style={styles.DonationDetails}>
                                <Text style={styles.DonationTarget}>
                                    Target $2500
                                </Text>
                                <Image
                                    style={styles.CertifiedIcon}
                                    source={Icon_50}
                                    resizeMode="center"
                                />
                            </View>
                        </View>
                    </Pressable>

                    <Pressable style={styles.DonationBlock} onPress={() => navigation.navigate("O_DonationPaidScreen")}>
                        <View style={styles.DonationImageContainer}>
                            <Image
                                style={styles.DonationBack}
                                source={Back_1}
                                resizeMode="cover"
                            />
                            <Image
                                style={styles.DonationImg}
                                source={require("../../../../assets/Images/Images/Donation3.png")}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.DonationData}>
                            <Text style={styles.DonationHeading}>
                                distributing food during a prayer ceremony
                            </Text>
                            <View style={styles.DonationDetails}>
                                <Text style={styles.DonationTarget}>
                                    Target $4000
                                </Text>
                                <Image
                                    style={styles.CertifiedIcon}
                                    source={Icon_50}
                                    resizeMode="center"
                                />
                            </View>
                        </View>
                    </Pressable>
                </ScrollView>
            </View>

            {/* Organization */}
            <View style={styles.Block}>
                <View style={styles.BlockHeading}>
                    <Text style={styles.DataBlockHeading}>Joined Organization</Text>
                    <Pressable style={styles.ViewAll} onPress={() => navigation.navigate("O_OrganizationListScreen")}>
                        <Text style={styles.ViewAllText}>View All</Text>
                    </Pressable>
                </View>

                <ScrollView
                    horizontal
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap: 15, paddingLeft: 20, paddingRight: 20, }}
                >
                    {/* Single Block */}
                    {new Array(5).fill(0).map((item, Organindex) => (
                        <Pressable key={Organindex} style={styles.OrgBlock} onPress={() => navigation.navigate("O_OrganizationDetailsScreen")}>
                            <View style={styles.OrgImgBlock}>
                                <Image
                                    style={styles.OrgImg}
                                    source={BlankImage}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={styles.OrgText} numberOfLines={2}>Organization Name</Text>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>

            {/* Join Organization */}
            <View style={styles.Block}>
                <View style={styles.BlockHeading}>
                    <Text style={styles.DataBlockHeading}>Join our Nonprofit Organization</Text>
                    <Pressable style={styles.ViewAll} onPress={() => navigation.navigate("O_OrganizationListScreen")}>
                        <Text style={styles.ViewAllText}>View All</Text>
                    </Pressable>
                </View>

                {/* Single Block */}
                {new Array(3).fill(0).map((item, Joinindex) => (
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
                        <Pressable style={styles.JorgBtn} onPress={() => navigation.navigate("O_OrganizationDetailsScreen")}>
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
        </O_ScreenLayout>   
    );
}

const styles = StyleSheet.create({
    Container: {},

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
    BlockHeading: {
        width: Dimensions.get("window").width - 40,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 20,
    },
    DataBlockHeading: {
        fontFamily: "Inter-SemiBold",
        fontSize: 22,
        color: PrimaryColor,
        width: "80%",
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

    // New Donation
    DonationBlock: {
        width: 200,
        height: 250,
        flexDirection: "column",
        borderRadius: 15,
        backgroundColor: White,
        elevation: 3,
        margin: 20,
    },
    DonationImageContainer: {
        position: "relative",
        width: "100%",
        height: "65%",
        alignItems: "center",
        justifyContent: "center",
        zIndex: -1,
    },
    DonationBack: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    DonationImg: {
        position: "absolute",
        width: "100%",
        height: 180,
        zIndex: 1,
        bottom: 0,
    },
    DonationData: {
        width: "100%",
        height: "35%",
        padding: 10,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    DonationHeading: {
        fontFamily: "Inter-Medium",
        fontSize: 13,
    },
    DonationDetails: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    DonationTarget: {
        fontFamily: "Inter-Medium",
        fontSize: 13,
        color: TextColor,
    },
    CertifiedIcon: {
        width: 20,
        height: 20,
    },

    // Organization
    OrgBlock: {
        width: 100,
        height: 150,
        flexDirection: "column",
    },
    OrgImgBlock: {
        width: "100%",
        height: 100,
        backgroundColor: White,
        justifyContent: "center",
        alignItems: "center",
        elevation: 3,
        borderRadius: 10,
    },
    OrgImg: {
        width: 60,
        height: 60,
    },
    OrgText: {
        alignSelf: "center",
        textAlign: "center",
        fontFamily: "Inter-Medium",
        fontSize: 12,
        lineHeight: 12 * 1.4,
        marginTop: 5,
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
import { useNavigation } from "@react-navigation/native";
import O_ScreenLayout from "../O_ScreenLayout";
import { View, StyleSheet, Pressable, Image, Text, ScrollView, Dimensions, TextInput } from "react-native";
import React, { useState } from "react";
import { Black, SuccessBack, SuccessText, TextColor, White } from "../../../../Constant/Color";
import { SnackBar } from "../../../../Component/SnackBar";
import { Back_2, Back_4, Back_5, BlankImage, BlankVideo, HomeIcon_4, Icon_10, Icon_11, Icon_14, Icon_51, Icon_9 } from "../../../../Constant/Images";

export default function O_OrganizationDetailsScreen() {
    const navigation = useNavigation<any>();
    const [shouldShow, setShouldShow] = useState(true);
    const scrollRef = React.useRef<ScrollView>(null)
    const video = React.useRef(null);

    // SnackBar Alert
    const SuccessAlert = () => {
        SnackBar.show({
            text: "You joined the organization successfully.",
            type: "LONG",
            actionText: "Ok",
            onActionPress: () => {
                SnackBar.hide();
            },
            backgroundColor: SuccessBack,
            color: SuccessText,
        });
    };

    return (
        <O_ScreenLayout
            scrollRef={scrollRef}
            HeaderHidden
            VideoHidden
            ProductBuyHidden
            ProductCartHidden
            ProductCheckoutHidden
            title="Organization Details"
            BannerHeading="Organization Name"
            BannerImage={BlankImage}
        >


            <View style={styles.OrgDetails}>
                {/* Join The Organization */}
                <View style={styles.OrgBlock}>
                    <View style={styles.OrgIcon}>
                        <Image style={styles.OrgIconImg} source={Icon_9}
                            resizeMode="center"
                        />
                        <View style={styles.TimeBar}></View>
                    </View>
                    <View style={styles.OrgData}>
                        <View style={styles.OrgText}>
                            <Text style={styles.OrgHeading}>Join Us</Text>
                            <Text style={styles.OrgSubHeading}>Public Charities</Text>
                        </View>
                        <Pressable
                            onPress={() => { scrollRef.current?.scrollToEnd() }}
                            style={styles.OrgBtn}
                        >
                            <Text style={styles.JoinOrgBtnText}>Join</Text>
                            <Image style={styles.JoinOrgBtnBack} source={HomeIcon_4} />
                        </Pressable>
                    </View>
                </View>

                <View style={styles.OrgBlock}>
                    <View style={styles.OrgIcon}>
                        <Image style={styles.OrgIconImg} source={Icon_10}
                            resizeMode="center"
                        />
                        <View style={styles.TimeBar}></View>
                    </View>
                    <View style={styles.OrgData}>
                        <View style={styles.OrgText}>
                            <Text style={styles.OrgHeading}>Foundation</Text>
                            <Text style={styles.OrgSubHeading}>Friday 17 August 1992</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.OrgBlock}>
                    <View style={styles.OrgIcon}>
                        <Image style={styles.OrgIconImg} source={Icon_11}
                            resizeMode="center"
                        />
                        <View style={[styles.TimeBar, styles.LongTimeBar]}></View>
                    </View>
                    <View style={styles.OrgData}>
                        <View style={styles.OrgText}>
                            <Text style={styles.OrgHeading}>About</Text>
                            <Text numberOfLines={7} style={[styles.OrgSubHeading, styles.OrgTextData]}>
                                Cras ac velit ut risus accumsan mollis. Duis
                                pellentesque lacus efficitur ornare tincidunt.
                                Donec varius dapibus malesuada. Suspendisse
                                faucibus mi ac blandit efficitur. Ut maximus
                                bibendum leo, eu sodales sapien sollicitudin
                                sed. Vestibulum sollicitudin iaculis dolor, ac
                                feugiat sapien rutrum vel.</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.OrgBlock}>
                    <View style={styles.OrgIcon}>
                        <Image style={styles.OrgIconImg} source={Icon_14}
                            resizeMode="center"
                        />
                        <View style={styles.TimeBar}></View>
                    </View>
                    <View style={styles.OrgData}>
                        <View style={styles.OrgText}>
                            <Text style={styles.OrgHeading}>Members</Text>
                            <Text style={styles.OrgSubHeading}>879 Joined</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.OrgBlock}>
                    <View style={styles.OrgIcon}>
                        <Image style={styles.OrgIconImg} source={Icon_51}
                            resizeMode="center"
                        />
                    </View>
                    <View style={styles.OrgData}>
                        <View style={styles.OrgText}>
                            <Text style={styles.OrgHeading}>Social Works</Text>
                        </View>
                    </View>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    contentContainerStyle={styles.BlockContainer}>
                    {/* Single Video Tile Start */}
                    {new Array(3).fill(0).map((item, Videoindex) => (
                        <Pressable key={Videoindex} style={styles.VideoBlock} onPress={() => navigation.navigate("O_VideoPlayerScreen")}>
                            <View style={styles.VideoData}>
                                <Image style={styles.VideoImg} source={BlankVideo} resizeMode="cover" />
                            </View>
                            <View style={styles.VideoOwner}>
                                <View style={styles.VideoOwnerText}>
                                    <Image style={styles.VideoOwnerImg} source={BlankImage} resizeMode="center" />
                                    <Text style={styles.VideoOwnerHeading} numberOfLines={2}>Name and details of the video are displayed here</Text>
                                </View>
                                <Text style={styles.VideoOwnerView}>12K View</Text>
                            </View>
                        </Pressable>
                    ))}
                    {/* Single Video Tile End */}
                </ScrollView>
            </View>

            {/* Form */}
            <View style={styles.FormConatiner}>
                <View style={styles.InputBlock}>
                    <Text style={styles.Heading}>Full Name</Text>
                    <View style={styles.Input}>
                        <TextInput style={styles.InputField} placeholder="Enter Your Full name">
                        </TextInput>
                        <Image
                            style={styles.InputImg}
                            source={Back_2}
                            resizeMode="contain"
                        />
                    </View>
                </View>
                <View style={styles.InputBlock}>
                    <Text style={styles.Heading}>Phone Number</Text>
                    <View style={styles.Input}>
                        <TextInput style={styles.InputField} keyboardType="number-pad" placeholder="Type Your Phone Number">
                        </TextInput>
                        <Image
                            style={styles.InputImg}
                            source={Back_2}
                            resizeMode="contain"
                        />
                    </View>
                </View>
                <View style={styles.InputBlock}>
                    <Text style={styles.Heading}>Choose Gender</Text>
                    {shouldShow ? (
                        <>
                            <View style={styles.OptionContainer}>
                                <View style={styles.OptionBlock}>
                                    <Text style={styles.OptionText}>Male</Text>
                                    <Image
                                        style={styles.OptionBlockBack}
                                        source={Back_4}
                                        resizeMode="contain"
                                    />
                                </View>
                                <Pressable style={styles.OptionBlock} onPress={() => setShouldShow(!shouldShow)}>
                                    <Text style={styles.OptionText}>Female</Text>
                                    <Image
                                        style={styles.OptionBlockBack}
                                        source={Back_5}
                                        resizeMode="contain"
                                    />
                                </Pressable>
                            </View>
                        </>) : (
                        <View style={styles.OptionContainer}>
                            <Pressable style={styles.OptionBlock} onPress={() => setShouldShow(!shouldShow)}>
                                <Text style={styles.OptionText}>Male</Text>
                                <Image
                                    style={styles.OptionBlockBack}
                                    source={Back_5}
                                    resizeMode="contain"
                                />
                            </Pressable>
                            <View style={styles.OptionBlock}>
                                <Text style={styles.OptionText}>Female</Text>
                                <Image
                                    style={styles.OptionBlockBack}
                                    source={Back_4}
                                    resizeMode="contain"
                                />
                            </View>
                        </View>
                    )}
                </View>
                <View style={styles.InputBlock}>
                    <Text style={styles.Heading}>Nationality</Text>
                    <View style={styles.Input}>
                        <TextInput style={styles.InputField} placeholder="Type Your Nationality">
                        </TextInput>
                        <Image
                            style={styles.InputImg}
                            source={Back_2}
                            resizeMode="contain"
                        />
                    </View>
                </View>
                <Pressable style={styles.PrayerJoinBtn} onPress={SuccessAlert}>
                    <Text style={styles.JoinOrg2BtnText}>Join</Text>
                    <Image style={styles.JoinOrg2BtnBack} source={HomeIcon_4} />
                </Pressable>
            </View>
        </O_ScreenLayout>
    );
}

const styles = StyleSheet.create({
    // Prayer Details
    OrgDetails: {
        width: "100%",
        flex: 1,
        paddingTop: 40,
        paddingBottom: 40,
    },
    OrgBlock: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    OrgIcon: {
        width: "10%",
        alignItems: "center",
    },
    OrgIconImg: {
        width: 15,
        height: 15,
        marginBottom: 5,
    },
    TimeBar: {
        height: 35,
        alignSelf: "center",
        borderLeftColor: TextColor,
        borderLeftWidth: 1.5,
        borderStyle: "dashed",
    },
    LongTimeBar: {
        height: 155,
    },
    OrgData: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    OrgText: {},
    OrgHeading: {
        fontFamily: "Inter-SemiBold",
        fontSize: 16,
        lineHeight: 16 * 1,
    },
    OrgSubHeading: {
        fontFamily: "Inter-Regular",
        fontSize: 13,
        lineHeight: 13 * 1.5,
        color: TextColor,
        paddingTop: 4,
    },
    OrgTextData: {
        color: Black,
    },
    OrgBtn: {
        elevation: 10,
        backgroundColor: White,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        width: 80,
        height: 40,
        position: "relative",
    },
    JoinOrgBtnText: {
        color: White,
        fontFamily: "Inter-SemiBold",
        fontSize: 14,
        zIndex: 1,
    },
    JoinOrgBtnBack: {
        borderRadius: 50,
        width: 80,
        height: 40,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    // Video
    BlockContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        gap: 15,
    },
    VideoBlock: {
        width: Dimensions.get("window").width - 40,
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

    // Input Block
    FormConatiner: {
        padding: 20,
        paddingVertical: 40,
        borderTopWidth: 1,
        borderTopColor: TextColor,
        borderStyle: "dashed",
    },
    InputBlock: {
        marginBottom: 10,
    },
    Heading: {
        fontFamily: "Inter-SemiBold",
        fontSize: 14.5,
        paddingBottom: 10,
        paddingLeft: 25,
    },
    Input: {
        width: 300,
        height: 60,
        alignSelf: "center",
        position: "relative",
    },
    InputField: {
        zIndex: 1,
        width: 300,
        height: 60,
        paddingLeft: 25,
        paddingRight: 25,
    },
    InputImg: {
        width: 300,
        height: 60,
        position: "absolute",
        zIndex: 0,
    },
    PrayerJoinBtn: {
        elevation: 10,
        backgroundColor: White,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        width: 120,
        height: 50,
        position: "relative",
        alignSelf: "center",
        marginTop: 10,
    },
    JoinOrg2BtnText: {
        color: White,
        fontFamily: "Inter-SemiBold",
        fontSize: 14,
        zIndex: 1,
    },
    JoinOrg2BtnBack: {
        borderRadius: 50,
        width: 120,
        height: 50,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    OptionContainer: {
        width: 300,
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 10,
    },
    OptionBlock: {
        width: 170,
        height: 70,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
    OptionText: {
        position: "absolute",
        zIndex: 1,
        fontFamily: "Inter-Regular",
        color: TextColor,
    },
    OptionBlockBack: {
        width: 170,
        height: 70,
    },
})
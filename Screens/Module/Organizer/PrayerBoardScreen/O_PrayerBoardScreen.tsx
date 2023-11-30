import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, Image, Dimensions, Animated, useWindowDimensions, Easing, TextInput } from "react-native";
import O_ScreenLayout from "../O_ScreenLayout";
import PrayerBoardAccordion from "../../../../Component/PrayerBoardAccordion";
import Link from "../../../../Component/Link";
import { Black, PrimaryColor, TextColor, White } from "../../../../Constant/Color";
import { HomeIcon_4, Icon_10, Icon_11, Icon_12, Icon_8, Icon_9 } from "../../../../Constant/Images";

export default function O_PrayerBoardScreen() {
    const navigation = useNavigation<any>();
    const { width } = useWindowDimensions();
    const tabs = ["All", "Newest", "Upcoming"]
    const [active, setActive] = React.useState(0);
    const translateX = React.useRef(new Animated.Value(active * width)).current;

    React.useEffect(() => {
        Animated.timing(translateX, {
            useNativeDriver: true,
            toValue: -active * width,
            duration: 450,
            easing: Easing.ease,
        }).start();
    }, [active])

    return (
        <O_ScreenLayout
            BannerHidden
            HeaderHidden
            VideoHidden
            ProductBuyHidden
            ProductCartHidden
            ProductCheckoutHidden
            title="Prayer Board"
        >
            {/* Search Bar */}
            <View style={styles.SearchBarContainer}>
                <TextInput style={styles.SearchBarInput}
                    placeholder="Search Prayers"
                />
                <Image style={styles.SearchIcon} source={Icon_8} resizeMode="center" />
            </View>

            {/* Tab Container */}
            <View style={styles.TabContainer}>
                {tabs.map((tab, index) => {
                    if (index == active) {
                        return (
                            <Pressable key={index} onPress={() => setActive(index)}>
                                <Text style={styles.TabActiveText}>{tab}</Text>
                            </Pressable>
                        )
                    }
                    return (
                        <Pressable key={index} onPress={() => setActive(index)}>
                            <Text style={styles.TabText}>{tab}</Text>
                        </Pressable>
                    )
                })}
            </View>

            <Animated.View style={{
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 20,
                transform: [{ translateX }]
            }}>
                {new Array(3).fill(0).map((item, index) => (
                    <View key={index} style={{ width }}>
                        {new Array(4).fill(0).map((item, Prayerindex) => (
                            <PrayerBoardAccordion key={Prayerindex}>
                                <View style={styles.PrayerDetails}>
                                    {/* Join The Prayer */}
                                    <View style={styles.PrayerBlock}>
                                        <View style={styles.PrayerIcon}>
                                            <Image style={styles.PrayerIconImg} source={Icon_9}
                                                resizeMode="center"
                                            />
                                            <View style={styles.TimeBar}></View>
                                        </View>
                                        <View style={styles.PrayerData}>
                                            <View style={styles.PrayerText}>
                                                <Text style={styles.PrayerHeading}>Join The Prayer</Text>
                                                <Text style={styles.PrayerSubHeading}>90 Join 240 Interest</Text>
                                            </View>
                                            <Link style={styles.PrayerBtn} to={"O_PrayerJoinScreen"}>
                                                <Text style={styles.JoinPrayerBtnText}>Join</Text>
                                                <Image style={styles.JoinPrayerBtnBack} source={HomeIcon_4} />
                                            </Link>
                                        </View>
                                    </View>

                                    {/* Date & Time */}
                                    <View style={styles.PrayerBlock}>
                                        <View style={styles.PrayerIcon}>
                                            <Image style={styles.PrayerIconImg} source={Icon_10}
                                                resizeMode="center"
                                            />
                                            <View style={styles.TimeBar}></View>
                                        </View>
                                        <View style={styles.PrayerData}>
                                            <View style={styles.PrayerText}>
                                                <Text style={styles.PrayerHeading}>Date & Time</Text>
                                                <Text style={[styles.PrayerSubHeading, styles.PrayerTextData]}>
                                                    Friday 17 August 2023, 08:30 PM
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* About */}
                                    <View style={styles.PrayerBlock}>
                                        <View style={styles.PrayerIcon}>
                                            <Image style={styles.PrayerIconImg} source={Icon_11}
                                                resizeMode="center"
                                            />
                                            <View style={[styles.TimeBar, styles.LongTimeBar]}></View>
                                        </View>
                                        <View style={styles.PrayerData}>
                                            <View style={styles.PrayerText}>
                                                <Text style={styles.PrayerHeading}>About</Text>
                                                <Text numberOfLines={7} style={[styles.PrayerSubHeading, styles.PrayerTextData]}>
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

                                    {/* More Details */}
                                    <View style={styles.PrayerBlock}>
                                        <View style={styles.PrayerIcon}>
                                            <Image style={styles.PrayerIconImg} source={Icon_12}
                                                resizeMode="center"
                                            />
                                            <View style={styles.TimeBar}></View>
                                        </View>
                                        <View style={styles.PrayerData}>
                                            <View style={styles.PrayerText}>
                                                <Text style={styles.PrayerHeading}>More Details</Text>
                                                <Text style={[styles.PrayerSubHeading, styles.PrayerTextData]}>
                                                    Brief about the Prayer
                                                </Text>
                                            </View>
                                            <Link style={styles.PrayerBtn} to="O_PrayerDetailsScreen">
                                                <Text style={styles.ViewPrayerBtnText}>View</Text>
                                            </Link>
                                        </View>
                                    </View>
                                </View>
                            </PrayerBoardAccordion>
                        ))}
                    </View>
                ))}
            </Animated.View>
        </O_ScreenLayout>
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

    // Tab Container
    TabContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        justifyContent: "space-around",
    },
    TabText: {
        fontFamily: "Inter-SemiBold",
        fontSize: 20,
        textAlign: "left",
        alignItems: "flex-end",
        color: TextColor,
    },
    TabActiveText: {
        fontFamily: "Inter-SemiBold",
        fontSize: 30,
        textAlign: "left",
        alignItems: "flex-end",
        lineHeight: 30 * 1,
        color: PrimaryColor,
    },

    // Prayer Details
    PrayerDetails: {
        width: Dimensions.get("window").width - 40,
        paddingBottom: 10,
    },
    PrayerBlock: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingTop: 5,
        paddingBottom: 5,
    },
    PrayerIcon: {
        width: "15%",
        alignItems: "center",
    },
    PrayerIconImg: {
        width: 15,
        height: 15,
        marginBottom: 5,
    },
    TimeBar: {
        height: 36,
        alignSelf: "center",
        borderLeftColor: TextColor,
        borderLeftWidth: 1.5,
        borderStyle: "dashed",
    },
    LongTimeBar: {
        height: 155,
    },
    PrayerData: {
        width: "85%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    PrayerText: {},
    PrayerHeading: {
        fontFamily: "Inter-SemiBold",
        fontSize: 16,
        lineHeight: 16 * 1,
    },
    PrayerSubHeading: {
        fontFamily: "Inter-Regular",
        fontSize: 13,
        lineHeight: 13 * 1.5,
        color: TextColor,
        paddingTop: 4,
    },
    PrayerTextData: {
        color: Black,
    },
    PrayerBtn: {
        elevation: 10,
        backgroundColor: White,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        width: 80,
        height: 40,
        position: "relative",
    },
    ViewPrayerBtnText: {
        color: PrimaryColor,
        fontFamily: "Inter-SemiBold",
        fontSize: 14,
    },
    JoinPrayerBtnText: {
        color: White,
        fontFamily: "Inter-SemiBold",
        fontSize: 14,
        zIndex: 1,
    },
    JoinPrayerBtnBack: {
        borderRadius: 50,
        width: 80,
        height: 40,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
})
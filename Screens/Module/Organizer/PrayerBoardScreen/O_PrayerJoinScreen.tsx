import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TextInput, Pressable } from "react-native";
import O_ScreenLayout from "../O_ScreenLayout";
import { SuccessBack, SuccessText, TextColor, White } from "../../../../Constant/Color";
import { SnackBar } from "../../../../Component/SnackBar";
import { Back_2, Back_4, Back_5, BlankImage, HomeIcon_4 } from "../../../../Constant/Images";

export default function O_PrayerJoinScreen() {
    const navigation = useNavigation<any>();
    const [shouldShow, setShouldShow] = useState(true);

    // SnackBar Alert
    const SuccessAlert = () => {
        SnackBar.show({
            text: "You joined the prayer successfully.",
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
            HeaderHidden
            VideoHidden
            ProductBuyHidden
            ProductCartHidden
            ProductCheckoutHidden
            title="Join Prayer"
            BannerHeading="Prayer Name"
            BannerSubHeading="Where the prayer event is taking place"
            BannerImage={BlankImage}
        >
            <View style={styles.Conatiner}>
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
                    <Text style={styles.JoinPrayerBtnText}>Join</Text>
                    <Image style={styles.JoinPrayerBtnBack} source={HomeIcon_4} />
                </Pressable>
            </View>
        </O_ScreenLayout>
    );
}

const styles = StyleSheet.create({
    Conatiner: {
        width: "100%",
        flex: 1,
        padding: 20,
    },

    // Input Block
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
    JoinPrayerBtnText: {
        color: White,
        fontFamily: "Inter-SemiBold",
        fontSize: 14,
        zIndex: 1,
    },
    JoinPrayerBtnBack: {
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
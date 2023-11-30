import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TextInput, Pressable } from "react-native";
import O_ScreenLayout from "../O_ScreenLayout";
import { SuccessBack, SuccessText, White } from "../../../../Constant/Color";
import { Back_2, Back_3, BlankImage, HomeIcon_4 } from "../../../../Constant/Images";
import { SnackBar } from "../../../../Component/SnackBar";
import ChooseFile from "../../../../Component/ChooseFile";

export default function O_PrayerAddScreen() {
    const navigation = useNavigation<any>();

    // SnackBar Alert
    const SuccessAlert = () => {
        SnackBar.show({
            text: "Your Prayer has been successfully added.",
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
            title="Add Prayer"
            BannerHeading="Add your Prayer Details"
            BannerImage={BlankImage}
        >
            <View style={styles.Container}>
                <View style={styles.InputBlock}>
                    <Text style={styles.Heading}>Prayer Cover Image</Text>
                    <View style={styles.Input}>
                        <ChooseFile></ChooseFile>
                    </View>
                </View>
                <View style={styles.InputBlock}>
                    <Text style={styles.Heading}>Prayer Name</Text>
                    <View style={styles.Input}>
                        <TextInput style={styles.InputField} placeholder="Prayer Name">
                        </TextInput>
                        <Image
                            style={styles.InputImg}
                            source={Back_2}
                            resizeMode="contain"
                        />
                    </View>
                </View>
                <View style={styles.InputBlock}>
                    <Text style={styles.Heading}>Prayer Sub Heading</Text>
                    <View style={styles.Input}>
                        <TextInput style={styles.InputField} placeholder="Prayer Sub Heading">
                        </TextInput>
                        <Image
                            style={styles.InputImg}
                            source={Back_2}
                            resizeMode="contain"
                        />
                    </View>
                </View>
                <View style={styles.InputBlock}>
                    <Text style={styles.Heading}>Date & Time</Text>
                    <View style={styles.Input}>
                        <TextInput style={styles.InputField} keyboardType="decimal-pad" placeholder="Date & Time">
                        </TextInput>
                        <Image
                            style={styles.InputImg}
                            source={Back_2}
                            resizeMode="contain"
                        />
                    </View>
                </View>
                <View style={styles.InputBlock}>
                    <Text style={styles.Heading}>About</Text>
                    <View style={[styles.Input, styles.CommentInput]}>
                        <TextInput style={[styles.InputField, styles.CommentArea]}
                            multiline={true}
                            placeholder="Type Your Message">
                        </TextInput>
                        <Image
                            style={[styles.InputImg, styles.CommentAreaImg]}
                            source={Back_3}
                            resizeMode="contain"
                        />
                    </View>
                </View>
                <Pressable style={styles.SubmitBtn} onPress={SuccessAlert}>
                    <Text style={styles.SubmitBtnText}>Submit</Text>
                    <Image style={styles.SubmitBtnBack} source={HomeIcon_4} />
                </Pressable>
            </View>
        </O_ScreenLayout>
    );
}

const styles = StyleSheet.create({
    Container: {
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
    CommentInput: {
        height: 180,
    },
    CommentArea: {
        height: 180,
        verticalAlign: "top",
        textAlign: "left",
        paddingTop: 20,
    },
    CommentAreaImg: {
        height: 180,
    },

    // Button
    SubmitBtn: {
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
    SubmitBtnText: {
        color: White,
        fontFamily: "Inter-SemiBold",
        fontSize: 14,
        zIndex: 1,
    },
    SubmitBtnBack: {
        borderRadius: 50,
        width: 120,
        height: 50,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
})
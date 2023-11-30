import { useNavigation } from "@react-navigation/native";
import U_ScreenLayout from "../U_ScreenLayout";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { BlankImage } from "../../../../Constant/Images";

export default function U_PrivacyPolicyScreen() {
    const navigation = useNavigation<any>();

    return (
        <U_ScreenLayout
            HeaderHidden
            VideoHidden
            ProductBuyHidden
            ProductCartHidden
            ProductCheckoutHidden
            title="Privacy & Policy"
            BannerHeading="Privacy & Policy"
            BannerImage={BlankImage}
        >
            <View style={styles.Container}>
                <Text style={styles.Heading}>
                    Last updated: September 24, 2023
                </Text>
                <Text style={styles.SubHeading}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac diam velit. Suspendisse et convallis nisl. Nullam pretium tortor quam, eget vulputate dolor iaculis vitae. Duis vitae nisi suscipit sem luctus varius. Phasellus sed augue hendrerit, eleifend sapien dictum, elementum lacus. Integer euismod neque metus, vel pellentesque nisl laoreet a. Donec sed nibh ac risus egestas bibendum. Duis sed arcu tortor. Fusce ex dui, convallis nec dignissim sit amet, egestas non eros. Aliquam in nunc nec ligula facilisis fermentum. Curabitur pretium mattis augue, vel rutrum dui rhoncus ac. Duis hendrerit arcu in mattis scelerisque. Duis a feugiat orci, quis pretium lectus.
                </Text>
                <Text style={styles.Heading}>
                    Limitation
                </Text>
                <Text style={styles.SubHeading}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac diam velit. Suspendisse et convallis nisl. Nullam pretium tortor quam, eget vulputate dolor iaculis vitae. Duis vitae nisi suscipit sem luctus varius. Phasellus sed augue hendrerit, eleifend sapien dictum, elementum lacus.
                </Text>
            </View>
        </U_ScreenLayout>
    );
}

const styles = StyleSheet.create({
    Container: {
        padding: 20,
    },
    Heading: {
        fontFamily: "Inter-SemiBold",
        fontSize: 17,
        lineHeight: 17 * 1.5,
        paddingBottom: 10,
    },
    SubHeading: {
        fontFamily: "Inter-Regular",
        fontSize: 15,
        lineHeight: 15 * 1.5,
        paddingBottom: 10,
    },
})
import { useNavigation } from "@react-navigation/native";
import O_ScreenLayout from "../O_ScreenLayout";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { BlankImage } from "../../../../Constant/Images";

export default function O_TermsConditionScreen() {
    const navigation = useNavigation<any>();

    return (
        <O_ScreenLayout
            HeaderHidden
            VideoHidden
            ProductBuyHidden
            ProductCartHidden
            ProductCheckoutHidden
            title="Terms & Condition"
            BannerHeading="Terms & Condition"
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
        </O_ScreenLayout>
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
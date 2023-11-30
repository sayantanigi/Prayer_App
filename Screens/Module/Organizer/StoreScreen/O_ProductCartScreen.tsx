import { useNavigation } from "@react-navigation/native";
import O_ScreenLayout from "../O_ScreenLayout";
import { View, StyleSheet, Text, Image, Dimensions, Pressable } from "react-native";
import React from "react";
import { BlankImage, Icon_63 } from "../../../../Constant/Images";
import { Black, TextColor } from "../../../../Constant/Color";
import { AntDesign } from '@expo/vector-icons';

export default function O_ProductCartScreen() {
    const navigation = useNavigation<any>();

    return (
        <O_ScreenLayout
            BannerHidden
            HeaderHidden
            VideoHidden
            FooterHidden
            ProductBuyHidden
            ProductCheckoutHidden
            title="Cart"
        >
            <View style={styles.Container}>
                {new Array(7).fill(0).map((item, Productindex) => (
                    <View key={Productindex} style={styles.DataContainer}>
                        <Pressable style={styles.ImgContainer} onPress={() => navigation.navigate("O_ProductScreen")}>
                            <Image
                                style={styles.ProductImg}
                                source={BlankImage}
                                resizeMode="contain"
                            />
                        </Pressable>

                        <View style={styles.Data}>
                            <View style={styles.DataHead}>
                                <Text style={styles.DataName} numberOfLines={2}>Product Name</Text>
                                <Image
                                    style={styles.DataCross}
                                    source={Icon_63}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={styles.DataCategory}>Product Category</Text>
                            <View style={styles.DataBottom}>
                                <Text style={styles.DataPrice}>$50.00 USD</Text>
                                <View style={styles.DataAdd}>
                                    <Pressable>
                                        <AntDesign name="minus" size={16} color="black" />
                                    </Pressable>
                                    <Text style={styles.DataAddCount}>1</Text>
                                    <Pressable>
                                        <AntDesign name="plus" size={16} color="black" />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </O_ScreenLayout>
    );
}

const styles = StyleSheet.create({
    Container: {
        alignSelf: "center",
        width: Dimensions.get("window").width - 40,
    },
    DataContainer: {
        width: "100%",
        alignSelf: "center",
        height: 150,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: TextColor,
        borderBottomWidth: 1,
        borderStyle: "dashed",
    },
    ImgContainer: {
        width: "35%",
        height: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    ProductImg: {
        width: 100,
        height: 100,
    },
    Data: {
        width: "65%",
        height: "100%",
        flexDirection: "column",
        paddingVertical: 25,
    },
    DataHead: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    DataName: {
        width: "80%",
        fontFamily: "Inter-SemiBold",
        fontSize: 18,
        color: Black,
    },
    DataCross: {
        width: 15,
        height: 15,
    },
    DataCategory: {
        fontFamily: "Inter-Regular",
        fontSize: 14,
        color: TextColor,
    },
    DataBottom: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 15,
    },
    DataPrice: {
        fontFamily: "Inter-SemiBold",
        fontSize: 13,
        width: "50%",
    },
    DataAdd: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "50%",
        borderRadius: 100,
        borderWidth: 1,
        borderColor: TextColor,
        padding: 10,
    },
    DataAddCount: {
        fontFamily: "Inter-SemiBold",
        fontSize: 14,
    },
})
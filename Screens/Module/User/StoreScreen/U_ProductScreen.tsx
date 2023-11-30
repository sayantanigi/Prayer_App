import { useNavigation } from "@react-navigation/native";
import U_ScreenLayout from "../U_ScreenLayout";
import React, { useState } from "react";
import { View, Pressable, Text, ImageBackground, Dimensions, StyleSheet, Image } from "react-native";
import ImageSlider from "../../../../Component/ImageSlider";
import { BlankImage, Icon_33, Icon_34 } from "../../../../Constant/Images";
import { Black, TextColor, Transparent, White } from "../../../../Constant/Color";

export default function U_ProductScreen() {
    const navigation = useNavigation<any>();
    const [shouldShow, setShouldShow] = useState(true);

    // Image Slider Function
    const datas = [
        {
            id: 1,
            Text: "Product Name",
            Subtitle:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsa distinctio amet odit.",
            Shaperate: <View></View>,
            Cover: <View></View>,
            Image: BlankImage,
            Button: (
                <View>
                    <Pressable onPress={() => navigation.navigate("")}>
                        <Text style={{ fontSize: 500, color: Transparent }}>
                            Redirect To Product Page
                        </Text>
                    </Pressable>
                </View>
            ),
        },
        {
            id: 2,
            Text: "Product Name",
            Subtitle:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsa distinctio amet odit.",
            Shaperate: <View></View>,
            Cover: <View></View>,
            Image: BlankImage,
            Button: (
                <View>
                    <Pressable onPress={() => navigation.navigate("")}>
                        <Text style={{ fontSize: 500, color: Transparent }}>
                            Redirect To Product Page
                        </Text>
                    </Pressable>
                </View>
            ),
        },
        {
            id: 3,
            Text: "Product Name",
            Subtitle:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsa distinctio amet odit.",
            Shaperate: <View></View>,
            Cover: <View></View>,
            Image: BlankImage,
            Button: (
                <View>
                    <Pressable onPress={() => navigation.navigate("")}>
                        <Text style={{ fontSize: 500, color: Transparent }}>
                            Redirect To Product Page
                        </Text>
                    </Pressable>
                </View>
            ),
        },
    ];

    function slideCompont(item: (typeof datas)[0]) {
        return (
            <ImageBackground
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: 300,
                    justifyContent: "flex-start",
                }}
                source={item.Image}
            >
                {/* Slider Cover */}
                <View style={styles.SliderShaperate}>{item.Shaperate}</View>
                <View style={styles.SliderCover}>{item.Cover}</View>

                {/* Slider Data */}
                <View style={styles.SliderText}>
                    <Text style={styles.SliderHeading} numberOfLines={1}>{item.Text}</Text>
                    <Text style={styles.SliderSubHeading} numberOfLines={5}>{item.Subtitle}</Text>
                </View>

                {/* Slider Link */}
                <Pressable style={styles.SliderLink}>{item.Button}</Pressable>
            </ImageBackground>
        );
    }

    return (
        <U_ScreenLayout
            BannerHidden
            HeaderHidden
            VideoHidden
            FooterHidden
            ProductCartHidden
            ProductCheckoutHidden
            title="Product Details"
        >
            {/* Product Banner */}
            <View style={styles.DataBlock}>
                <ImageSlider
                    interval={10000}
                    data={datas}
                    slideStyle={{
                        width: Dimensions.get("window").width,
                    }}
                    renderItem={slideCompont}
                />
            </View>

            <View style={styles.ProductData}>
                <View style={styles.LikeArea}>
                    <Text style={styles.ProductCategory}>Product Category</Text>
                    {shouldShow ? (
                        <>
                            <Pressable style={styles.LikeBtn} onPress={() => setShouldShow(!shouldShow)}>
                                <Image
                                    style={styles.LikeImg}
                                    source={Icon_33}
                                    resizeMode="contain"
                                />
                            </Pressable>
                        </>
                    ) : (
                        <Pressable style={styles.LikeBtn} onPress={() => setShouldShow(!shouldShow)}>
                            <Image
                                style={styles.LikeImg}
                                source={Icon_34}
                                resizeMode="contain"
                            />
                        </Pressable>
                    )}
                </View>
                <View style={styles.ProductText}>
                    <Text style={styles.ProductName} numberOfLines={2}>Product Name</Text>
                    <Text style={styles.ProductPrice}>$50</Text>
                </View>
                <Text style={styles.ProductRating}>4.5★</Text>
                <Text style={styles.ProductDetails}>
                    Pellentesque vestibulum suscipit mi in congue. Mauris augue lorem, scelerisque vestibulum tortor sit amet, sagittis auctor tortor. Proin vulputate aliquam sem, quis viverra ante vehicula id. Morbi malesuada pretium libero. Curabitur ac magna eu ex semper sollicitudin. Nulla laoreet et libero vitae sagittis. Duis vulputate ut augue ac molestie. Etiam gravida, dolor vel posuere convallis, ipsum mauris ultrices ex, feugiat iaculis leo ante eget arcu. Ut bibendum purus et vehicula suscipit.
                </Text>
            </View>
        </U_ScreenLayout>
    );
}

const styles = StyleSheet.create({
    // Common
    DataBlock: {
    },

    // Slider Style
    SliderShaperate: {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: 300,
    },
    SliderCover: {
        position: "absolute",
        zIndex: 0,
        width: "100%",
        height: 300,
        backgroundColor: Black,
        opacity: 0.5,
    },
    SliderText: {
        width: "100%",
        padding: 15,
        flexDirection: "column",
    },
    SliderHeading: {
        fontSize: 20,
        color: White,
        fontWeight: "500",
        letterSpacing: 0.8,
        fontFamily: "Inter-SemiBold",
    },
    SliderSubHeading: {
        fontSize: 14,
        color: White,
        letterSpacing: 0.5,
        fontFamily: "Inter-Regular",
        lineHeight: 14 * 1.5,
    },
    SliderLink: {
        position: "absolute",
        zIndex: 10,
        top: 0,
        left: 4,
        width: "100%",
        height: 300,
    },

    // Product Details
    ProductData: {
        padding: 20,
        flexDirection: "column",
        gap: 5,
    },
    LikeArea: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    ProductCategory: {
        fontFamily: "Inter-Regular",
        fontSize: 14,
        color: TextColor,
    },
    LikeBtn: {},
    LikeImg: {
        width: 35,
        height: 35,
    },
    ProductText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    ProductName: {
        width: "60%",
        fontFamily: "Inter-SemiBold",
        fontSize: 22,
        color: Black,
    },
    ProductPrice: {
        width: "40%",
        fontFamily: "Inter-SemiBold",
        fontSize: 22,
        color: Black,
        textAlign: "right",
    },
    ProductRating: {
        fontFamily: "Inter-Regular",
        fontSize: 14,
        color: TextColor,
    },
    ProductDetails: {
        fontFamily: "Inter-Regular",
        fontSize: 14,
        lineHeight: 14 * 1.5,
    },
})
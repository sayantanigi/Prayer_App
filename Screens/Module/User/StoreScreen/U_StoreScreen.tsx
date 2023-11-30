import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Image, Dimensions, Pressable, Text, ImageBackground, ScrollView, Animated, Easing, useWindowDimensions, Modal } from "react-native";
import U_ScreenLayout from "../U_ScreenLayout";
import { BlankImage, Icon_29, Icon_52, Icon_53, Icon_55, Icon_56, Icon_57, Icon_58, Icon_59, Icon_60, Icon_8 } from "../../../../Constant/Images";
import { BackgroundColor, Black, PrimaryColor, SuccessBack, SuccessText, TextColor, Transparent, White } from "../../../../Constant/Color";
import ImageSlider from "../../../../Component/ImageSlider";
import Checkbox from "expo-checkbox";
import { SnackBar } from "../../../../Component/SnackBar";

// Category Tab
interface TabItem {
    label: string;
    image: any;
}

export default function U_StoreScreen() {
    const navigation = useNavigation<any>();
    const { width } = useWindowDimensions();
    const [filters, setFilters] = React.useState([
        {
            label: "$50 and Below",
            selected: false
        },
        {
            label: "$100 - $50",
            selected: false
        },
        {
            label: "$150 - $100",
            selected: false
        },
        {
            label: "$200 - $150",
            selected: false
        },
        {
            label: "$250 and Above",
            selected: false
        },
    ])
    const [filters1, setFilters1] = React.useState([
        {
            label: "1 ★ & Above",
            selected: false
        },
        {
            label: "2 ★ & Above",
            selected: false
        },
        {
            label: "3 ★ & Above",
            selected: false
        },
        {
            label: "4 ★ & Above",
            selected: false
        },
    ])
    const [filters2, setFilters2] = React.useState([
        {
            label: "Special Offer Price",
            selected: false
        },
        {
            label: "Christmas Day Offer Price",
            selected: false
        },
    ])
    const [filters3, setFilters3] = React.useState([
        {
            label: "10% or More",
            selected: false
        },
        {
            label: "20% or More",
            selected: false
        },
        {
            label: "30% or More",
            selected: false
        },
        {
            label: "40% or More",
            selected: false
        },
        {
            label: "50% or More",
            selected: false
        },
    ])
    const [filters4, setFilters4] = React.useState([
        {
            label: "Relevance",
            selected: true
        },
        {
            label: "Popularity",
            selected: false
        },
        {
            label: "Price -- Low to High",
            selected: false
        },
        {
            label: "Price -- High to Low",
            selected: false
        },
        {
            label: "Newest First",
            selected: false
        },
    ])
    const [modalFilterVisible, setModalFilterVisible] = useState(false);
    const [modalSortByVisible, setModalSortByVisible] = useState(false);
    const tabs: TabItem[] = [
        { label: "All", image: Icon_59 },
        { label: "Books", image: Icon_55 },
        { label: "Ornament", image: Icon_57 },
        { label: "Paintings", image: Icon_56 },
        { label: "Showpiece", image: Icon_58 },
    ]
    const [active, setActive] = React.useState(0);
    const translateX = React.useRef(new Animated.Value(active * width)).current;

    // SnackBar Alert
    const SuccessAlert = () => {
        SnackBar.show({
            text: "Item added to cart.",
            type: "LONG",
            actionText: "Ok",
            onActionPress: () => {
                SnackBar.hide();
            },
            backgroundColor: SuccessBack,
            color: SuccessText,
        });
    };

    React.useEffect(() => {
        Animated.timing(translateX, {
            useNativeDriver: true,
            toValue: -active * width,
            duration: 450,
            easing: Easing.ease,
        }).start();
    }, [active])

    // Filter Function
    function handleFilterSelection(index: number) {
        filters[index].selected = !filters[index].selected;
        setFilters([...filters])
    }
    function handleFilterSelection1(index: number) {
        filters1[index].selected = !filters1[index].selected;
        setFilters1([...filters1])
    }
    function handleFilterSelection2(index: number) {
        filters2[index].selected = !filters2[index].selected;
        setFilters2([...filters2])
    }
    function handleFilterSelection3(index: number) {
        filters3[index].selected = !filters3[index].selected;
        setFilters3([...filters3])
    }
    function handleFilterSelection4(index: number) {
        filters4[index].selected = !filters4[index].selected;
        setFilters4([...filters4])
    }

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
                    height: 200,
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
            ProductBuyHidden
            ProductCartHidden
            ProductCheckoutHidden
            title="Store"
        >
            {/* Search Bar */}
            <View style={styles.TopContainer}>
                <View style={styles.SearchBar}>
                    <TextInput style={styles.SearchBarInput}
                        placeholder="Search Podcasts"
                    />
                    <Image style={styles.SearchIcon} source={Icon_8} resizeMode="center" />
                    <Pressable style={styles.FilterBlock} onPress={() => setModalFilterVisible(true)}>
                        <Image style={styles.FilterIcon} source={Icon_52} resizeMode="center" />
                    </Pressable>
                </View>
                <View style={styles.CartBlock}>
                    <Pressable style={styles.CartBack} onPress={() => navigation.navigate("U_ProductCartScreen")}>
                        <Image
                            style={styles.CartIcon}
                            source={Icon_53}
                            resizeMode="center"
                        />
                        <Text style={styles.AddToCartNumber}>2</Text>
                    </Pressable>
                </View>
            </View>

            {/* Product Banner */}
            <View style={styles.DataBlock}>
                <ImageSlider
                    interval={5000}
                    data={datas}
                    slideStyle={{
                        width: Dimensions.get("window").width,
                    }}
                    renderItem={slideCompont}
                />
            </View>

            {/* Category Block */}
            <View style={styles.CategoryBlock}>
                <ScrollView
                    horizontal
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.TabContainer}
                >
                    {tabs.map((tab, index) => {
                        if (index == active) {
                            return (
                                <Pressable key={index} style={styles.TabActiveBlock} onPress={() => setActive(index)}>
                                    <Image style={styles.TabActiveImage} source={tab.image} resizeMode="contain" />
                                    <Text style={styles.TabActiveText}>{tab.label}</Text>
                                </Pressable>
                            )
                        }
                        return (
                            <Pressable key={index} style={styles.TabBlock} onPress={() => setActive(index)}>
                                <Image style={styles.TabImage} source={tab.image} resizeMode="contain" />
                                <Text style={styles.TabText}>{tab.label}</Text>
                            </Pressable>
                        )
                    })}
                </ScrollView>

                <Animated.View style={{
                    flexDirection: "row",
                    paddingLeft: 20,
                    paddingRight: 20,
                    transform: [{ translateX }]
                }}>
                    {/* All Product */}
                    <View style={[{ width }, styles.ProductBlock]}>
                        {/* Head */}
                        <View style={styles.ProductTop}>
                            <Text style={styles.ProductBlockHeading}>Popular</Text>
                            <Pressable style={styles.ProductSortBtn} onPress={() => setModalSortByVisible(true)}>
                                <Text style={styles.ProductSortTxt}>Sort By</Text>
                                <Image style={styles.ProductSortIcon} source={Icon_52} resizeMode="center" />
                            </Pressable>
                        </View>

                        {/* Body */}
                        {new Array(3).fill(0).map((item, Productindex) => (
                            <View key={Productindex} style={styles.ProductContainer}>
                                {/* Single Product Block */}
                                <Pressable style={styles.Product} onPress={() => navigation.navigate("U_ProductScreen")}>
                                    <View style={styles.ProductImgContainer}>
                                        <Image
                                            style={styles.ProductImg}
                                            source={require("../../../../assets/Images/Images/Product.png")}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={styles.ProductData}>
                                        <View style={styles.ProductText}>
                                            <Text style={styles.ProductHeading}>Product Name</Text>
                                            <View style={styles.ProductPriceBlock}>
                                                <Text style={styles.ProductPriceOffter}>71% off</Text>
                                                <Text style={styles.ProductPriceCut}>3000</Text>
                                                <Text style={styles.ProductPrice}>$50</Text>
                                            </View>
                                            <Text style={styles.ProductRating}>4.5★</Text>
                                        </View>
                                    </View>
                                    <Pressable style={styles.ProductAddBtn} onPress={SuccessAlert}>
                                        <Image
                                            style={styles.ProductAddIcon}
                                            source={Icon_60}
                                            resizeMode="center"
                                        />
                                    </Pressable>
                                </Pressable>
                                {/* Single Product Block */}

                                <Pressable style={styles.Product} onPress={() => navigation.navigate("U_ProductScreen")}>
                                    <View style={styles.ProductImgContainer}>
                                        <Image
                                            style={styles.ProductImg}
                                            source={require("../../../../assets/Images/Images/Product.png")}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={styles.ProductData}>
                                        <View style={styles.ProductText}>
                                            <Text style={styles.ProductHeading}>Product Name</Text>
                                            <View style={styles.ProductPriceBlock}>
                                                <Text style={styles.ProductPriceOffter}>71% off</Text>
                                                <Text style={styles.ProductPriceCut}>3000</Text>
                                                <Text style={styles.ProductPrice}>$50</Text>
                                            </View>
                                            <Text style={styles.ProductRating}>4.5★</Text>
                                        </View>
                                    </View>
                                    <Pressable style={styles.ProductAddBtn} onPress={SuccessAlert}>
                                        <Image
                                            style={styles.ProductAddIcon}
                                            source={Icon_60}
                                            resizeMode="center"
                                        />
                                    </Pressable>
                                </Pressable>
                            </View>
                        ))}
                    </View>

                    {/* Books */}
                    <View style={[{ width }, styles.ProductBlock]}>
                        {/* Head */}
                        <View style={styles.ProductTop}>
                            <Text style={styles.ProductBlockHeading}>Popular</Text>
                            <Pressable style={styles.ProductSortBtn} onPress={() => setModalSortByVisible(true)}>
                                <Text style={styles.ProductSortTxt}>Sort By</Text>
                                <Image style={styles.ProductSortIcon} source={Icon_52} resizeMode="center" />
                            </Pressable>
                        </View>

                        {/* Body */}
                        {new Array(3).fill(0).map((item, Productindex) => (
                            <View key={Productindex} style={styles.ProductContainer}>
                                {/* Single Product Block */}
                                <Pressable style={styles.Product} onPress={() => navigation.navigate("U_ProductScreen")}>
                                    <View style={styles.ProductImgContainer}>
                                        <Image
                                            style={styles.ProductImg}
                                            source={require("../../../../assets/Images/Images/Book.png")}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={styles.ProductData}>
                                        <View style={styles.ProductText}>
                                            <Text style={styles.ProductHeading}>Product Name</Text>
                                            <View style={styles.ProductPriceBlock}>
                                                <Text style={styles.ProductPriceOffter}>71% off</Text>
                                                <Text style={styles.ProductPriceCut}>3000</Text>
                                                <Text style={styles.ProductPrice}>$50</Text>
                                            </View>
                                            <Text style={styles.ProductRating}>4.5★</Text>
                                        </View>
                                    </View>
                                    <Pressable style={styles.ProductAddBtn} onPress={SuccessAlert}>
                                        <Image
                                            style={styles.ProductAddIcon}
                                            source={Icon_60}
                                            resizeMode="center"
                                        />
                                    </Pressable>
                                </Pressable>
                                {/* Single Product Block */}

                                <Pressable style={styles.Product} onPress={() => navigation.navigate("U_ProductScreen")}>
                                    <View style={styles.ProductImgContainer}>
                                        <Image
                                            style={styles.ProductImg}
                                            source={require("../../../../assets/Images/Images/Book.png")}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={styles.ProductData}>
                                        <View style={styles.ProductText}>
                                            <Text style={styles.ProductHeading}>Product Name</Text>
                                            <View style={styles.ProductPriceBlock}>
                                                <Text style={styles.ProductPriceOffter}>71% off</Text>
                                                <Text style={styles.ProductPriceCut}>3000</Text>
                                                <Text style={styles.ProductPrice}>$50</Text>
                                            </View>
                                            <Text style={styles.ProductRating}>4.5★</Text>
                                        </View>
                                    </View>
                                    <Pressable style={styles.ProductAddBtn} onPress={SuccessAlert}>
                                        <Image
                                            style={styles.ProductAddIcon}
                                            source={Icon_60}
                                            resizeMode="center"
                                        />
                                    </Pressable>
                                </Pressable>
                            </View>
                        ))}
                    </View>

                    {/* Ornament */}
                    <View style={[{ width }, styles.ProductBlock]}>
                        {/* Head */}
                        <View style={styles.ProductTop}>
                            <Text style={styles.ProductBlockHeading}>Popular</Text>
                            <Pressable style={styles.ProductSortBtn} onPress={() => setModalSortByVisible(true)}>
                                <Text style={styles.ProductSortTxt}>Sort By</Text>
                                <Image style={styles.ProductSortIcon} source={Icon_52} resizeMode="center" />
                            </Pressable>
                        </View>

                        {/* Body */}
                        {new Array(3).fill(0).map((item, Productindex) => (
                            <View key={Productindex} style={styles.ProductContainer}>
                                {/* Single Product Block */}
                                <Pressable style={styles.Product} onPress={() => navigation.navigate("U_ProductScreen")}>
                                    <View style={styles.ProductImgContainer}>
                                        <Image
                                            style={styles.ProductImg}
                                            source={require("../../../../assets/Images/Images/Ornament.png")}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={styles.ProductData}>
                                        <View style={styles.ProductText}>
                                            <Text style={styles.ProductHeading}>Product Name</Text>
                                            <View style={styles.ProductPriceBlock}>
                                                <Text style={styles.ProductPriceOffter}>71% off</Text>
                                                <Text style={styles.ProductPriceCut}>3000</Text>
                                                <Text style={styles.ProductPrice}>$50</Text>
                                            </View>
                                            <Text style={styles.ProductRating}>4.5★</Text>
                                        </View>
                                    </View>
                                    <Pressable style={styles.ProductAddBtn} onPress={SuccessAlert}>
                                        <Image
                                            style={styles.ProductAddIcon}
                                            source={Icon_60}
                                            resizeMode="center"
                                        />
                                    </Pressable>
                                </Pressable>
                                {/* Single Product Block */}

                                <Pressable style={styles.Product} onPress={() => navigation.navigate("U_ProductScreen")}>
                                    <View style={styles.ProductImgContainer}>
                                        <Image
                                            style={styles.ProductImg}
                                            source={require("../../../../assets/Images/Images/Ornament.png")}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={styles.ProductData}>
                                        <View style={styles.ProductText}>
                                            <Text style={styles.ProductHeading}>Product Name</Text>
                                            <View style={styles.ProductPriceBlock}>
                                                <Text style={styles.ProductPriceOffter}>71% off</Text>
                                                <Text style={styles.ProductPriceCut}>3000</Text>
                                                <Text style={styles.ProductPrice}>$50</Text>
                                            </View>
                                            <Text style={styles.ProductRating}>4.5★</Text>
                                        </View>
                                    </View>
                                    <Pressable style={styles.ProductAddBtn} onPress={SuccessAlert}>
                                        <Image
                                            style={styles.ProductAddIcon}
                                            source={Icon_60}
                                            resizeMode="center"
                                        />
                                    </Pressable>
                                </Pressable>
                            </View>
                        ))}
                    </View>

                    {/* Paintings */}
                    <View style={[{ width }, styles.ProductBlock]}>
                        {/* Head */}
                        <View style={styles.ProductTop}>
                            <Text style={styles.ProductBlockHeading}>Popular</Text>
                            <Pressable style={styles.ProductSortBtn} onPress={() => setModalSortByVisible(true)}>
                                <Text style={styles.ProductSortTxt}>Sort By</Text>
                                <Image style={styles.ProductSortIcon} source={Icon_52} resizeMode="center" />
                            </Pressable>
                        </View>

                        {/* Body */}
                        {new Array(3).fill(0).map((item, Productindex) => (
                            <View key={Productindex} style={styles.ProductContainer}>
                                {/* Single Product Block */}
                                <Pressable style={styles.Product} onPress={() => navigation.navigate("U_ProductScreen")}>
                                    <View style={styles.ProductImgContainer}>
                                        <Image
                                            style={styles.ProductImg}
                                            source={require("../../../../assets/Images/Images/Paintings.png")}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={styles.ProductData}>
                                        <View style={styles.ProductText}>
                                            <Text style={styles.ProductHeading}>Product Name</Text>
                                            <View style={styles.ProductPriceBlock}>
                                                <Text style={styles.ProductPriceOffter}>71% off</Text>
                                                <Text style={styles.ProductPriceCut}>3000</Text>
                                                <Text style={styles.ProductPrice}>$50</Text>
                                            </View>
                                            <Text style={styles.ProductRating}>4.5★</Text>
                                        </View>
                                    </View>
                                    <Pressable style={styles.ProductAddBtn} onPress={SuccessAlert}>
                                        <Image
                                            style={styles.ProductAddIcon}
                                            source={Icon_60}
                                            resizeMode="center"
                                        />
                                    </Pressable>
                                </Pressable>
                                {/* Single Product Block */}

                                <Pressable style={styles.Product} onPress={() => navigation.navigate("U_ProductScreen")}>
                                    <View style={styles.ProductImgContainer}>
                                        <Image
                                            style={styles.ProductImg}
                                            source={require("../../../../assets/Images/Images/Paintings.png")}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={styles.ProductData}>
                                        <View style={styles.ProductText}>
                                            <Text style={styles.ProductHeading}>Product Name</Text>
                                            <View style={styles.ProductPriceBlock}>
                                                <Text style={styles.ProductPriceOffter}>71% off</Text>
                                                <Text style={styles.ProductPriceCut}>3000</Text>
                                                <Text style={styles.ProductPrice}>$50</Text>
                                            </View>
                                            <Text style={styles.ProductRating}>4.5★</Text>
                                        </View>
                                    </View>
                                    <Pressable style={styles.ProductAddBtn} onPress={SuccessAlert}>
                                        <Image
                                            style={styles.ProductAddIcon}
                                            source={Icon_60}
                                            resizeMode="center"
                                        />
                                    </Pressable>
                                </Pressable>
                            </View>
                        ))}
                    </View>

                    {/* Showpiece */}
                    <View style={[{ width }, styles.ProductBlock]}>
                        {/* Head */}
                        <View style={styles.ProductTop}>
                            <Text style={styles.ProductBlockHeading}>Popular</Text>
                            <Pressable style={styles.ProductSortBtn} onPress={() => setModalSortByVisible(true)}>
                                <Text style={styles.ProductSortTxt}>Sort By</Text>
                                <Image style={styles.ProductSortIcon} source={Icon_52} resizeMode="center" />
                            </Pressable>
                        </View>

                        {/* Body */}
                        {new Array(3).fill(0).map((item, Productindex) => (
                            <View key={Productindex} style={styles.ProductContainer}>
                                {/* Single Product Block */}
                                <Pressable style={styles.Product} onPress={() => navigation.navigate("U_ProductScreen")}>
                                    <View style={styles.ProductImgContainer}>
                                        <Image
                                            style={styles.ProductImg}
                                            source={require("../../../../assets/Images/Images/Showpiece.png")}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={styles.ProductData}>
                                        <View style={styles.ProductText}>
                                            <Text style={styles.ProductHeading}>Product Name</Text>
                                            <View style={styles.ProductPriceBlock}>
                                                <Text style={styles.ProductPriceOffter}>71% off</Text>
                                                <Text style={styles.ProductPriceCut}>3000</Text>
                                                <Text style={styles.ProductPrice}>$50</Text>
                                            </View>
                                            <Text style={styles.ProductRating}>4.5★</Text>
                                        </View>
                                    </View>
                                    <Pressable style={styles.ProductAddBtn} onPress={SuccessAlert}>
                                        <Image
                                            style={styles.ProductAddIcon}
                                            source={Icon_60}
                                            resizeMode="center"
                                        />
                                    </Pressable>
                                </Pressable>
                                {/* Single Product Block */}

                                <Pressable style={styles.Product} onPress={() => navigation.navigate("U_ProductScreen")}>
                                    <View style={styles.ProductImgContainer}>
                                        <Image
                                            style={styles.ProductImg}
                                            source={require("../../../../assets/Images/Images/Showpiece.png")}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={styles.ProductData}>
                                        <View style={styles.ProductText}>
                                            <Text style={styles.ProductHeading}>Product Name</Text>
                                            <View style={styles.ProductPriceBlock}>
                                                <Text style={styles.ProductPriceOffter}>71% off</Text>
                                                <Text style={styles.ProductPriceCut}>3000</Text>
                                                <Text style={styles.ProductPrice}>$50</Text>
                                            </View>
                                            <Text style={styles.ProductRating}>4.5★</Text>
                                        </View>
                                    </View>
                                    <Pressable style={styles.ProductAddBtn} onPress={SuccessAlert}>
                                        <Image
                                            style={styles.ProductAddIcon}
                                            source={Icon_60}
                                            resizeMode="center"
                                        />
                                    </Pressable>
                                </Pressable>
                            </View>
                        ))}
                    </View>
                </Animated.View>
            </View>

            {/* Filter Modal */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalFilterVisible}
                onRequestClose={() => {
                    setModalFilterVisible(!modalFilterVisible);
                }}
            >
                <View style={styles.ModalContainer}>
                    {/* Modal Toolbar */}
                    <View style={styles.ModalToolbar}>
                        <Pressable
                            onPress={() => setModalFilterVisible(false)}
                            style={styles.ModalToolBarBackIconBlock}
                        >
                            <Image
                                style={styles.ModalToolBarBackIcon}
                                source={Icon_29}
                                resizeMode="contain"
                            ></Image>
                        </Pressable>
                        <View style={styles.ModalToolbarTextContainer}>
                            <Text style={styles.ModalToolBarHeading}>Filters</Text>
                            <Pressable style={styles.ModalToolbarClearFilter} onPress={() => setModalFilterVisible(false)}>
                                <Text style={styles.ModalToolBarHeading}>Clear Filters</Text>
                            </Pressable>
                        </View>
                    </View>

                    {/* Modal Body */}
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        contentContainerStyle={styles.ModalBody}
                    >
                        <View style={styles.ModalDataContainer}>
                            <Text style={styles.ModalDataBlockHeading}>Price</Text>
                            {filters.map((filter, index) => (
                                <Pressable
                                    onPress={() => handleFilterSelection(index)}
                                    style={styles.ModalCheckBox}
                                    key={index}>
                                    <Checkbox
                                        onValueChange={() => handleFilterSelection(index)} value={filter.selected}
                                        color={PrimaryColor}
                                    />
                                    <Text style={styles.ModalCheckTitle}>{filter.label}</Text>
                                </Pressable>
                            ))}
                        </View>

                        <View style={styles.ModalDataContainer}>
                            <Text style={styles.ModalDataBlockHeading}>Customer Ratings</Text>
                            {filters1.map((filters1, index) => (
                                <Pressable
                                    onPress={() => handleFilterSelection1(index)}
                                    style={styles.ModalCheckBox}
                                    key={index}>
                                    <Checkbox
                                        onValueChange={() => handleFilterSelection1(index)} value={filters1.selected}
                                        color={PrimaryColor}
                                    />
                                    <Text style={styles.ModalCheckTitle}>{filters1.label}</Text>
                                </Pressable>
                            ))}
                        </View>

                        <View style={styles.ModalDataContainer}>
                            <Text style={styles.ModalDataBlockHeading}>Offers</Text>
                            {filters2.map((filters2, index) => (
                                <Pressable
                                    onPress={() => handleFilterSelection2(index)}
                                    style={styles.ModalCheckBox}
                                    key={index}>
                                    <Checkbox
                                        onValueChange={() => handleFilterSelection2(index)} value={filters2.selected}
                                        color={PrimaryColor}
                                    />
                                    <Text style={styles.ModalCheckTitle}>{filters2.label}</Text>
                                </Pressable>
                            ))}
                        </View>

                        <View style={styles.ModalDataContainer}>
                            <Text style={styles.ModalDataBlockHeading}>Discount</Text>
                            {filters3.map((filters3, index) => (
                                <Pressable
                                    onPress={() => handleFilterSelection3(index)}
                                    style={styles.ModalCheckBox}
                                    key={index}>
                                    <Checkbox
                                        onValueChange={() => handleFilterSelection3(index)} value={filters3.selected}
                                        color={PrimaryColor}
                                    />
                                    <Text style={styles.ModalCheckTitle}>{filters3.label}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </ScrollView>

                    {/* Modal Bottom */}
                    <View style={styles.ModalBottom}>
                        <View style={styles.ModalText}>
                            <Text style={styles.ModalFilterNumber}>2</Text>
                            <Text style={styles.ModalFilterFound}>Products Found</Text>
                        </View>
                        <Pressable style={styles.ModalBottomBtn} onPress={() => setModalFilterVisible(false)}>
                            <Text style={styles.ModalBottomBtnText}>Apply</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            {/* Sort By Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalSortByVisible}
                onRequestClose={() => {
                    setModalSortByVisible(!modalSortByVisible);
                }}
            >
                <View style={styles.SortByModalContainer}>
                    <Pressable style={styles.SortByModalTop} onPress={() => setModalSortByVisible(false)}></Pressable>
                    <View style={styles.SortByModalBottom}>
                        {/* Modal Toolbar */}
                        <View style={styles.ModalSortByToolbar}>
                            <View style={styles.ModalSortByToolbarTextContainer}>
                                <Text style={styles.ModalSortByToolBarHeading}>Sort By</Text>
                            </View>
                        </View>

                        {/* Modal Data */}
                        <View style={styles.ModalSortByBody}>
                            <View style={styles.ModalDataSortByContainer}>
                                {filters4.map((filters4, index) => (
                                    <Pressable
                                        onPress={() => handleFilterSelection4(index)}
                                        style={styles.ModalSortByCheckBox}
                                        key={index}>
                                        <Text style={styles.ModalSortByCheckTitle}>{filters4.label}</Text>
                                        <Checkbox
                                            onValueChange={() => handleFilterSelection4(index)} value={filters4.selected}
                                            color={PrimaryColor}
                                        />
                                    </Pressable>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </U_ScreenLayout>
    );
}

const styles = StyleSheet.create({
    // Common
    DataBlock: {
        paddingVertical: 20,
    },

    // Search Bar
    TopContainer: {
        width: Dimensions.get("window").width - 40,
        alignSelf: "center",
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    SearchBar: {
        position: "relative",
        height: 55,
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
    },
    SearchBarInput: {
        height: 55,
        width: "100%",
        elevation: 10,
        backgroundColor: White,
        borderRadius: 100,
        paddingLeft: 50,
        paddingRight: 50,
    },
    SearchIcon: {
        width: 20,
        height: 20,
        position: "absolute",
        left: 20,
    },
    FilterBlock: {
        position: "absolute",
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        height: 55,
        width: 55,
        zIndex: 10,
    },
    FilterIcon: {
        width: 20,
        height: 20,
    },
    CartBlock: {
        height: 55,
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
    },
    CartBack: {
        width: 50,
        height: 50,
        elevation: 10,
        backgroundColor: White,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    CartIcon: {
        width: 27,
        height: 27,
    },
    AddToCartNumber: {
        fontFamily: "Inter-Bold",
        color: "red",
        fontSize: 10,
        position: "absolute",
        top: 5,
    },

    // Slider Style
    SliderShaperate: {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: 200,
    },
    SliderCover: {
        position: "absolute",
        zIndex: 0,
        width: "100%",
        height: 200,
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
        height: 200,
    },

    // Category
    CategoryBlock: {},
    TabContainer: {
        paddingRight: 20,
    },
    TabBlock: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: White,
        elevation: 4,
        padding: 10,
        borderRadius: 10,
        margin: 20,
        marginTop: 0,
        marginRight: 0,
        gap: 10,
    },
    TabActiveBlock: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: PrimaryColor,
        elevation: 4,
        padding: 10,
        borderRadius: 10,
        margin: 20,
        marginTop: 0,
        marginRight: 0,
        gap: 10,
    },
    TabImage: {
        width: 25,
        height: 25,
    },
    TabActiveImage: {
        width: 25,
        height: 25,
    },
    TabText: {
        fontFamily: "Inter-SemiBold",
        fontSize: 17,
        color: TextColor,
    },
    TabActiveText: {
        fontFamily: "Inter-SemiBold",
        fontSize: 17,
        lineHeight: 30 * 1,
        color: White,
    },

    // Product Style
    ProductBlock: {},
    ProductTop: {
        width: Dimensions.get("window").width - 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingTop: 0,
    },
    ProductBlockHeading: {
        fontFamily: "Inter-SemiBold",
        fontSize: 22,
        color: PrimaryColor,
    },
    ProductSortBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: White,
        elevation: 4,
        gap: 5,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 100,
    },
    ProductSortTxt: {
        color: TextColor,
        fontFamily: "Inter-Regular",
        fontSize: 11,
    },
    ProductSortIcon: {
        height: 10,
        width: 10,
    },
    ProductContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: Dimensions.get("window").width - 40,
    },
    Product: {
        height: 200,
        width: Dimensions.get("window").width / 2 - 30,
        backgroundColor: White,
        padding: 10,
        borderRadius: 10,
        elevation: 5,
        position: "relative",
        marginBottom: 20,
    },
    ProductImgContainer: {
        width: "100%",
        height: "60%"
    },
    ProductImg: {
        width: "100%",
        height: "100%"
    },
    ProductData: {
        width: "100%",
        height: "40%",
        paddingTop: 10,
    },
    ProductText: {
        flexDirection: "column",
    },
    ProductHeading: {
        fontFamily: "Inter-SemiBold",
        fontSize: 15,
        color: PrimaryColor,
    },
    ProductPriceBlock: {
        flexDirection: "row",
        alignItems: "center",
    },
    ProductPriceOffter: {
        fontFamily: "Inter-SemiBold",
        fontSize: 14,
        color: SuccessText,
        paddingRight: 6,
    },
    ProductPriceCut: {
        fontFamily: "Inter-SemiBold",
        fontSize: 14,
        color: TextColor,
        paddingRight: 6,
        textDecorationLine: "line-through",
        textDecorationStyle: "solid"
    },
    ProductPrice: {
        fontFamily: "Inter-SemiBold",
        fontSize: 14,
        color: Black,
    },
    ProductRating: {
        fontFamily: "Inter-Regular",
        fontSize: 14,
        color: TextColor,
    },
    ProductAddBtn: {
        position: "absolute",
        zIndex: 1,
        top: 10,
        right: 10,
        backgroundColor: PrimaryColor,
        borderRadius: 100,
        padding: 5,
    },
    ProductAddIcon: {
        width: 14,
        height: 14,
    },

    // Modal
    ModalContainer: {
        flex: 1,
        backgroundColor: BackgroundColor,
        width: "100%",
        height: "100%",
    },
    ModalToolbar: {
        height: 60,
        backgroundColor: White,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 20,
        elevation: 10,
    },
    ModalToolBarBackIconBlock: {
        width: "10%",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    ModalToolBarBackIcon: {
        height: 25,
        width: 25,
    },
    ModalToolbarTextContainer: {
        width: "90%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    ModalToolBarHeading: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: Black,
    },
    ModalToolbarClearFilter: {},
    ModalBottom: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: BackgroundColor,
        elevation: 15,
    },
    ModalText: {
        width: "60%",
        flexDirection: "column",
    },
    ModalFilterNumber: {
        fontSize: 13,
        fontFamily: "Inter-SemiBold",
        color: TextColor,
    },
    ModalFilterFound: {
        fontSize: 13,
        fontFamily: "Inter-Regular",
    },
    ModalBottomBtn: {
        width: "40%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: PrimaryColor,
        borderRadius: 5,
    },
    ModalBottomBtnText: {
        fontSize: 16,
        fontFamily: "Inter-SemiBold",
        color: White,
    },
    ModalBody: {
        padding: 20,
        paddingBottom: 0,
    },
    ModalDataContainer: {
        width: Dimensions.get("window").width - 40,
        flexDirection: "column",
        marginBottom: 20,
    },
    ModalDataBlockHeading: {
        fontFamily: "Inter-SemiBold",
        fontSize: 15,
        marginBottom: 5,
    },
    ModalCheckBox: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5,
    },
    ModalCheckTitle: {
        fontFamily: "Inter-Regular",
        fontSize: 15,
        marginLeft: 10,
    },
    SortByModalContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    SortByModalTop: {
        height: "55%",
        opacity: 0.5,
        backgroundColor: Black,
    },
    SortByModalBottom: {
        height: "45%",
        backgroundColor: BackgroundColor,
    },
    ModalSortByToolbar: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20,
        borderBottomColor: TextColor,
        borderBottomWidth: 1,
    },
    ModalSortByToolbarTextContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    ModalSortByToolBarHeading: {
        fontSize: 15,
        fontFamily: "Inter-Regular",
        color: TextColor,
    },
    ModalSortByBody: {
        paddingHorizontal: 10,
    },
    ModalDataSortByContainer: {
        width: Dimensions.get("window").width - 40,
        flexDirection: "column",
        paddingTop: 5,
    },
    ModalSortByCheckBox: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        justifyContent: "space-between",
    },
    ModalSortByCheckTitle: {
        fontFamily: "Inter-Regular",
        fontSize: 15,
        marginLeft: 10,
    },
})
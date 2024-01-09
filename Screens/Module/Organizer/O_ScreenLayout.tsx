import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { ReactElement, useEffect, useState } from "react";
import { ScrollView, ScrollViewProps, Animated, BackHandler, Dimensions, Easing, Image, Pressable, StyleSheet, Text, View, Modal } from "react-native";
import { ToolBar } from "../../../Component/ToolBar";
import { Header } from "../../../Component/Header";
import PageBanner from "../../../Component/PageBanner";
import O_Footer from "../../../Component/O_Footer";
import PodcastPlayer from "../../../Component/PodcastPlayer";
import { BackgroundColor, Black, PrimaryColor, White } from "../../../Constant/Color";
import VideoContainer from "../../../Component/VideoContainer";
import { BlankImage, Sidemenu_1, Sidemenu_10, Sidemenu_11, Sidemenu_2, Sidemenu_3, Sidemenu_4, Sidemenu_5, Sidemenu_6, Sidemenu_7, Sidemenu_8, Sidemenu_9 } from "../../../Constant/Images";
import ProductBuy from "../../../Component/ProductBuy";
import ProductCart from "../../../Component/ProductCart";
import ProductCheckout from "../../../Component/ProductCheckout";
import { getUser } from "../../../store/userAsync";
import { useUser } from "../../../store/user";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

interface ScreenLayout extends ScrollViewProps {
    children: ReactElement | ReactElement[];
    title?: string;
    ToolBarHidden?: boolean;
    BannerHeading?: string;
    BannerSubHeading?: string;
    BannerHidden?: boolean;
    BannerImage?: any;
    HeaderHidden?: boolean;
    FooterHidden?: boolean;
    VideoHidden?: boolean;
    ProductBuyHidden?: boolean;
    ProductCartHidden?: boolean;
    ProductCheckoutHidden?: boolean;
    scrollRef?: React.RefObject<ScrollView>
}

// Drawer Function
const Navs = [
    {
        name: "Profile",
        link: "O_MyProfileScreen",
        icon: Sidemenu_1
    },
    {
        name: "Donate",
        link: "O_DonationScreen",
        icon: Sidemenu_2
    },
    {
        name: "Prayer Wall",
        link: "O_PrayerBoardScreen",
        icon: Sidemenu_3
    },
    {
        name: "Events",
        link: "O_EventScreen",
        icon: Sidemenu_4
    },
    {
        name: "Social",
        link: "O_SocialScreen",
        icon: Sidemenu_5
    },
    {
        name: "About Us",
        link: "O_AboutUsScreen",
        icon: Sidemenu_6
    },
    {
        name: "Contact Us",
        link: "O_ContactUsScreen",
        icon: Sidemenu_7
    },
    {
        name: "Privacy Policy",
        link: "O_PrivacyPolicyScreen",
        icon: Sidemenu_8
    },
    {
        name: "Terms & Condition",
        link: "O_TermsConditionScreen",
        icon: Sidemenu_9
    },
]

function DrawerView({ setDrawer }: any) {
    const Navigation = useNavigation<any>()
    const [modalVisible, setModalVisible] = useState(false);
    const Route = useRoute<any>();
    const [user, setUser] = useUser();

    function gotosettings() {
        Navigation.navigate("O_SettingScreen")
    }
    // function gotoLogin() {
    //     Navigation.navigate("O_SignInScreen")
    // }
    const navigate = useNavigation<any>()



    useEffect(() => {
        (async () => {
          setUser(await getUser());
        })();
      }, []);

    return (
        <SafeAreaView style={styles.DrawerWrapper}>
            {/* Drawer Header */}
            <View style={styles.DrawerHeader}>
                <View style={styles.DrawerProfile}>
                    <Image
                        source={BlankImage}
                        resizeMode="cover"
                        style={styles.DrawerAvatar}
                    />
                    <View>
                        <Text style={styles.DrawerProfileName}>{user?.name}</Text>
                        <Text style={styles.DrawerProfileStatus}>Status Active</Text>
                    </View>
                </View>
                <Pressable
                    onPress={() => setDrawer(false)}
                    style={styles.DrawerCloseButContainer}>
                    <Image style={styles.DrawerCloseImg} source={Sidemenu_11} resizeMode="center" />
                </Pressable>
            </View>

            {/* Menu */}
            <View style={{ marginTop: 50 }}>
                {Navs.map((nav, key) => (
                    <Pressable
                        style={styles.nav}
                        key={key}
                        onPress={() => {
                            setDrawer(false)
                            navigate.navigate(nav.link)
                        }}
                    >
                        <Image
                            style={styles.navImage}
                            source={nav.icon as any} resizeMode="center" />
                        <Text style={[styles.navText, { color: nav.link == Route.name ? "rgba(255, 255, 255, 1.0)" : "rgba(255, 255, 255, 0.5)" }]}>{nav.name}</Text>
                    </Pressable>
                ))}
            </View>

            {/* Drawer Bottom */}
            <View style={styles.DrawerBottom}>
                <Pressable onPress={gotosettings} >
                    <View style={styles.DrawerSettings}>
                        <Image
                            style={styles.navImage}
                            source={Sidemenu_10} resizeMode="center" />
                        <Text style={styles.navText}>Settings</Text>
                    </View>
                </Pressable>
                <View style={styles.Hr}></View>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Text
                        style={styles.navText}>Logout</Text>
                </Pressable>
            </View>

            {/* Logout Confirm Modal */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.ModalBlock}>
                    <View style={styles.ModalTop}></View>
                    <View style={styles.ModalContainer}>
                        <View style={styles.ModalLeft}></View>
                        <View style={styles.ModalBack}>
                            <Text style={styles.ModalHeading}>Log Out?</Text>
                            <Text style={styles.ModalSubHeading}>Are you sure want to log out?</Text>
                            <View style={styles.ModalBtnContainer}>
                                <Pressable
                                    style={styles.ModalBackBtn}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.ModalBackBtnText}>Cancle</Text>
                                </Pressable>
                                <Pressable
                                    style={styles.ModalLogoutBtn}
                                    onPress={() => Navigation.navigate("U_SignInScreen")}
                                >
                                    <Text style={styles.ModalLogoutBtnText}>Log Out</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={styles.ModalRight}></View>
                    </View>
                    <View style={styles.ModalBottom}></View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default function O_ScreenLayout(props: ScreenLayout) {
    const navigation = useNavigation<any>();

    const [drawer, setDrawer] = React.useState(false)
    const scale = React.useRef(new Animated.Value(1)).current;

    React.useEffect(() => {
        if (drawer) {
            Animated.timing(scale, {
                toValue: 0.76,
                useNativeDriver: true,
                duration: 400,
                easing: Easing.circle
            }).start()
        } else {
            Animated.timing(scale, {
                toValue: 1,
                useNativeDriver: true,
                duration: 400,
                easing: Easing.circle
            }).start()
        }
    }, [drawer])

    React.useEffect(() => {
        function handler() {
            if (drawer) {
                setDrawer(false)
                return true
            }
            return undefined
        }

        BackHandler.addEventListener("hardwareBackPress", handler)
        return () => BackHandler.removeEventListener("hardwareBackPress", handler)
    }, [drawer])

    const translateX = scale.interpolate({
        inputRange: [0.72, 1],
        outputRange: [Dimensions.get('window').width / 2 + 100, 0]
    })
    const borderRadius = scale.interpolate({
        inputRange: [0.7, 1],
        outputRange: [40, 0]
    })

    return (
        <SafeAreaView style={styles.Container}>
            <DrawerView setDrawer={setDrawer} />
            <Animated.View
                style={[styles.contentWrapper, { transform: [{ scale }, { translateX }] }, { borderRadius }]}>
                {!props.ToolBarHidden ? <ToolBar title={props.title} setDrawer={setDrawer} /> : null}
                {!props.HeaderHidden ? <Header title={props.title} setDrawer={setDrawer} /> : null}
                {!props.VideoHidden ? <VideoContainer /> : null}
                <ScrollView {...props} ref={props.scrollRef} showsVerticalScrollIndicator={false}>
                    {!props.BannerHidden ? (
                        <PageBanner
                            BannerHeading={props.BannerHeading}
                            BannerSubHeading={props.BannerSubHeading}
                            BannerImage={props.BannerImage}
                        />
                    ) : null}
                    {props.children}
                </ScrollView>
                {!props.FooterHidden ? <O_Footer /> : null}
                {!props.ProductBuyHidden ? <ProductBuy /> : null}
                {!props.ProductCartHidden ? <ProductCart /> : null}
                {!props.ProductCheckoutHidden ? <ProductCheckout /> : null}
            </Animated.View>
            <PodcastPlayer />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
        height: "100%",
        width: "100%",
        position: "relative",
        backgroundColor: BackgroundColor,
        flex: 1,
    },
    DrawerWrapper: {
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: PrimaryColor,
        left: 0,
        top: 0,
        padding: 20
    },
    DrawerHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    DrawerProfile: {
        flexDirection: "row",
        alignItems: "center"
    },
    DrawerAvatar: {
        height: 60,
        width: 60,
        borderRadius: 100,
        marginRight: 15
    },
    DrawerProfileName: {
        fontSize: 18,
        fontFamily: "Inter-SemiBold",
        color: White
    },
    DrawerProfileStatus: {
        fontSize: 12,
        color: White,
        fontFamily: "Inter-Regular",
        opacity: .6
    },
    DrawerCloseImg: {
        width: 42,
        height: 42,
    },
    DrawerCloseButContainer: {
        alignItems: "center",
        justifyContent: "flex-end",
    },
    nav: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        height: 60,
    },
    navImage: {
        height: 16.5,
        width: 16.5,
        marginRight: 13
    },
    navText: {
        fontSize: 14.6,
        fontFamily: "Inter-SemiBold",
        color: "rgba(255, 255, 255, 0.5)",
        letterSpacing: 1.2
    },
    DrawerBottom: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        bottom: 30,
        left: 20,
    },
    DrawerSettings: {
        flexDirection: "row",
        alignItems: "center",
    },
    Hr: {
        width: 1.2,
        height: 20,
        backgroundColor: White,
        opacity: .5,
        marginLeft: 15,
        marginRight: 15,
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: '#F5F5FA',
        overflow: 'hidden'
    },
    contentContainer: {
        height: Dimensions.get('window').height - 100,
    },

    // Modal
    ModalBlock: {
        flex: 1,
        height: "100%",
    },
    ModalTop: {
        height: "37%",
        backgroundColor: Black,
        opacity: 0.5,
    },
    ModalBottom: {
        height: "37%",
        backgroundColor: Black,
        opacity: 0.5,
    },
    ModalContainer: {
        height: "26%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
    },
    ModalLeft: {
        width: 15,
        backgroundColor: Black,
        opacity: 0.5,
    },
    ModalRight: {
        width: 15,
        backgroundColor: Black,
        opacity: 0.5,
    },
    ModalBack: {
        width: Dimensions.get("window").width - 30,
        backgroundColor: White,
        height: "100%",
        padding: 20,
        justifyContent: "center",
    },
    ModalHeading: {
        fontFamily: "Inter-SemiBold",
        fontSize: 20,
        marginBottom: 10,
        letterSpacing: 0.5,
    },
    ModalSubHeading: {
        fontFamily: "Inter-Regular",
        fontSize: 16,
    },
    ModalBtnContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
    },
    ModalBackBtn: {
        height: 45,
        width: "35%",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: PrimaryColor,
    },
    ModalBackBtnText: {
        color: White,
        fontFamily: "Inter-SemiBold",
        fontSize: 15,
    },
    ModalLogoutBtn: {
        height: 45,
        width: "35%",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: PrimaryColor,
    },
    ModalLogoutBtnText: {
        color: PrimaryColor,
        fontFamily: "Inter-SemiBold",
        fontSize: 15,
    },
});

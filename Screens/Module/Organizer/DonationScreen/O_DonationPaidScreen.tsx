import { useNavigation } from "@react-navigation/native";
import O_ScreenLayout from "../O_ScreenLayout";
import { View, StyleSheet, Image, Modal, Text, Dimensions, Pressable, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { BackgroundColor, PrimaryColor, Shadow, SuccessBack, SuccessText, TextColor, White } from "../../../../Constant/Color";
import { useSwipe } from "../../../../hooks/onSwipe";
import { SnackBar } from "../../../../Component/SnackBar";
import { Back_1 } from "../../../../Constant/Images";

export default function O_DonationPaidScreen() {
    const navigation = useNavigation<any>();
    const [modalVisible, setModalVisible] = useState(false);
    const { onTouchStart, onTouchEnd } = useSwipe(handleBottomSwipe);


    // SnackBar Alert
    const SuccessAlert = () => {
        SnackBar.show({
            text: "You Donated Successfully.",
            type: "LONG",
            actionText: "Ok",
            onActionPress: () => {
                SnackBar.hide();
            },
            backgroundColor: SuccessBack,
            color: SuccessText,
        });
        navigation.goBack();
    };

    // Gesture Handle
    function handleBottomSwipe() {
        setModalVisible(!modalVisible);
    }

    return (
        <O_ScreenLayout
            HeaderHidden
            BannerHidden
            VideoHidden
            ProductBuyHidden
            ProductCartHidden
            ProductCheckoutHidden
            title="Donation"
        >
            <View style={styles.Block}>
                <View style={styles.BlockHeading}>
                    <Text style={styles.DataBlockHeading}>
                        Education Kits for Poor Children’s
                    </Text>
                    <Text style={styles.DataBlockSubHeading}>
                        By Life of Giving Organization
                    </Text>
                </View>

                <View style={styles.ImageContainer}>
                    <Image
                        style={styles.ImageBody}
                        source={require("../../../../assets/Images/Images/Donation1.png")}
                        resizeMode="cover"
                    />
                    <Image
                        style={styles.ImageBack}
                        source={Back_1}
                        resizeMode="cover"
                    />
                </View>

                <View style={styles.BlockData}>
                    <Text style={styles.DataBlockHeading}>
                        About
                    </Text>
                    <Text style={styles.DataBlockSubHeading}>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the
                        visual form of a document or a typeface without
                        relying on meaningful content. Lorem ipsum may be
                        used as a placeholder before final copy is available.
                        Pellentesque habitant morbi tristique senectus et
                        netus et malesuada fames ac turpis egestas.
                        Quisque non lacus dui. Nam nulla nisi, condimentum
                        sed velit ac, sollicitudin laoreet nunc.
                    </Text>
                </View>

                <View style={styles.BlockData}>
                    <Text style={styles.DataBlockHeading}>
                        Participants
                    </Text>
                    <View style={styles.DonationCovers}>
                        <View style={styles.DonationCoverImgs}>
                            <Image style={[styles.DonationCoverImg, styles.DonationImg1]} source={require("../../../../assets/Images/Images/Cover1.png")} resizeMode="cover" />
                            <Image style={[styles.DonationCoverImg, styles.DonationImg2]} source={require("../../../../assets/Images/Images/Cover2.png")} resizeMode="cover" />
                            <Image style={[styles.DonationCoverImg, styles.DonationImg3]} source={require("../../../../assets/Images/Images/Cover3.png")} resizeMode="cover" />
                            <Image style={[styles.DonationCoverImg, styles.DonationImg4]} source={require("../../../../assets/Images/Images/Cover4.png")} resizeMode="cover" />
                            <Image style={[styles.DonationCoverImg, styles.DonationImg5]} source={require("../../../../assets/Images/Images/Cover5.png")} resizeMode="cover" />
                        </View>
                        <Text style={styles.DonationCoverText}>+ 238 More</Text>
                    </View>
                </View>

                <Pressable style={styles.DonateBtn} onPress={() => setModalVisible(true)}>
                    <Image style={styles.DonateImg} source={Back_1} />
                    <Text style={styles.DonateText}>
                        Donate Now
                    </Text>
                </Pressable>
            </View>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.ModalContainer}>
                    <View style={styles.ModalBody}>
                        <View style={styles.ModalData}>
                            {/* Drag to close section */}
                            <View style={styles.DragContainer} onTouchEnd={onTouchEnd}>
                                <View style={styles.DragBar}></View>
                            </View>

                            {/* Data */}
                            <KeyboardAvoidingView>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <Text style={styles.DataBlockHeading}>
                                        How much do you wish to Donate?
                                    </Text>

                                    <View style={styles.ModalDonationData}>
                                        <Pressable style={styles.ModalDonateSec}>
                                            <Text style={styles.ModalDonatePrice}>
                                                $50
                                            </Text>
                                        </Pressable>
                                        <Pressable style={styles.ModalDonateSec}>
                                            <Text style={styles.ModalDonatePrice}>
                                                $100
                                            </Text>
                                        </Pressable>
                                        <Pressable style={styles.ModalDonateSec}>
                                            <Text style={styles.ModalDonatePrice}>
                                                $200
                                            </Text>
                                        </Pressable>
                                        {/* OR */}
                                        <View style={styles.ModalDonateDiv}>
                                            <View style={styles.ModalDonateBar}></View>
                                            <Text style={styles.ModalDonatePriceBar}>
                                                OR
                                            </Text>
                                        </View>
                                        <TextInput style={styles.ModalTextInput} keyboardType="number-pad" placeholder="Enter Price Manually">
                                        </TextInput>
                                    </View>

                                    <Pressable style={styles.ModalDonateBtn} onPress={SuccessAlert}>
                                        <Image style={styles.ModalDonateImg} source={Back_1} />
                                        <Text style={styles.ModalDonateText}>
                                            Donate
                                        </Text>
                                    </Pressable>
                                </ScrollView>
                            </KeyboardAvoidingView>
                        </View>
                    </View>
                </View>
            </Modal>
        </O_ScreenLayout>
    );
}

const styles = StyleSheet.create({
    Block: {
        padding: 20,
    },
    BlockHeading: {
        width: Dimensions.get("window").width - 40,
        alignSelf: "center",
    },
    DataBlockHeading: {
        fontFamily: "Inter-SemiBold",
        fontSize: 22,
        color: PrimaryColor,
    },
    DataBlockSubHeading: {
        fontFamily: "Inter-Regular",
        fontSize: 13,
        lineHeight: 13 * 1.5,
        color: TextColor,
    },
    ImageContainer: {
        width: Dimensions.get("window").width - 40,
        alignSelf: "center",
        height: 200,
        position: "relative",
        marginTop: 50,
        marginBottom: 20,
    },
    ImageBody: {
        position: "absolute",
        zIndex: 1,
        width: "60%",
        height: 220,
        bottom: 0,
        right: 20,
    },
    ImageBack: {
        height: "100%",
        width: "100%",
        zIndex: 0,
        borderRadius: 15,
    },
    BlockData: {
        width: Dimensions.get("window").width - 40,
        alignSelf: "center",
        marginBottom: 20,
    },
    DonationCovers: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 15,
    },
    DonationCoverImgs: {
        position: "relative",
    },
    DonationCoverImg: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    DonationImg1: {
        zIndex: 1,
    },
    DonationImg2: {
        position: "absolute",
        left: 20,
        zIndex: 0,
    },
    DonationImg3: {
        position: "absolute",
        left: 40,
        zIndex: -1,
    },
    DonationImg4: {
        position: "absolute",
        left: 60,
        zIndex: -2,
    },
    DonationImg5: {
        position: "absolute",
        left: 80,
        zIndex: -3,
    },
    DonationCoverText: {
        fontFamily: "Inter-Regular",
        color: TextColor,
        fontSize: 12,
        paddingLeft: 90,
    },

    // Donate Button
    DonateBtn: {
        width: Dimensions.get("window").width - 40,
        alignSelf: "center",
        height: 60,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    DonateImg: {
        width: "100%",
        height: 60,
        borderRadius: 100,
    },
    DonateText: {
        position: "absolute",
        fontFamily: "Inter-SemiBold",
        fontSize: 17,
        color: White,
    },

    // Modal
    ModalContainer: {
        backgroundColor: Shadow,
        height: "100%",
    },
    ModalBody: {
        position: "absolute",
        width: "100%",
        height: "70%",
        backgroundColor: BackgroundColor,
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    ModalData: {
        padding: 20,
        paddingTop: 10,
        position: "relative",
    },
    DragContainer: {
        height: 20,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    DragBar: {
        width: 50,
        height: 4,
        borderRadius: 50,
        backgroundColor: TextColor,
        opacity: 0.7,
    },
    ModalDonationData: {},
    ModalDonateSec: {
        width: Dimensions.get("window").width - 40,
        alignSelf: "center",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        borderColor: TextColor,
        borderWidth: 1.5,
        marginVertical: 5,
    },
    ModalDonatePrice: {
        fontFamily: "Inter-SemiBold",
        fontSize: 15,
        color: TextColor,
    },
    ModalDonateDiv: {
        width: Dimensions.get("window").width - 40,
        alignSelf: "center",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        position: "relative",
    },
    ModalDonateBar: {
        width: Dimensions.get("window").width - 40,
        height: 1.5,
        backgroundColor: TextColor,
        position: "absolute",
    },
    ModalDonatePriceBar: {
        fontFamily: "Inter-SemiBold",
        fontSize: 15,
        color: TextColor,
        backgroundColor: BackgroundColor,
        paddingLeft: 20,
        paddingRight: 20,
    },
    ModalTextInput: {
        width: Dimensions.get("window").width - 40,
        alignSelf: "center",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        borderColor: TextColor,
        borderWidth: 1.5,
        marginVertical: 10,
        paddingLeft: 30,
        paddingRight: 30,
    },
    ModalDonateBtn: {
        width: Dimensions.get("window").width - 40,
        alignSelf: "center",
        height: 60,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    ModalDonateImg: {
        width: "100%",
        height: 60,
        borderRadius: 100,
    },
    ModalDonateText: {
        position: "absolute",
        fontFamily: "Inter-SemiBold",
        fontSize: 17,
        color: White,
    },
})
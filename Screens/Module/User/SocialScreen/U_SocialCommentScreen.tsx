import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, Image, Pressable, Dimensions, Modal, TextInput } from "react-native";
import U_ScreenLayout from "../U_ScreenLayout";
import { BackgroundColor, Shadow, SuccessBack, SuccessText, TextColor, White } from "../../../../Constant/Color";
import CommentShareAccordion from "../../../../Component/CommentShareAccordion";
import { useSwipe } from "../../../../hooks/onSwipe";
import { SnackBar } from "../../../../Component/SnackBar";
import { Back_3, BlankImage, HomeIcon_4 } from "../../../../Constant/Images";

export default function U_SocialCommentScreen() {
    const navigation = useNavigation<any>();
    const [rplymodalVisible, setRplyModalVisible] = useState(false);
    const [commentmodalVisible, setCommentModalVisible] = useState(false);
    const { onTouchStart, onTouchEnd } = useSwipe(handleBottomSwipe);

    // SnackBar Alert
    const SuccessAlert = () => {
        SnackBar.show({
            text: "You successfully responded.",
            type: "LONG",
            actionText: "Ok",
            onActionPress: () => {
                SnackBar.hide();
            },
            backgroundColor: SuccessBack,
            color: SuccessText,
        });
    };

    // Gesture Handle
    function handleBottomSwipe() {
        setRplyModalVisible(!rplymodalVisible);
    }

    return (
        <U_ScreenLayout
            HeaderHidden
            BannerHidden
            VideoHidden
            ProductBuyHidden
            ProductCartHidden
            ProductCheckoutHidden
            title="Comments"
        >
            <KeyboardAvoidingView>
                <View style={styles.Container}>
                    {/* Comment Button */}
                    <View style={styles.ButtonContainer}>
                        <Pressable style={styles.CommentBtn} onPress={() => setCommentModalVisible(true)}>
                            <Text style={styles.CommentBtnText}>Post Comment</Text>
                            <Image style={styles.CommentBtnBack} source={HomeIcon_4} />
                        </Pressable>
                    </View>

                    {/* Comments Section */}
                    {new Array(3).fill(0).map((item, index) => (
                        <View key={index} style={styles.CommentBlock}>
                            <View style={styles.CommentImage}>
                                <Image
                                    style={styles.CommentImg}
                                    source={BlankImage}
                                    resizeMode="cover"
                                />
                            </View>

                            <View style={styles.CommentDetails}>
                                <View style={styles.CommentData}>
                                    <Text style={styles.CommentName}>User Name</Text>
                                    <Text style={styles.CommentTime}>Comment Date</Text>
                                </View>
                                <View style={styles.CommentLine}>
                                    <Text style={styles.CommentLineText}>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    </Text>
                                </View>
                                <CommentShareAccordion
                                    setModalState={setRplyModalVisible}
                                    replies={[
                                        {
                                            name: "User One",
                                            date: "Tue, 08 Aug 2023 07:33",
                                            image: BlankImage,
                                            comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                                        },
                                        {
                                            name: "User Two",
                                            date: "Wed, 09 Aug 2023 12:02",
                                            image: BlankImage,
                                            comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit, Lorem ipsum."
                                        },
                                        {
                                            name: "User Three",
                                            date: "Thu, 10 Aug 2023 12:02",
                                            image: BlankImage,
                                            comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit, Lorem ipsum."
                                        },
                                    ]} />
                            </View>
                        </View>
                    ))}
                </View>

                {/* Reply Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={rplymodalVisible}
                    onRequestClose={() => {
                        setRplyModalVisible(!rplymodalVisible);
                    }}>
                    <View style={styles.ModalContainer}>
                        <View style={styles.ModalBody}>
                            <View style={styles.ModalData}>
                                {/* Drag to close section */}
                                <View style={styles.DragContainer} onTouchEnd={onTouchEnd}>
                                    <View style={styles.DragBar}></View>
                                </View>

                                <View style={styles.InputBlock}>
                                    <View style={styles.Input}>
                                        <TextInput style={styles.InputField} multiline={true} placeholder="Replay">
                                        </TextInput>
                                        <Image
                                            style={styles.InputImg}
                                            source={Back_3}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>

                                <Pressable style={styles.SubmitBtn} onPress={SuccessAlert}>
                                    <Text style={styles.SubmitBtnText}>Send</Text>
                                    <Image style={styles.SubmitBtnBack} source={HomeIcon_4} />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>

                {/* Comment Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={commentmodalVisible}
                    onRequestClose={() => {
                        setCommentModalVisible(!commentmodalVisible);
                    }}>
                    <View style={styles.ModalContainer}>
                        <View style={styles.ModalBody}>
                            <View style={styles.ModalData}>
                                {/* Drag to close section */}
                                <View style={styles.DragContainer}>
                                    <View style={styles.DragBar}></View>
                                </View>

                                <View style={styles.InputBlock}>
                                    <View style={styles.Input}>
                                        <TextInput style={styles.InputField} multiline={true} placeholder="Comment">
                                        </TextInput>
                                        <Image
                                            style={styles.InputImg}
                                            source={Back_3}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>

                                <Pressable style={styles.SubmitBtn} onPress={SuccessAlert}>
                                    <Text style={styles.SubmitBtnText}>Send</Text>
                                    <Image style={styles.SubmitBtnBack} source={HomeIcon_4} />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </KeyboardAvoidingView>
        </U_ScreenLayout >
    );
}

const styles = StyleSheet.create({
    Container: {},
    // Comment Button
    ButtonContainer: {
        padding: 20,
    },
    CommentBtn: {
        elevation: 10,
        backgroundColor: White,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        width: 150,
        height: 50,
        position: "relative",
        alignSelf: "flex-start",
    },
    CommentBtnText: {
        color: White,
        fontFamily: "Inter-SemiBold",
        fontSize: 14,
        zIndex: 1,
    },
    CommentBtnBack: {
        borderRadius: 50,
        width: 150,
        height: 50,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    // Comments
    CommentBlock: {
        flexDirection: "row",
        width: Dimensions.get("window").width - 40,
        alignSelf: "center",
    },
    CommentImage: {
        width: 50,
    },
    CommentImg: {
        height: 50,
        width: 50,
        borderRadius: 100,
    },
    CommentDetails: {
        width: Dimensions.get("window").width - 100,
        marginLeft: 10,
        flexDirection: "column",
        gap: 10,
    },
    CommentData: {
        gap: 2,
    },
    CommentName: {
        fontFamily: "Inter-Medium",
        fontSize: 14,
    },
    CommentTime: {
        fontFamily: "Inter-Medium",
        fontSize: 12,
        color: TextColor,
    },
    CommentLine: {},
    CommentLineText: {
        fontFamily: "Inter-Regular",
        fontSize: 15,
        lineHeight: 15 * 1.5
    },
    CommentIconBlock: {
        flexDirection: "row",
        gap: 20,
    },
    CommentIcon: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        position: "relative",
    },
    CommentIconImg: {
        width: 15,
        height: 15,
    },

    // Modal
    ModalContainer: {
        backgroundColor: Shadow,
        height: "100%",
    },
    ModalBody: {
        position: "absolute",
        width: "100%",
        height: "40%",
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

    // Input Block
    InputBlock: {
        width: Dimensions.get("window").width - 40,
    },
    Input: {
        width: Dimensions.get("window").width - 40,
        height: 180,
        alignSelf: "center",
        position: "relative",
        verticalAlign: "top",
        textAlign: "left",
        paddingVertical: 20,

    },
    InputField: {
        zIndex: 1,
        width: Dimensions.get("window").width - 40,
        paddingHorizontal: 40,
    },
    InputImg: {
        width: Dimensions.get("window").width - 40,
        height: 180,
        position: "absolute",
        zIndex: 0,
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
        marginTop: 35,
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
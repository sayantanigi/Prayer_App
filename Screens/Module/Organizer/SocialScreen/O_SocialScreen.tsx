import { useNavigation } from "@react-navigation/native";
import O_ScreenLayout from "../O_ScreenLayout";
import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, Image, Pressable, Dimensions, Modal } from "react-native";
import { BackgroundColor, Black, PrimaryColor, Shadow, TextColor, White } from "../../../../Constant/Color";
import * as ImagePicker from 'expo-image-picker';
import { useSwipe } from "../../../../hooks/onSwipe";
import { AntDesign } from '@expo/vector-icons';
import { BlankImage, HomeIcon_4, Icon_16, Icon_24, Icon_25, Icon_26 } from "../../../../Constant/Images";

export default function O_SocialScreen() {
    const navigation = useNavigation<any>();
    const [image, setImage] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const { onTouchStart, onTouchEnd } = useSwipe(handleBottomSwipe)

    // Image Picker
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled && result.assets.length > 0) {
            setImage(result.assets[0].uri);
        }
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
            title="Social"
        >
            <View style={styles.Container}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    style={styles.TopSection}
                >
                    {/* Add Image */}
                    <Pressable style={styles.AddImageBlock} onPress={() => setModalVisible(true)}>
                        <View style={styles.AddImageContainer}>
                            <Image
                                style={styles.AddImage}
                                source={Icon_24}
                                resizeMode="center"
                            />
                        </View>
                        <Text style={styles.AddImageText}>Add</Text>
                    </Pressable>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                    >
                        {/* Single Profile Block */}
                        {new Array(10).fill(0).map((item, Profileindex) => (
                            <Pressable key={Profileindex} style={styles.ProfileBlock}>
                                <Image
                                    style={styles.ProfileImage}
                                    source={BlankImage}
                                    resizeMode="center"
                                />
                                <Text style={styles.ProfileText}>User</Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                </ScrollView>

                {/* Single Post Block */}
                {new Array(5).fill(0).map((item, Postindex) => (
                    <View key={Postindex} style={styles.PostBlock}>
                        <View style={styles.PostTop}>
                            <Image
                                style={styles.PostProfile}
                                source={BlankImage}
                                resizeMode="cover"
                            />
                            <Text style={styles.PostName}>User Name</Text>
                        </View>

                        <Image
                            style={styles.PostImage}
                            source={BlankImage}
                        />

                        <View style={styles.PostBottom}>
                            <Pressable style={styles.PostLikeBtn}>
                                <Image
                                    style={styles.PostImg}
                                    source={Icon_16}
                                    resizeMode="center"
                                />
                                <Text style={styles.PostText}>200</Text>
                            </Pressable>
                            <Pressable style={styles.PostCommentBtn} onPress={() => navigation.navigate("O_SocialCommentScreen")}>
                                <Image
                                    style={styles.PostImg}
                                    source={Icon_25}
                                    resizeMode="center"
                                />
                                <Text style={styles.PostText}>25</Text>
                            </Pressable>
                            <Pressable style={styles.PostShareBtn}>
                                <Image
                                    style={styles.PostImg}
                                    source={Icon_26}
                                    resizeMode="center"
                                />
                            </Pressable>
                        </View>
                    </View>
                ))}
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

                            {/* After Upload Image */}
                            {image &&
                                <View style={styles.UploadBlock}>
                                    <Image
                                        source={{ uri: image }}
                                        style={styles.UploadImage} />
                                    <View style={styles.UploadBtnContainer}>
                                        <Pressable style={styles.UploadBtn}>
                                            <Text style={styles.UploadBtnText}>Submit</Text>
                                            <Image style={styles.UploadBtnBack}
                                                source={HomeIcon_4}
                                            />
                                        </Pressable>
                                    </View>
                                </View>
                            }

                            <View style={styles.ModalAddContainer}>
                                <Text style={styles.ModalAddText}>Add Post</Text>
                                <Pressable style={styles.ModalAddBtn} onPress={pickImage}>
                                    <AntDesign name="plus" size={25} color="white" />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </O_ScreenLayout>
    );
}

const styles = StyleSheet.create({
    Container: {},
    TopSection: {
        marginBottom: 20,
    },

    // Add Image Block
    AddImageBlock: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    AddImageContainer: {
        backgroundColor: White,
        borderRadius: 100,
        height: 60,
        width: 60,
        elevation: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    AddImage: {
        width: 22,
        height: 22,
    },
    AddImageText: {
        fontFamily: "Inter-Medium",
        fontSize: 12,
        marginTop: 5,
    },

    // Profile Block
    ProfileBlock: {
        padding: 20,
        paddingLeft: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    ProfileImage: {
        height: 60,
        width: 60,
        borderRadius: 100,
    },
    ProfileText: {
        fontFamily: "Inter-Medium",
        fontSize: 12,
        marginTop: 5,
    },

    // Post Block
    PostBlock: {
        width: Dimensions.get("window").width - 40,
        alignSelf: "center",
        backgroundColor: White,
        shadowColor: Black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        borderRadius: 15,
        marginBottom: 20,
    },
    PostTop: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    PostProfile: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    PostName: {
        paddingLeft: 10,
        fontFamily: "Inter-Medium",
        fontSize: 14,
    },
    PostImage: {
        width: "100%",
        height: 300,
    },
    PostBottom: {
        padding: 10,
        paddingBottom: 15,
        paddingTop: 15,
        flexDirection: "row",
    },
    PostLikeBtn: {
        backgroundColor: White,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: Black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 50,
        height: 40,
        marginRight: 10,
    },
    PostCommentBtn: {
        backgroundColor: White,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: Black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 50,
        height: 40,
        marginRight: 10,
    },
    PostShareBtn: {
        backgroundColor: White,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: Black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 100,
        height: 40,
        width: 40,
    },
    PostImg: {
        width: 15,
        height: 15,
    },
    PostText: {
        paddingLeft: 10,
        fontFamily: "Inter-Medium",
        fontSize: 13,
    },

    // Modal
    ModalContainer: {
        backgroundColor: Shadow,
        height: "100%",
    },
    ModalBody: {
        position: "absolute",
        width: "100%",
        height: "55%",
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
    ModalAddContainer: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 30,
    },
    ModalAddBtn: {
        shadowColor: Black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 60,
        width: 60,
        backgroundColor: PrimaryColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    ModalAddText: {
        fontFamily: "Inter-Medium",
        fontSize: 15,
        marginBottom: 10,
    },

    // Upload Image
    UploadBlock: {
        position: "absolute",
        top: 30,
        left: 20,
        right: 20,
        bottom: 20,
        marginBottom: 0,
        zIndex: 1,
        height: "auto",
        backgroundColor: BackgroundColor,
    },
    UploadImage: {
        width: Dimensions.get("window").width - 60,
        height: 300,
        borderRadius: 15,
        alignSelf: "center",
    },
    UploadBtnContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    UploadBtn: {
        elevation: 10,
        backgroundColor: White,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        width: 120,
        height: 50,
        position: "relative",
        alignSelf: "center",
        marginTop: 30,
    },
    UploadBtnText: {
        color: White,
        fontFamily: "Inter-SemiBold",
        fontSize: 14,
        zIndex: 1,
    },
    UploadBtnBack: {
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
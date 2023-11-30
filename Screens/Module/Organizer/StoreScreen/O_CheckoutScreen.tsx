import { useNavigation } from "@react-navigation/native";
import O_ScreenLayout from "../O_ScreenLayout";
import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, Image, Modal, TextInput, Dimensions, ScrollView } from "react-native";
import { BackgroundColor, Black, PrimaryColor, TextColor, White } from "../../../../Constant/Color";
import { Back_1, Icon_1, Icon_29, Icon_64, Icon_65, Icon_66 } from "../../../../Constant/Images";
import Checkbox from "expo-checkbox";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function O_CheckoutScreen() {
    const navigation = useNavigation<any>();
    const [modalCardVisible, setModalCardVisible] = useState(false);
    const [modalAddressVisible, setModalAddressVisible] = useState(false);
    const [modalAddSelectVisible, setModalAddSelectVisible] = useState(false);
    const [payments, setPayments] = React.useState([
        {
            Image: Icon_64,
            label: "Apple Pay",
            selected: false
        },
        {
            Image: Icon_65,
            label: "Pay Pal",
            selected: false
        },
        {
            Image: Icon_66,
            label: "Visa",
            selected: true
        },
    ])

    // Payment Select Function
    function handlePaymentSelection(index: number) {
        payments[index].selected = !payments[index].selected;
        setPayments([...payments])
    }

    return (
        <O_ScreenLayout
            BannerHidden
            HeaderHidden
            VideoHidden
            FooterHidden
            ProductBuyHidden
            ProductCartHidden
            title="Checkout"
        >
            <View style={styles.Container}>
                <View style={styles.Block}>
                    <View style={styles.BlockText}>
                        <Text style={styles.BlockTextHeading}>Shipping Information</Text>
                        <Pressable onPress={() => setModalAddressVisible(true)}>
                            <Text style={styles.BlockTextSubHeading}>Edit</Text>
                        </Pressable>
                    </View>
                    <Pressable style={styles.DataBlock} onPress={() => setModalAddSelectVisible(true)}>
                        <View style={styles.LocationImgBlock}>
                            <Image
                                style={styles.LocationImg}
                                source={Icon_1}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.LocationData}>
                            <Text style={styles.LocationHeading}>Work</Text>
                            <Text style={styles.LocationSubHeading}>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</Text>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.Block}>
                    <View style={styles.BlockText}>
                        <Text style={styles.BlockTextHeading}>Payment Method</Text>
                        <Pressable onPress={() => setModalCardVisible(true)}>
                            <Text style={styles.BlockTextSubHeading}>Add a Card</Text>
                        </Pressable>
                    </View>
                    {payments.map((payments, index) => (
                        <Pressable
                            onPress={() => handlePaymentSelection(index)}
                            style={[styles.DataBlock, styles.CardBlock]}
                            key={index}>
                            <View style={styles.CardBlockIcon}>
                                <Image style={styles.CardIcon} source={payments.Image} resizeMode="contain" />
                            </View>
                            <View style={styles.CardBlockText}>
                                <Text style={styles.CardTitle}>{payments.label}</Text>
                            </View>
                            <View style={styles.CardBlockCheck}>
                                <Checkbox
                                    onValueChange={() => handlePaymentSelection(index)} value={payments.selected}
                                    color={PrimaryColor}
                                />
                            </View>
                        </Pressable>
                    ))}
                </View>

                <Text style={styles.BlockTextSubHeading}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt harum aliquid animi, impedit fugit, dolore laudantium modi, sit voluptas est error ipsa. Laudantium, quisquam voluptatibus expedita nulla doloremque nobis!
                </Text>
            </View>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalAddressVisible}
                onRequestClose={() => {
                    setModalAddressVisible(!modalAddressVisible);
                }}
            >
                <View style={styles.ModalBack}>
                    {/* Modal Toolbar */}
                    <View style={styles.ModalToolbar}>
                        <Pressable
                            onPress={() => setModalAddressVisible(false)}
                            style={styles.ModalToolBarBackIconBlock}
                        >
                            <Image
                                style={styles.ModalToolBarBackIcon}
                                source={Icon_29}
                                resizeMode="contain"
                            ></Image>
                        </Pressable>
                        <View style={styles.ModalToolbarTextContainer}>
                            <Text style={styles.ModalToolBarHeading}>Add a Address</Text>
                        </View>
                    </View>

                    {/* Modal Body */}
                    <View style={styles.ModalBody}>
                        <View style={styles.ModalInputBlock}>
                            <MaterialIcons name="drive-file-rename-outline" style={styles.ModalIcon} size={32} color="#741623" />
                            <TextInput style={[styles.InputField, styles.AddressInputField]} placeholder="Full Name (Required)*">
                            </TextInput>
                        </View>
                        <View style={styles.ModalInputBlock}>
                            <MaterialIcons name="local-phone" style={styles.ModalIcon} size={32} color="#741623" />
                            <TextInput style={[styles.InputField, styles.AddressInputField]} keyboardType="decimal-pad" placeholder="Phone Number (Required)*">
                            </TextInput>
                        </View>
                        <View style={styles.ModalInputBlock}>
                            <MaterialIcons name="add-location-alt" style={styles.ModalIcon} size={32} color="#741623" />
                            <TextInput style={[styles.InputField, styles.AddressInputField]} placeholder="House No, Building Name (Required)*">
                            </TextInput>
                        </View>
                        <View style={styles.ModalDataBlock}>
                            <View style={styles.ModalSmallInput}>
                                <TextInput style={styles.SmallInputField} placeholder="Near Landmark">
                                </TextInput>
                            </View>
                            <View style={styles.ModalSmallInput}>
                                <TextInput style={styles.SmallInputField} keyboardType="decimal-pad" placeholder="Pincode">
                                </TextInput>
                            </View>
                        </View>
                        <View style={styles.ModalDataBlock}>
                            <View style={styles.ModalSmallInput}>
                                <TextInput style={styles.SmallInputField} placeholder="Address Type">
                                </TextInput>
                            </View>
                            <View style={styles.LiveInput}>
                                <Text style={styles.LiveInputText}>Use Current Location</Text>
                            </View>
                        </View>
                    </View>

                    {/* Modal Bottom */}
                    <View style={styles.ModalBottom}>
                        <Text style={styles.ModalBottomText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus, qui dignissimos commodi.
                        </Text>
                        <Pressable style={styles.ConfirmBtn}>
                            <Image style={styles.ConfirmImg} source={Back_1} />
                            <Text style={styles.ConfirmText}>
                                Add Address
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalCardVisible}
                onRequestClose={() => {
                    setModalCardVisible(!modalCardVisible);
                }}
            >
                <View style={styles.ModalBack}>
                    {/* Modal Toolbar */}
                    <View style={styles.ModalToolbar}>
                        <Pressable
                            onPress={() => setModalCardVisible(false)}
                            style={styles.ModalToolBarBackIconBlock}
                        >
                            <Image
                                style={styles.ModalToolBarBackIcon}
                                source={Icon_29}
                                resizeMode="contain"
                            ></Image>
                        </Pressable>
                        <View style={styles.ModalToolbarTextContainer}>
                            <Text style={styles.ModalToolBarHeading}>Add a Card</Text>
                        </View>
                    </View>

                    {/* Modal Body */}
                    <View style={styles.ModalBody}>
                        <View style={styles.ModalInputBlock}>
                            <Ionicons name="md-card" style={styles.ModalIcon} size={32} color="#741623" />
                            <View style={styles.ModalCardIconBlock}>
                                <Image style={styles.ModalCardIcon} source={Icon_66} resizeMode="contain" />
                            </View>
                            <TextInput style={styles.InputField} keyboardType="decimal-pad" placeholder="Enter Card Number">
                            </TextInput>
                        </View>
                        <View style={styles.ModalDataBlock}>
                            <View style={styles.ModalSmallInput}>
                                <TextInput style={styles.SmallInputField} keyboardType="decimal-pad" placeholder="MM/YY">
                                </TextInput>
                            </View>
                            <View style={styles.ModalSmallInput}>
                                <TextInput style={styles.SmallInputField} keyboardType="decimal-pad" placeholder="CVV">
                                </TextInput>
                            </View>
                        </View>
                    </View>

                    {/* Modal Bottom */}
                    <View style={styles.ModalBottom}>
                        <Text style={styles.ModalBottomText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus, qui dignissimos commodi.
                        </Text>
                        <Pressable style={styles.ConfirmBtn}>
                            <Image style={styles.ConfirmImg} source={Back_1} />
                            <Text style={styles.ConfirmText}>
                                Confirm
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalAddSelectVisible}
                onRequestClose={() => {
                    setModalAddSelectVisible(!modalAddSelectVisible);
                }}
            >
                <View style={styles.AddSelectModalContainer}>
                    <Pressable style={styles.AddSelectModalTop} onPress={() => setModalAddSelectVisible(false)}></Pressable>
                    <View style={styles.AddSelectModalBottom}>
                        {/* Modal Toolbar */}
                        <View style={styles.ModalAddSelectToolbar}>
                            <View style={styles.ModalAddSelectToolbarTextContainer}>
                                <Text style={styles.ModalAddSelectToolBarHeading}>Select Address</Text>
                            </View>
                        </View>

                        {/* Modal Data */}
                        <ScrollView
                            bounces={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.ModalDataAddSelectContainer}
                        >
                            {/* Address Block */}
                            <Pressable style={styles.DataBlock}>
                                <View style={styles.LocationImgBlock}>
                                    <Image
                                        style={styles.LocationImg}
                                        source={Icon_1}
                                        resizeMode="contain"
                                    />
                                </View>
                                <View style={styles.LocationData}>
                                    <Text style={styles.LocationHeading}>Work</Text>
                                    <Text style={styles.LocationSubHeading}>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</Text>
                                </View>
                            </Pressable>

                            <Pressable style={styles.DataBlock}>
                                <View style={styles.LocationImgBlock}>
                                    <Image
                                        style={styles.LocationImg}
                                        source={Icon_1}
                                        resizeMode="contain"
                                    />
                                </View>
                                <View style={styles.LocationData}>
                                    <Text style={styles.LocationHeading}>Home</Text>
                                    <Text style={styles.LocationSubHeading}>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</Text>
                                </View>
                            </Pressable>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </O_ScreenLayout>
    );
}

const styles = StyleSheet.create({
    Container: {
        padding: 20,
    },
    Block: {
        flexDirection: "column",
        marginBottom: 20,
    },
    BlockText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    BlockTextHeading: {
        fontFamily: "Inter-SemiBold",
        fontSize: 22,
    },
    BlockTextSubHeading: {
        color: TextColor,
        fontFamily: "Inter-Regular",
        fontSize: 13,
        lineHeight: 13 * 1.5,
    },
    DataBlock: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 85,
        borderRadius: 10,
        backgroundColor: White,
        elevation: 5,
    },
    LocationImgBlock: {
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
    },
    LocationImg: {
        width: 30,
        height: 30,
    },
    LocationData: {
        width: "80%",
        paddingLeft: 5,
    },
    LocationHeading: {
        fontFamily: "Inter-SemiBold",
        fontSize: 15,
    },
    LocationSubHeading: {
        fontFamily: "Inter-Regular",
        fontSize: 12,
        color: TextColor,
    },
    CardBlock: {
        padding: 10,
    },
    CardBlockIcon: {
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D7D7D7",
        borderRadius: 10,
    },
    CardBlockText: {
        width: "65%",
        paddingLeft: 15,
    },
    CardBlockCheck: {
        width: "15%",
        alignItems: "center",
        justifyContent: "center",
    },
    CardIcon: {
        width: 50,
        height: 50,
    },
    CardTitle: {
        fontFamily: "Inter-SemiBold",
        fontSize: 15,
        color: Black,
    },

    // Modal
    ModalBack: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: BackgroundColor,
    },
    ModalToolbar: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 20,
        backgroundColor: White,
        elevation: 15,
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
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    ModalToolBarHeading: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: Black,
    },
    ModalBody: {
        padding: 20,
        position: "relative",
    },
    ModalInputBlock: {
        position: "relative",
        height: 70,
        width: "100%",
        borderRadius: 10,
        backgroundColor: White,
        elevation: 5,
        justifyContent: "center",
        marginBottom: 20,
    },
    ModalCardIconBlock: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D7D7D7",
        borderRadius: 10,
        right: 10,
    },
    ModalCardIcon: {
        width: 70,
        height: 50,
    },
    ModalIcon: {
        position: "absolute",
        left: 10,
    },
    InputField: {
        height: 70,
        paddingLeft: 50,
        paddingRight: 100,
    },
    ModalDataBlock: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 20,
    },
    ModalSmallInput: {
        height: 55,
        width: "48%",
        borderRadius: 10,
        backgroundColor: White,
        elevation: 5,
    },
    SmallInputField: {
        height: 55,
        width: "100%",
        paddingHorizontal: 10,
    },
    ModalBottom: {
        padding: 20,
        backgroundColor: White,
        position: "absolute",
        left: 0,
        bottom: 0,
        width: Dimensions.get("window").width,
        elevation: 10,
    },
    ModalBottomText: {
        color: TextColor,
        fontFamily: "Inter-Regular",
        fontSize: 13,
        lineHeight: 13 * 1.5,
        marginBottom: 10,
    },
    ConfirmBtn: {
        width: "100%",
        height: 50,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    ConfirmText: {
        position: "absolute",
        fontSize: 16,
        fontFamily: "Inter-SemiBold",
        color: White,
    },
    ConfirmImg: {
        width: "100%",
        borderRadius: 100,
        height: "100%",
    },
    AddressInputField: {
        paddingRight: 20,
    },
    LiveInput: {
        height: 55,
        width: "48%",
        borderRadius: 10,
        backgroundColor: PrimaryColor,
        elevation: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    LiveInputText: {
        color: White,
    },
    AddSelectModalContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    AddSelectModalTop: {
        height: "50%",
        opacity: 0.5,
        backgroundColor: Black,
    },
    AddSelectModalBottom: {
        height: "50%",
        backgroundColor: BackgroundColor,
    },
    ModalAddSelectToolbar: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20,
        borderBottomColor: TextColor,
        borderBottomWidth: 1,
    },
    ModalAddSelectToolbarTextContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    ModalAddSelectToolBarHeading: {
        fontSize: 15,
        fontFamily: "Inter-Regular",
        color: TextColor,
    },
    ModalDataAddSelectContainer: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        paddingBottom: 30
    },
})
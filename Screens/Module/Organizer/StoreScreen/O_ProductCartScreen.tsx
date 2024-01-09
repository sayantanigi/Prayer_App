import { useNavigation } from "@react-navigation/native";
import O_ScreenLayout from "../O_ScreenLayout";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { BlankImage, Icon_63 } from "../../../../Constant/Images";
import { Black, TextColor } from "../../../../Constant/Color";
import { AntDesign } from "@expo/vector-icons";
import { getUser, setUser } from "../../../../store/userAsync";
import { routes } from "../../../../Constant/URL";
import { useUser } from "../../../../store/user";
import { currencyFormatter } from "../../../../lib/utils";
export interface CartData {
  cartList: CartList[];
  total_saved: string;
  total_amount: string;
}

export interface CartList {
  id: string;
  pro_image: string;
  pro_name: string;
  category_name: string;
  quantity: string;
  final_price: string;
}
export default function O_ProductCartScreen() {
  const navigation = useNavigation<any>();
  const [getcartdata, setCartdata] = useState<CartData>();
  const [getCartList, setCartList] = useState<CartList[]>([]);

  const [user, setUser] = useUser();

  useEffect(() => {
    (async () => {
      setUser(await getUser());
      //setLoading(true);
      let response = await fetch(`${routes.cart_list}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: user?.userId }),
      });
      let p_result = await response.json();
      setCartdata(p_result.result);
     setCartList(p_result.result.cartList);
      console.log(p_result.result);
    })();
  }, [user?.userId]);

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
        {/* {new Array(7).fill(0).map((item, Productindex) => (
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
                ))} */}

        {getCartList && getCartList.length > 0 && getCartList?.map(function (item: CartList, index: number) {
          return (
            <View style={styles.DataContainer}>
              <Pressable
                style={styles.ImgContainer}
                onPress={() => navigation.navigate("O_ProductScreen")}
              >
                <Image
                  style={styles.ProductImg}
                  source={{uri:item.pro_image}}
                  resizeMode="contain"
                />
              </Pressable>

              <View style={styles.Data}>
                <View style={styles.DataHead}>
                  <Text style={styles.DataName} numberOfLines={2}>
                   {item.pro_name}
                  </Text>
                  <Image
                    style={styles.DataCross}
                    source={Icon_63}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.DataCategory}>{item.category_name}</Text>
                <View style={styles.DataBottom}>
                  <Text style={styles.DataPrice}>
                    {" "}
                    {currencyFormatter.format(50)}
                  </Text>
                  <View style={styles.DataAdd}>
                    <Pressable>
                      <AntDesign name="minus" size={16} color="black" />
                    </Pressable>
                    <Text style={styles.DataAddCount}>{item.quantity}</Text>
                    <Pressable>
                      <AntDesign name="plus" size={16} color="black" />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
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
});

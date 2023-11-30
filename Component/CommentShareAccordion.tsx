import React, { useState, useRef } from "react";
import {
  View, Text, StyleSheet, Animated, Easing, Pressable, Image, Dimensions, TextInput
} from "react-native";
import { TextColor } from "../Constant/Color";
import { Icon_25, Icon_30, Icon_39, Icon_40 } from "../Constant/Images";

export enum AccordianMode {
  None, Share, Comment
}
interface ICommonAccordian {
  children: React.ReactElement | React.ReactElement[];
  open: boolean
}

interface IReply {
  name: string;
  date: string;
  comment: string;
  image: any
}

interface ICommentShareAccordion {
  replies?: IReply[];
  setModalState?: (val: boolean) => void;
}
export function CommonAccordian(props: ICommonAccordian) {
  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectionHeight, setBodySectionHeight] = useState<number>(0);

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });

  React.useEffect(() => {
    if (!props.open) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
  }, [props.open])

  return (
    <Animated.View style={[styles.BodyBackground, { height: bodyHeight }]}>
      <View
        style={styles.BodyContainer}
        onLayout={(event) =>
          setBodySectionHeight(event.nativeEvent.layout.height)
        }
      >
        {props.children}
      </View>
    </Animated.View>
  )
}
const CommentShareAccordion = ({ replies = [], setModalState }: ICommentShareAccordion) => {
  const [accordianMode, setAccordianMode] = React.useState<AccordianMode>(AccordianMode.None);

  return (
    <>
      {/* Top Part */}
      <View style={styles.CommentIconBlock}>
        <Pressable style={styles.CommentIcon} onPress={() => setAccordianMode(accordianMode == AccordianMode.Share ? AccordianMode.None : AccordianMode.Share)}>
          <Image
            style={styles.CommentIconImg}
            source={Icon_30}
            resizeMode="center"
          />
          <Text>3</Text>
        </Pressable>
        <View style={styles.CommentIcon}>
          <Image
            style={styles.CommentIconImg}
            source={Icon_39}
            resizeMode="center"
          />
          <Text>25</Text>
        </View>
        <View style={styles.CommentIcon}>
          <Image
            style={styles.CommentIconImg}
            source={Icon_40}
            resizeMode="center"
          />
          <Text>2</Text>
        </View>
        <Pressable onPress={() => setModalState?.(true)} style={styles.CommentIcon}>
          <Image
            style={styles.CommentIconImg}
            source={Icon_25}
            resizeMode="center"
          />
          <Text>Comment</Text>
        </Pressable>
      </View>

      {/* Data Part */}
      <CommonAccordian open={accordianMode === AccordianMode.Share}>
        {replies.map((reply, Shareindex) => (
          <View key={Shareindex} style={styles.CommentBlock}>
            <View style={styles.CommentImage}>
              <Image
                style={styles.CommentImg}
                source={reply.image}
                resizeMode="cover"
              />
            </View>

            <View style={styles.CommentDetails}>
              <View style={styles.CommentData}>
                <Text style={styles.CommentName}>{reply.name}</Text>
                <Text style={styles.CommentTime}>{reply.date}</Text>
              </View>
              <View style={styles.CommentLine}>
                <Text style={styles.CommentLineText}>{reply.comment}</Text>
              </View>
            </View>
          </View>
        ))}
      </CommonAccordian>
    </>
  );
};
export default CommentShareAccordion;

const styles = StyleSheet.create({
  // Share Top
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

  // Share Body
  BodyBackground: {
    overflow: "hidden",
  },
  BodyContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    width: Dimensions.get("window").width - 40,
    paddingTop: 5,
  },

  // Comments
  CommentBlock: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 40,
    alignSelf: "center",
    marginBottom: 20,
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
    width: Dimensions.get("window").width - 150,
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
});

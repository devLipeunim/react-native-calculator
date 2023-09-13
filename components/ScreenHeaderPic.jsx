import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import profile from "../assets/images/lipeunim.jpg";

const styles = StyleSheet.create({
    btnContainer: {
      width: 40,
      height: 40,
      backgroundColor: "#F3F4F8",
      borderRadius: 12 / 1.25,
      justifyContent: "center",
      alignItems: "center",
    },
    btnImg: (dimension) => ({
      width: dimension,
      height: dimension,
      borderRadius: 12 / 1.25,
    }),
  });


const ScreenHeaderPic = ({dimension}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={profile}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderPic;

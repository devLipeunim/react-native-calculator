import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import Row from "../components/Row";
import ScreenHeaderPic from "../components/ScreenHeaderPic"
import Button from "../components/Button";
import calculator, { initialState } from "../util/calculator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "DMBold",
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  headerLeft:{
    color: "#fff",
    fontSize: 22,
    fontFamily: "DMBold",
  }
});

const Home = () => {
  const [state, setState] = useState(initialState);

  const handleTap = (type, value) => {
    console.log("State before:", state);
    const newState = calculator(type, value, state);
  console.log("New State:", newState);
    setState(newState);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="#202020" animated={true} />

        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "#f09a36" },
            headerShadowVisible: false,
            headerLeft: () => (
              <Text style={styles.headerLeft}>Lipeunim</Text>
            ),
            headerRight: () => (
              <ScreenHeaderPic dimension="100%" />
            ),
            headerTitle: "",
          }}
        />
        <Text style={styles.value}>
          {parseFloat(state.currentValue).toLocaleString()}
        </Text>
        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={() => handleTap("clear")}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => handleTap("posneg")}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={() => handleTap("percentage")}
          />
          <Button
            text="/"
            theme="accent"
            onPress={() => handleTap("operator", "/")}
          />
        </Row>

        <Row>
          <Button text="7" onPress={() => handleTap("number", 7)} />
          <Button text="8" onPress={() => handleTap("number", 8)} />
          <Button text="9" onPress={() => handleTap("number", 9)} />
          <Button
            text="x"
            theme="accent"
            onPress={() => handleTap("operator", "*")}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => handleTap("number", 4)} />
          <Button text="5" onPress={() => handleTap("number", 5)} />
          <Button text="6" onPress={() => handleTap("number", 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => handleTap("operator", "-")}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => handleTap("number", 1)} />
          <Button text="2" onPress={() => handleTap("number", 2)} />
          <Button text="3" onPress={() => handleTap("number", 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => handleTap("operator", "+")}
          />
        </Row>

        <Row>
          <Button
            text="0"
            size="double"
            onPress={() => handleTap("number", 0)}
          />
          <Button text="." onPress={() => handleTap("number", ".")} />
          <Button text="=" theme="accent" onPress={() => handleTap("equal")} />
        </Row>
      </SafeAreaView>
    </View>
    // <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    //   <Stack.Screen
    //     options={{
    //       headerStyle: { backgroundColor: COLORS.lightWhite },
    //       headerShadowVisible: false,
    //       headerLeft: () => (
    //         <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
    //       ),
    //       headerRight: () => (
    //         <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
    //       ),
    //       headerTitle: "",
    //     }}
    //   />

    //   {/* <ScrollView showsVerticalScrollIndicator={false}> */}
    //   <View style={{ flex: 1, padding: SIZES.medium }}>
    //     <Welcome />
    //     <Popularjobs />
    //     <Nearbyjobs />
    //   </View>
    //   {/* </ScrollView> */}
    // </SafeAreaView>
  );
};

export default Home;

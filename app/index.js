import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import Row from "../components/Row";
import ScreenHeaderPic from "../components/ScreenHeaderPic";
import Button from "../components/Button";

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
  headerLeft: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "DMBold",
  },
});

const Home = () => {
  const [input, setInput] = useState("");

  const calculate = (number) => {
    setInput(
      prevInput => prevInput + number);
  }

  const Result = () => {
    try {
      setInput(eval(input).toString());
    } catch (err) {
      alert("Enter a valid number");
    }
  }

  const percentage = () => {
    setInput(prevInput => (eval(prevInput) / 100).toString());
  };
  const posneg = () => {
    setInput(prevInput => {
      return (parseFloat(prevInput) * -1).toString();
    });
  };
  const Clear = () => {
    setInput("");
  }
  
  const del = () => {
    setInput(prevInput => {
      if (prevInput.length > 1) {
        return prevInput.slice(0, -1);
      } else {
        return 0;
      }
    });
  }


  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#f09a36"
          animated={true}
        />

        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "#f09a36" },
            headerShadowVisible: false,
            headerLeft: () => <Text style={styles.headerLeft}>Lipeunim&gt;&gt;&gt;</Text>,
            headerRight: () => <ScreenHeaderPic dimension="100%" />,
            headerTitle: "",
          }}
        />
        <Text style={styles.value}>
        {input}
        </Text>
        <Row>
          <Button text="C" theme="secondary" onPress={() => Clear()} />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => posneg()}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={() => percentage()}
          />
          <Button
            text="Del"
            theme="secondary"
            onPress={() => del()}
          />
        </Row>

        <Row>
          <Button text="7" onPress={() => calculate("7")} />
          <Button text="8" onPress={() => calculate("8")} />
          <Button text="9" onPress={() => calculate("9")} />
          <Button
            text="x"
            theme="accent"
            onPress={() => calculate('*')}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => calculate("4")} />
          <Button text="5" onPress={() => calculate("5")} />
          <Button text="6" onPress={() => calculate("6")} />
          <Button
            text="-"
            theme="accent"
            onPress={() => calculate("-")}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => calculate("1")} />
          <Button text="2" onPress={() => calculate("2")} />
          <Button text="3" onPress={() => calculate("3")} />
          <Button
            text="+"
            theme="accent"
            onPress={() => calculate("+")}
          />
        </Row>

        <Row>
          <Button
            text="0"
            // size="double"
            onPress={() => calculate(0)}
          />
          <Button text="." onPress={() => calculate(".")} />
          <Button
            text="/"
            theme="accent"
            onPress={() => calculate("/")}
          />
          <Button text="=" theme="accent" onPress={() => Result()} />
        </Row>
      </SafeAreaView>
    </View>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { Modal, TextInput, View } from "react-native";
import { Gesture, GestureHandlerRootView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  KeyboardEvents,
  OverKeyboardView,
} from "react-native-keyboard-controller";

export default function OverKeyboardViewExample() {
  const [isShow, setShow] = useState(false);

  // show
  useEffect(() => {
    const subscription = KeyboardEvents.addListener("keyboardDidShow", (e) => {
      console.log(1, e);
      setShow(true);

      setTimeout(() => {
        console.log("set to false");
        setShow(false);
      }, 5000);
    });

    return subscription.remove;
  }, []);

  // hide
  useEffect(() => {
    const subscription = KeyboardEvents.addListener("keyboardDidHide", (e) => {
      console.log(2, e);
      // setShow(false);
    });

    return subscription.remove;
  }, []);

  return (
    <View>
      <TextInput
        style={{
          backgroundColor: "yellow",
          width: 200,
          height: 50,
          alignSelf: "center",
          marginTop: 50,
        }}
      />
      <OverKeyboardView visible={isShow}>
        <GestureHandlerRootView
          style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
        >
          <TouchableOpacity onPress={() => setShow(false)} style={{marginTop: 600}}>
            <View
              style={{
                width: 200,
                height: 200,
                backgroundColor: "blue",
              }}
            />
          </TouchableOpacity>
        </GestureHandlerRootView>
      </OverKeyboardView>
    </View>
  );
}

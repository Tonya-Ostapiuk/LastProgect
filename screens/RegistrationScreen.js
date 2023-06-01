import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  Image
  // Dimensions,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  // const [dimensions, setDimensions] = useState( Dimensions.get("window").width);

  // useEffect(() => {
  //   const onChange = () => {
  //     const windowWidth = Dimensions.get("window").width;
  //     setDimensions(windowWidth);
  //     // const windowHeight = Dimensions.get("window").height;
  //   };
  //   Dimensions.addEventListener("change", onChange);
  //   return () => {
  //     Dimensions.removeEventListener("change", onChange)
  //   };
  // }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View
          style={{
            ...styles.containerForm,
            paddingBottom: isShowKeyboard ? 100 : 65,
            // width: dimensions,
          }}
        >
          <View style={styles.avatar}>
            <Image
              source={require("../assets/img/avatar.jpg")}
              style={styles.avatarImg}
            />
            {/* <Pressable style={styles.buttonIcon}>
              <Icon />
            </Pressable> */}
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            onFocus={() => setIsShowKeyboard(true)}
            style={styles.input}
            placeholder="Логін"
            placeholderTextColor="#BDBDBD"
            value={state.login}
            onChangeText={(value) =>
              setState((prevstate) => ({ ...prevstate, login: value }))
            }
          />
          <TextInput
            onFocus={() => setIsShowKeyboard(true)}
            style={styles.input}
            placeholder="Адреса електронної пошти"
            placeholderTextColor="#BDBDBD"
            value={state.email}
            onChangeText={(value) =>
              setState((prevstate) => ({ ...prevstate, email: value }))
            }
          />
          <TextInput
            onFocus={() => setIsShowKeyboard(true)}
            style={styles.input}
            secureTextEntry={true}
            placeholder="Пароль"
            placeholderTextColor="#BDBDBD"
            value={state.password}
            onChangeText={(value) =>
              setState((prevstate) => ({ ...prevstate, password: value }))
            }
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btn}
            onPress={keyboardHide}
          >
            <Text style={styles.btnText}>Зареєстуватися</Text>
          </TouchableOpacity>
          <Text style={styles.text}>Вже є акаунт? Увійти</Text>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: "100%",
  },
  containerForm: {
    flex: 0.65,
    alignItems: "center",
    // justifyContent: "flex-end",
    backgroundColor: "#FFFFFF",
    marginTop: "auto",
    // marginHorizontal: 20,
    padding: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // height: 549,
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    padding: 15,
    marginBottom: 16,
  },
  avatar: {
    // position: "absolute",
    alignSelf: "center",
    // marginHorizontal: "auto",
    width: 132,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -80,
},
avatarImg: {
  width: 120,
  height: 120,
  borderRadius: 16,
},
  title: {
    fontFamily: "Roboto-500",
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 32,
    // marginTop: 32,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 27,
  },
  btnText: {
    color: "#FFFFFF",
    fontFamily: "Roboto-400",
    lineHeight: 19,
    fontSize: 16,
  },
  text: {
    fontFamily: "Roboto-400",
    lineHeight: 19,
    fontSize: 16,
    marginTop: 16,
    // marginBottom: 45,
  },
});

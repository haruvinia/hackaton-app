import { Image } from "expo-image";

import { useRouter } from "expo-router";

import React from "react";

import { Text, TouchableOpacity, View } from "react-native";

export default function SelectAccountType() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,

        alignItems: "center",

        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          width: "100%",
          alignItems: "center",
          gap: 35,
          borderBottomRightRadius: 50,
        }}
      >
        <Image
          source={require("@/assets/images/selectTypeImage.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={{ fontSize: 35, textAlign: "center", fontWeight: "500" }}>
          Seja bem-vindo!
        </Text>
        <Text
          style={{
            color: "#7B2CBF",
            textAlign: "center",
            fontWeight: "400",
            fontSize: 25,
          }}
        >
          Desapegar ficou mais fácil!
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          backgroundColor: "#7B2CBF",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          padding: 30,
          height: 400
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            paddingVertical: 15,
            paddingHorizontal: 80,
            borderRadius: 30,
          }}
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text style={{ fontSize: 15, fontWeight: "500" }}>Vamos começar</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            marginTop: 15,
          }}
        >
          <Text style={{ color: "#fff" }}>Já possui conta?</Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
            <Text style={{ color: "#fff", fontWeight: "bold", color:"#FFC98B"}}>
              Fazer login.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

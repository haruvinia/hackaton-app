import Feather from "@expo/vector-icons/Feather";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

import React from "react";

import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignUp() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: "space-between",
      }}
    >
      <View style={{ width: "100%" }}>
        <TouchableOpacity
          style={{
            display: "flex",
            width: "100%",
            padding: 20,
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
          }}
          onPress={() => router.push("/(auth)/sign-in")}
        >
          <Feather name="arrow-left" size={24} color="black" />
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Login</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("@/assets/images/logo-unique.png")}
        style={{ width: 200, height: 200, resizeMode: "contain" }}
      />
      <View
        style={{
          width: "100%",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          backgroundColor: "#7B2CBF",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          padding: 50,
        }}
      >
        <Text style={{ fontSize: 20, color: "#fff", fontWeight: "500" }}>
          Insira seus dados para realizar o cadastro.
        </Text>
        <TextInput
          style={{
            width: "85%",
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 30,
            fontSize: 16,
            paddingLeft: 25,
          }}
          keyboardType="email-address"
          placeholder="Insira seu Nome"
          placeholderTextColor="#999999"
        />
        <TextInput
          style={{
            width: "85%",
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 30,
            fontSize: 16,
            paddingLeft: 25,
          }}
          keyboardType="email-address"
          placeholder="Insira seu e-mail"
          placeholderTextColor="#999999"
        />
        <TextInput
          style={{
            width: "85%",
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 30,
            fontSize: 16,
            paddingLeft: 25,
          }}
          keyboardType="visible-password"
          placeholder="Insira sua senha"
          placeholderTextColor="#999999"
        />
        <TextInput
          style={{
            width: "85%",
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 30,
            fontSize: 16,
            paddingLeft: 25,
          }}
          keyboardType="visible-password"
          placeholder="Confirme sua senha"
          placeholderTextColor="#999999"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            paddingVertical: 15,
            borderRadius: 30,
            width: "85%",
          }}
          onPress={() => router.replace("/(tabs)/home")}
        >
          <Text
            style={{ fontSize: 16, fontWeight: "500", textAlign: "center" }}
          >
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

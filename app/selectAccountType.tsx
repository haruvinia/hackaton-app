import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
      <View style={{backgroundColor: "#fff", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: 100, height: 100, resizeMode: "contain"}}
        />
      </View>
      <View style={{backgroundColor: "#fff", flex: 1, width: "100%", display: "flex", alignItems: "center", gap: 35, borderBottomEndRadius: 50}}>
        <Image source={require("@/assets/images/selectTypeImage.png")} style={{ width: 200, height: 200}} />
        <Text style={{fontSize: 35, fontFamily: "Inter, sans-serif", textAlign: "center", fontWeight: 500}}>Seja bem-vindo!</Text>
        <Text style={{color: "#7B2CBF", fontFamily: "Inter, sans-serif", textAlign: "center", fontWeight: 400, fontSize: 25}} >Desapegar ficou mais fácil!</Text>
      </View>
      <View style={{width: "100%", borderTopLeftRadius: 50, backgroundColor:"#7B2CBF", padding: 20, display: "flex", alignItems: "center", justifyContent: "center", flex: 1}}>
        <TouchableOpacity style = {{backgroundColor: "#fff", padding: 15, paddingInline: 80, borderRadius: 30}}>
          <Text style={{fontSize: 15, fontWeight: 500, fontFamily: "Arial, sans-serif"}}>Vamos começar</Text>
        </TouchableOpacity>
        <View style={{display: "flex", flexDirection: "row", alignItems: "center", columnGap: 5}}>
          <Text>Já possui conta?</Text>
          <TouchableOpacity>Fazer login.</TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

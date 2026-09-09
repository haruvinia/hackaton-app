import { Image } from "expo-image";
import { StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Home() {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: "600", color: "#7B2CBF" }}>
            Olá, Joana!
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            Que bom te ver por aqui!
          </Text>
        </View>
        <Image
          source={require("@/assets/images/profile-photo.png")}
          style={{ width: 60, height: 60 }}
        />
      </View>
      <View style={{display: "flex", alignItems: "flex-start", gap: 10,flexDirection: "row",backgroundColor: "#E5E5EA", padding: 20, paddingLeft: 15, borderRadius: 30, marginInline: 20}}>
        <FontAwesome name="search" size={18} color="#757575" />
        <TextInput placeholderTextColor="#757575" placeholder="Buscar livros, roupas..."/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

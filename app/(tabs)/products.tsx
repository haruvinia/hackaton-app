import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function Product() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "600",
          color: "#7B2CBF",
          margin: 20,
        }}
      >
        Produtos doados
      </Text>
      <View
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          flexDirection: "row",
          backgroundColor: "#E5E5EA",
          padding: 20,
          paddingLeft: 15,
          borderRadius: 30,
          marginInline: 20,
        }}
      >
        <FontAwesome name="search" size={18} color="#757575" />
        <TextInput
          placeholderTextColor="#757575"
          placeholder="Buscar produtos doados..."
        />
      </View>
      <View style={{display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", padding: 20, gap: 15}}>
        <TouchableOpacity style={{backgroundColor: "#7B2CBF", padding: 10, borderRadius: 20, paddingInline: 20}}>
          <Text style={{color: "#fff", fontWeight: "500"}}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "#E5E5EA", padding: 10, borderRadius: 20, paddingInline: 20}}>
          <Text style={{fontWeight: "500"}}>Roupas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "#E5E5EA", padding: 10, borderRadius: 20, paddingInline: 20}}>
          <Text style={{fontWeight: "500"}}>Livros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "#E5E5EA", padding: 10, borderRadius: 20, paddingInline: 20}}>
          <Text style={{fontWeight: "500"}}>Itens de casa</Text>
        </TouchableOpacity>
      </View>
      <View>
        
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

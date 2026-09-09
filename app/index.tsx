import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/selectAccountType");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ width: 200, height: 200, resizeMode: "contain" }}
      />
    </View>
  );
}

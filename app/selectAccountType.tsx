import { Text, View } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
export default function SelectAccountType() {

  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("(auth)/sign-in");
    }, 3000);
 
    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

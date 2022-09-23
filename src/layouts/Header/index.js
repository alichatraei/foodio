import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="px-4 pt-10 pb-3 bg-white shadow-md">
      {/* Icon & title */}
      <View className="flex-row items-center flex-1 ">
        <Image
          source={require("../../../assets/dish.png")}
          className="w-12 h-12"
        />
        <View className="flex-1 mx-2">
          <Text className="color-gray-500 text-xs">Deliver Now!</Text>
          <Text className="text-xl">
            CurrentLocation
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color="#00CCBB"
            />
          </Text>
        </View>
        <AntDesign name="user" size={30} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-1 flex-row items-center mt-4">
        <View className="flex-row bg-gray-200 flex-1 items-center p-1 mr-1 rounded-sm">
          <AntDesign name="search1" size={20} color="#00CCBB" />
          <TextInput
            className="mx-2"
            placeholder="Search restaurants and Coffee..."
          />
        </View>
        <AntDesign name="filter" size={30} color="#00CCBB" />
      </View>
    </SafeAreaView>
  );
};

export default Header;

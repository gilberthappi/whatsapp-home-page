import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/pages/HomePage/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loading_page">
        <Stack.Screen
          name="home_page"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

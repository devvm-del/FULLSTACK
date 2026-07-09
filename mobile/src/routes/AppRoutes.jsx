import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";

import HomeScreenStudent from "../components/student/Home";
import ActivitiesScreen from "../components/student/Activities";
import ProfileScreen from "../components/student/Profile";
import TimeLogsScreen from "../components/student/TimeLogs";
import ReportsScreen from "../components/student/Reports";

import HomeScreenTeacher from "../components/teacher/Home";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="Register" component={RegisterScreen} />

        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />

        <Stack.Screen name="HomeStudent" component={HomeScreenStudent} />
        <Stack.Screen name="ActivitiesStudent" component={ActivitiesScreen} />
        <Stack.Screen name="ProfileStudent" component={ProfileScreen} />
        <Stack.Screen name="ReportsStudent" component={ReportsScreen} />
        <Stack.Screen name="TimeLogsStudent" component={TimeLogsScreen} />

        <Stack.Screen name="HomeTeacher" component={HomeScreenTeacher} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

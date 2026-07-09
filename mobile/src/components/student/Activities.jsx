import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from '@expo/vector-icons';
import styles from "../../styles/student/activities.styles";
import BottomNavStudent from "../navigation/BottomNavStudent";

const Activities = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerProfileIcon}>
         <TouchableOpacity onPress={() => navigation.navigate("ProfileStudent")}>
          <Ionicons name="person-circle-outline" size={37} color="black" />
         </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Activities</Text>
      </View>
      <BottomNavStudent/>
    </ScrollView>
  );
};

export default Activities;

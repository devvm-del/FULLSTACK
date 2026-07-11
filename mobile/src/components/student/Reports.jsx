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
import styles from "../../styles/student/reports.styles";
import BottomNavStudent from "../navigation/BottomNavStudent";
import NotificationPopup from "../others/NotificationPopup";

const Reports = () => {
  const navigation = useNavigation();

  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
         <View style={styles.iconContainer}>
          <View style={styles.notificationIcon}>
            <TouchableOpacity
              onPress={() => setShowNotifications(!showNotifications)}
            >
              <Ionicons
                name="notifications-outline"
                size={25}
                color="black"
              />
            </TouchableOpacity>
          </View>         
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Reports</Text>
      </View>

      <NotificationPopup visible={showNotifications} onClose={() => setShowNotifications(false)}/>

      <BottomNavStudent active="reports"/>
    </ScrollView>
  );
};

export default Reports;

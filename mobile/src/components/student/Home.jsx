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

import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles/student/home.styles";
import BottomNavStudent from "../navigation/BottomNavStudent";
import NotificationPopup from "../others/NotificationPopup";

const Home = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem("user");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    loadUser();
  }, []);

  return (
    <>
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
          <Text style={styles.title}>Welcome Back, {user?.full_name}</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Today's Overview</Text>
            <Text style={styles.cardText}>
              You have 5 new notifications and 2 pending tasks.
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Projects</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statNumber}>48</Text>
              <Text style={styles.statLabel}>Tasks</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statNumber}>7</Text>
              <Text style={styles.statLabel}>Messages</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <NotificationPopup visible={showNotifications} onClose={() => setShowNotifications(false)} />

      <BottomNavStudent active="home" />
    </>
  );
};

export default Home;

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "../../styles/student/timeLogs.styles";
import BottomNavStudent from "../navigation/BottomNavStudent";
import NotificationPopup from "../others/NotificationPopup";

import Mon from "./TimeLogs/Mon";
import Tue from "./TimeLogs/Tue";
import Wed from "./TimeLogs/Wed";
import Thu from "./TimeLogs/Thu";
import Fri from "./TimeLogs/Fri";
import Sat from "./TimeLogs/Sat";
import Sun from "./TimeLogs/Sun";

const TimeLogs = () => {

  const navigation = useNavigation();
  const [showNotifications, setShowNotifications] = useState(false);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [activeDay, setActiveDay] = useState(
    days[new Date().getDay()]
  );

  const dayComponents = {
    Mon: Mon,
    Tue: Tue,
    Wed: Wed,
    Thu: Thu,
    Fri: Fri,
    Sat: Sat,
    Sun: Sun,
  };

  const ActiveComponent = dayComponents[activeDay];

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
        <Text style={styles.subtitle}>Time Logs</Text>

        <View style={styles.dayContainer}>
          {Object.keys(dayComponents).map((day) => (
            <TouchableOpacity
              key={day}
              style={[
                styles.dayButton,
                activeDay === day && styles.activeDayButton,
              ]}
              onPress={() => setActiveDay(day)}
            >
              <Text
                style={[
                  styles.dayText,
                  activeDay === day && styles.activeDayText,
                ]}
              >
                {day}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.schedContainer}>
          <ActiveComponent />
        </View>
      </View>

      <NotificationPopup visible={showNotifications} onClose={() => setShowNotifications(false)} />

      <BottomNavStudent active="timelogs" />
    </ScrollView>
  );
};

export default TimeLogs;
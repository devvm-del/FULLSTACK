import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NotificationPopup = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      
      

      {/* Notification Drawer */}
      <View style={styles.popup}>
        <Text style={styles.title}>Notifications</Text>

        <TouchableOpacity
        style={styles.closeButton}
        onPress={onClose}
        activeOpacity={0.8}
      >
        <Ionicons
          name="chevron-forward"
          size={28}
          color="#3f6b2f"
        />
      </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.item}>
            <Ionicons
              name="checkmark-circle"
              size={20}
              color="#3f6b2f"
            />
            <Text style={styles.text}>
              Your attendance has been approved.
            </Text>
          </View>

          <View style={styles.item}>
            <Ionicons
              name="notifications"
              size={20}
              color="#3f6b2f"
            />
            <Text style={styles.text}>
              New announcement available.
            </Text>
          </View>

          <View style={styles.item}>
            <Ionicons
              name="time"
              size={20}
              color="#3f6b2f"
            />
            <Text style={styles.text}>
              Don't forget to time in today.
            </Text>
          </View>

          <View style={styles.item}>
            <Ionicons
              name="calendar"
              size={20}
              color="#3f6b2f"
            />
            <Text style={styles.text}>
              Your schedule has been updated.
            </Text>
          </View>

          <View style={styles.item}>
            <Ionicons
              name="document-text"
              size={20}
              color="#3f6b2f"
            />
            <Text style={styles.text}>
              New OJT announcement posted.
            </Text>
          </View>

          <View style={styles.item}>
            <Ionicons
              name="checkmark-done-circle"
              size={20}
              color="#3f6b2f"
            />
            <Text style={styles.text}>
              Weekly report has been verified.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default NotificationPopup;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.25)",
    zIndex: 999,
  },

  popup: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 320,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 18,

    elevation: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: {
      width: -2,
      height: 0,
    },
  },

  closeButton: {
    position: "absolute",
    left: 0,
    top: "50%",
    marginTop: -25,
    marginStart: -20,

    width: 50,
    height: 50,
    borderRadius: 25,


    backgroundColor: "#fff",

    justifyContent: "center",
    alignItems: "center",

    zIndex: 1000,

    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#3f6b2f",
    marginBottom: 20,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  text: {
    marginLeft: 12,
    flex: 1,
    fontSize: 15,
    color: "#333",
  },
});
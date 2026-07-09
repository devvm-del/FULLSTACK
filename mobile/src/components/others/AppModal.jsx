import React, { useEffect } from "react";
import { Modal, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AppModal({
  visible,
  message,
  onClose,
}) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  const getModalConfig = () => {
    if (message.includes("approved")) {
      return {
        icon: "time-outline",
        color: "#F59E0B",
        title: "Pending Approval",
      };
    }

    if (message.includes("rejected")) {
      return {
        icon: "close-circle",
        color: "#EF4444",
        title: "Account Rejected",
      };
    }

    if (message.includes("inactive")) {
      return {
        icon: "warning",
        color: "#F97316",
        title: "Account Inactive",
      };
    }

    if (message.includes("Access denied")) {
      return {
        icon: "shield-outline",
        color: "#8B5CF6",
        title: "Access Denied",
      };
    }

    if (message.includes("many login attempts")) {
      return {
        icon: "time-outline",
        color: "#F97316",
        title: "Try Again Later",
      };
    }

    if (message.includes("disabled")) {
      return {
        icon: "sad-outline",
        color: "#F97316",
        title: "Account Disabled",
      };
    }

    return {
      icon: "checkmark-circle",
      color: "#22C55E",
      title: "Success",
    };
  };

  const { icon, color, title } = getModalConfig();

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={{
            width: "85%",
            backgroundColor: "#fff",
            borderRadius: 20,
            padding: 25,
            alignItems: "center",
            elevation: 8,
          }}
        >
          <Ionicons
            name={icon}
            size={70}
            color={color}
          />

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {title}
          </Text>

          <Text
            style={{
              textAlign: "center",
              marginTop: 10,
              fontSize: 15,
              color: "#555",
            }}
          >
            {message}
          </Text>
        </View>
      </View>
    </Modal>
  );
}
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import IconTextInput from "./inputs/IconTextInput";
import styles from "../styles/changePassword.styles";

import AppModal from "./others/AppModal";
import { Ionicons } from "@expo/vector-icons";

import useChangePassword from "../hooks/useChangePassword";
import { handleChangePassword } from "../utils/changePasswordHandler";

const ChangePassword = () => {
  const navigation = useNavigation();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const { changePassword, loading } = useChangePassword();

  const onChangePassword = () => {
    handleChangePassword({
      currentPassword,
      newPassword,
      confirmPassword,
      changePassword,

      setCurrentPassword,
      setNewPassword,
      setConfirmPassword,

      setCurrentPasswordError,
      setNewPasswordError,
      setConfirmPasswordError,

      setModalVisible,
      setModalMessage,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileStudent")}
          >
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Change Password </Text>
        <IconTextInput
          icon="lock-closed-outline"
          placeholder="Current Password"
          secureTextEntry
          value={currentPassword}
          onChangeText={(text) => {
            setCurrentPassword(text);
            setCurrentPasswordError("");
          }}
        />

        {currentPasswordError ? (
          <Text style={{ color: "red", marginTop: 0 }}>
            {currentPasswordError}
          </Text>
        ) : null}

        <IconTextInput
          icon="key-outline"
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={(text) => {
            setNewPassword(text);
            setNewPasswordError("");
          }}
        />

        {newPasswordError ? (
          <Text style={{ color: "red", marginTop: 0 }}>{newPasswordError}</Text>
        ) : null}

        <IconTextInput
          icon="checkmark-circle-outline"
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            setConfirmPasswordError("");
          }}
        />

        {confirmPasswordError ? (
          <Text style={{ color: "red", marginTop: 0 }}>
            {confirmPasswordError}
          </Text>
        ) : null}

        <TouchableOpacity
          style={styles.button}
          onPress={onChangePassword}
          disabled={loading}
        >
          <Ionicons name="create-outline" size={24} color="white" />
          <Text style={styles.buttonText}>
            {loading ? "Saving..." : "Save Changes"}
          </Text>
        </TouchableOpacity>
      </View>

      <AppModal
        visible={modalVisible}
        message={modalMessage}
        onClose={() => setModalVisible(false)}
      />
    </ScrollView>
  );
};

export default ChangePassword;

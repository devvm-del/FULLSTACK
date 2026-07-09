import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import styles from "../styles/registerForm.styles";
import IconTextInput from "./inputs/IconTextInput";
import IconDropdown from "./inputs/IconDropdown";
import AppModal from "./others/AppModal";
import { Ionicons } from "@expo/vector-icons";

import useAuth from "../hooks/useAuth";
import { handleRegister } from "../utils/registerHandler";

export default function RegisterForm() {

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [fullNameError, setFullNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [departmentError, setDepartmentError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const { register, loading } = useAuth();

  const onRegister = async () => {
    const result = await handleRegister({
      username,
      password,
      confirmPassword,
      fullName,
      department,
      address,
      register,
      setUsernameError,
      setPasswordError,
      setConfirmPasswordError,
      setFullNameError,
      setDepartmentError,
      setAddressError,
      navigation,
    })

    if (result?.success) {
      setModalMessage("Registration successful!");
      setModalVisible(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.registerContainer}>
        <Text style={styles.logo}>Register</Text>

        <Text style={styles.heading}>Welcome Back</Text>

        <IconTextInput
          icon="pencil-outline"
          placeholder="Full Name"
          keyboardType="email-address"
          value={fullName}
          onChangeText={(text) => {
            setFullName(text);
            setFullNameError("");
          }}
        />

          {fullNameError ? (
          <Text style={{ color: "red", marginTop: 0 }}>
            {fullNameError}
          </Text>
        ) : null}

        <IconTextInput
          icon="location-outline"
          placeholder="Address"
          keyboardType="email-address"
          value={address}
          onChangeText={(text) => {
            setAddress(text);
            setAddressError("");
          }}
        />

            {addressError ? (
          <Text style={{ color: "red", marginTop: 0 }}>
            {addressError}
          </Text>
        ) : null}

        <IconDropdown
          icon="shield-outline"
          placeholder="Department"
          value={department}
          onChange={(value) => {
            setDepartment(value);
            setDepartmentError("");
          }}
          data={[
            { label: "CEA", value: "CEA" },
            { label: "CAS", value: "CAS" },
            { label: "CAHS", value: "CAHS" },
            { label: "CITE", value: "CITE" },
            { label: "CMA", value: "CMA" },
            { label: "CCJE", value: "CCJE" },
            { label: "CHTM", value: "CHTM" },
          ]}
        />

           {departmentError ? (
          <Text style={{ color: "red", marginTop: 0 }}>
            {departmentError}
          </Text>
        ) : null}

        <IconTextInput
          icon="card-outline"
          placeholder="Student ID"
          keyboardType="number-pad"
          style={styles.input}
          value={username}
          onChangeText={(text) => {
            setUsername(text);
            setUsernameError("");
          }}
        />

           {usernameError ? (
          <Text style={{ color: "red", marginTop: 0 }}>
            {usernameError}
          </Text>
        ) : null}

        <IconTextInput
          icon="lock-closed-outline"
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setPasswordError("");
          }}
        />

           {passwordError ? (
          <Text style={{ color: "red", marginTop: 0 }}>
            {passwordError}
          </Text>
        ) : null}

        <IconTextInput
          icon="lock-closed-outline"
          placeholder="Confirm Password"
          secureTextEntry
          style={styles.input}
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
          onPress={onRegister}
          disabled={loading}
        >
          <Ionicons name="log-in-outline" size={24} color="white" />
          <Text style={styles.buttonText}>
            {loading ? "Registering..." : "Register"}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text>Already have an account? </Text>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.createAccountText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

        <AppModal
          visible={modalVisible}
          message={modalMessage}
          onClose={() => {
            setModalVisible(false);
            navigation.navigate("Login");
          }}
        />
          
    </View>


         
  );
}

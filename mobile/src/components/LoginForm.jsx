import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";
import styles from "../styles/loginForm.styles";
import IconTextInput from "./inputs/IconTextInput";
import AppModal from "./others/AppModal";
import { Ionicons } from '@expo/vector-icons';

import useAuth from "../hooks/useAuth";
import { handleLogin } from "../utils/loginHandler";

export default function LoginForm() {

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { login, loading } = useAuth();

   const onLogin = () => {
    handleLogin({
      username,
      password,
      login,
      setUsernameError,
      setPasswordError,
      setModalVisible,
      setModalMessage,
      navigation,
    });
  };

  return (
  <View style={styles.container}>
    <View style={styles.loginContainer}>
      <Text style={styles.logo}>Login</Text>

      <Text style={styles.heading}>Welcome Back</Text>

       <IconTextInput
        icon="mail-outline"
        placeholder="Student ID"
        value={username}
        onChangeText={(text) => {
          setUsername(text);
          setUsernameError("");
        }}
        keyboardType="email-address"
      />

      {usernameError ? (
        <Text style={{ color: "red", marginTop: 5 }}>
          {usernameError}
        </Text>
      ) : null}
 
      <IconTextInput
        icon="lock-closed-outline"
        placeholder="Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          setPasswordError("");
        }}
        secureTextEntry
      />

      {passwordError ? (
        <Text style={{ color: "red", marginTop: 5 }}>
          {passwordError}
        </Text>
      ) : null}

    

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={onLogin} 
        disabled={loading}
      >
        <Ionicons name="log-in-outline" size={24} color="white" />
        <Text style={styles.buttonText}>{loading ? "Logging in..." : "Login"}</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
        <Text>Don't have an account? </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.createAccountText}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>

    <AppModal
      visible={modalVisible}
      message={modalMessage}
      onClose={() => setModalVisible(false)}
    />
  </View>
  );
}

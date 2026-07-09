import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

import styles from "../../styles/student/profile.styles";
import BottomNavStudent from "../navigation/BottomNavStudent";
import { handleLogout } from "../../utils/logoutHandler";

const Profile = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

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
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.profileHeader} />

        {/* Profile Picture */}
        <View style={styles.profileImageContainer}>
          <Ionicons
            name="person-circle"
            size={130}
            color="#3f6b2f"
          />
        </View>

        {/* Name */}
        <View style={styles.profileInfo}>
          <Text style={styles.textName}>
            {user?.full_name || "Student Name"}
          </Text>

          <Text style={styles.textUsername}>
            {user?.username || "username"}
          </Text>
        </View>

        {/* Information Card */}
        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>
            Student Information
          </Text>

          <View style={styles.infoRow}>
            <Ionicons name="person-outline" size={20} color="#3f6b2f" />
            <View>
              <Text style={styles.infoLabel}>Full Name</Text>
              <Text style={styles.infoValue}>{user?.full_name}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="card-outline" size={20} color="#3f6b2f" />
            <View>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}></Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="school-outline" size={20} color="#3f6b2f" />
            <View>
              <Text style={styles.infoLabel}>Student ID</Text>
              <Text style={styles.infoValue}>{user?.username}</Text>
            </View>
          </View>
        </View>

        {/* Settings Card */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons
              name="create-outline"
              size={22}
              color="#3f6b2f"
            />

            <Text style={styles.menuText}>
              Edit Profile
            </Text>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons
              name="lock-closed-outline"
              size={22}
              color="#3f6b2f"
            />

            <Text style={styles.menuText} onPress={() => navigation.navigate('ChangePassword')}>
              Change Password
            </Text>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleLogout(navigation)}
          >
            <Ionicons
              name="log-out-outline"
              size={22}
              color="red"
            />

            <Text style={[styles.menuText, { color: "red" }]}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 90 }} />
      </ScrollView>

      <BottomNavStudent active="profile" />
    </>
  );
};

export default Profile;
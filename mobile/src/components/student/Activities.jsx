import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import { CameraView, useCameraPermissions } from "expo-camera";

import BottomNavStudent from "../navigation/BottomNavStudent";
import NotificationPopup from "../others/NotificationPopup";
import styles from "../../styles/student/activities.styles";

const Activities = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const [permission, requestPermission] = useCameraPermissions();

  const cameraRef = useRef(null);

  const [photo, setPhoto] = useState(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const result = await cameraRef.current.takePictureAsync({
          quality: 0.8,
        });

        setPhoto(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!permission) {
    return <View style={{ flex: 1 }} />;
  }

  if (!permission.granted) {
    return (
      <View style={localStyles.permissionContainer}>
        <Text style={localStyles.permissionText}>
          Camera permission is required.
        </Text>

        <TouchableOpacity
          style={localStyles.permissionButton}
          onPress={requestPermission}
        >
          <Text style={localStyles.permissionButtonText}>
            Grant Permission
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Activities</Text>

          {/* Camera */}
          <CameraView
            ref={cameraRef}
            facing="back"
            style={localStyles.camera}
          />

          {/* Capture Button */}
          <TouchableOpacity
            style={localStyles.captureButton}
            onPress={takePicture}
          >
            <Text style={localStyles.captureText}>
              Capture Photo
            </Text>
          </TouchableOpacity>

          {/* Preview */}
          {photo && (
            <>
              <Text style={localStyles.previewTitle}>
                Captured Photo
              </Text>

              <Image
                source={{ uri: photo.uri }}
                style={localStyles.preview}
              />
            </>
          )}
        </View>
      </ScrollView>

      <NotificationPopup
        visible={showNotifications}
        onClose={() => setShowNotifications(false)}
      />

      <BottomNavStudent active="activities" />
    </View>
  );
};

export default Activities;

const localStyles = StyleSheet.create({
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  permissionText: {
    fontSize: 16,
    marginBottom: 20,
  },

  permissionButton: {
    backgroundColor: "#3f6b2f",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },

  permissionButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  camera: {
    width: "100%",
    height: 420,
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 20,
  },

  captureButton: {
    marginTop: 20,
    backgroundColor: "#3f6b2f",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  captureText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  previewTitle: {
    marginTop: 25,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#3f6b2f",
  },

  preview: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 30,
  },
});
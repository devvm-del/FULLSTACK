import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import styles from '../../../styles/student/timeLogs.styles'

const Wed = () => {

  return (
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
    
      
    
  );
};

export default Wed;

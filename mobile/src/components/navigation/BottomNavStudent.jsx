import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { checkUserStatus } from '../../utils/checkUserStatusHandler';

import { useState } from 'react';

export default function BottomNavStudent({ active }) {
  const navigation = useNavigation();

  useEffect(() => {
    checkUserStatus(navigation);

    const interval = setInterval(() => {
      checkUserStatus(navigation);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeStudent')}>
        <Ionicons
          name="home-outline"
          size={28}
          color={active === 'home' ? '#3f6b2f' : '#777'}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('TimeLogsStudent')}>
        <Ionicons
          name="time-outline"
          size={28}
          color={active === 'timelogs' ? '#3f6b2f' : '#777'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('ActivitiesStudent')}
      >
        <Ionicons
          name="add-outline"
          size={38}
          color="#fff"
      
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ReportsStudent')}>
        <Ionicons
          name="document-text-outline"
          size={28}
          color={active === 'reports' ? '#3f6b2f' : '#777'}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ProfileStudent')}>
        <Ionicons
          name="person-outline"
          size={28}
          color={active === 'profile' ? '#3f6b2f' : '#777'}
        />
      </TouchableOpacity>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    right: 20,
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10,
  },

    addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3f6b2f',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

});
import React from "react";
import { View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Ionicons } from "@expo/vector-icons";

const IconDropdown = ({
  icon,
  placeholder,
  value,
  onChange,
  data,
}) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={icon}
        size={22}
        color="black"
        style={styles.icon}
      />

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.selectedText}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={item => onChange(item.value)}
      />
    </View>
  );
};

export default IconDropdown;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 50,
    backgroundColor: "#fff",
    marginVertical: 8,
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    flex: 1,
    height: 50,
  },
  placeholder: {
    fontSize: 14,
    color: "#aaa",
  },
  selectedText: {
    fontSize: 14,
    color: "#333",
  },
});
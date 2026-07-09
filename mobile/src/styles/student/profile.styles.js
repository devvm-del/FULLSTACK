import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F7FA",
  },

  profileHeader: {
    backgroundColor: "#3f6b2f",
    height: 220,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  profileImageContainer: {
    position: "absolute",
    top: 140,
    alignSelf: "center",

    backgroundColor: "#fff",
    borderRadius: 80,
    padding: 4,

    elevation: 8,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  profileInfo: {
    alignItems: "center",
    marginTop: 70,
  },

  textName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
  },

  textUsername: {
    color: "#777",
    fontSize: 15,
    marginTop: 5,
  },

  infoCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 25,
    borderRadius: 20,
    padding: 20,

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 18,
    color: "#222",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    gap: 15,
  },

  infoLabel: {
    color: "#888",
    fontSize: 13,
  },

  infoValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,

    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
  },

  menuText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});
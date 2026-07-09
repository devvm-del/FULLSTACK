import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F7FA',
  },

  header: {
    backgroundColor: '#3f6b2f',
    height: 70,
    borderBottomEndRadius: 45,
    borderBottomStartRadius: 45,
    justifyContent: 'center'

  },

  headerProfileIcon: {
    alignItems: 'flex-end',
    marginEnd: 15,

  },

  content: {
    padding: 20,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    marginBottom: 24,
  },

   dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#E5E7EB',
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 20
  
    
  },

  dayText: {
    color: '#4B5563',
    fontWeight: '600'
  },

   dayButton: {
    padding: 10

  },
  activeDayButton: {
    backgroundColor: "#FFFF",
    padding: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  activeDayText: {
    color: "#000000",
    fontWeight: "bold",
  },


  schedContainer: {
    marginTop: 25
  },



  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  statBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '30%',
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
  },


 
  


});
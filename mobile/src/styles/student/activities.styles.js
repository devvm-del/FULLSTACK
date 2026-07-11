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

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginEnd: 15,
    gap: 8
  },


  notificationIcon: {
    padding: 10,
    backgroundColor: '#5C8F48',
    borderRadius: 15
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

 

 
});
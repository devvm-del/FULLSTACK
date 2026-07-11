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
    justifyContent: 'center',
    position: 'relative'


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
  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#3f6b2f',
    paddingLeft: 20
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    marginBottom: 24,
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  cardText: {
    marginTop: 8,
    color: '#555',
  },

  button: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 25,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
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

  statLabel: {
    color: '#666',
    marginTop: 5,
  },
});
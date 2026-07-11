import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F7FA',
  },

  header: {
    backgroundColor: '#F5F7FA',
  },

  content: {
    padding: 20,
  },
  
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#3f6b2f'
  },

  changePassContainer: {
    
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15
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
  
  backButton: {
    alignItems: 'flex-start',
    marginTop: 20,
    marginStart: 15
  },


  button: {
    flexDirection: 'row',
    backgroundColor: '#3f6b2f',
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 10
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

 
});
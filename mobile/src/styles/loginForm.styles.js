import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  loginContainer: {
    paddingHorizontal: 25,
    paddingVertical: 50,
    backgroundColor: '#F8FAFC',
    borderRadius: 25,
  },

  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
    color: '#64748B',
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },

  button: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#3f6b2f',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 8
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  forgotPassword: {
    textAlign: 'end',
    marginTop: 5,
    marginBottom: 5,
    marginEnd: 15,
    color: '#2563EB',
  },

  createAccountText: {
    textAlign: 'center',
    color: '#2563EB',
  },
});
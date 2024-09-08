import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
  image: {
    width: Dimensions.get('window').width - 32,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  address: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00a859',
    marginBottom: 16,
  },
  locationContainer: {
    marginTop: 16,
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  coordinates: {
    fontSize: 14,
    color: '#666',
  },
  lock_button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 50,
  },
  lock_buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  address: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  text: {
    fontSize: 18,
  },
  logout: {
    color: 'red',
  },
});

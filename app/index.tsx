import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import useCurrentLocation from './hooks/location';
import { setCurrentLocation } from './store/slices/homeSlice';
import dashboardStyles from './styles/dashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
const WelcomePage = () => {
  const dispatch = useDispatch();
  const { location, error, loading } = useCurrentLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await AsyncStorage.getItem('user');

        if (user) {
          router.push('/homeList');
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Error reading from AsyncStorage', error);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      dispatch(setCurrentLocation(location));
    }
  }, [location, dispatch]);

  const router = useRouter();
  return (
    <View style={dashboardStyles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default WelcomePage;

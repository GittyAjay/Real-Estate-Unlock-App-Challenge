import React, { useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { updateDataOnServer } from './store/slices/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import homeDetailsStyle from './styles/homeDetails';
import haversine from 'haversine';
import LockButton from '@/components/LockButton';
export default function HomeDetailsScreen() {
  const params = useLocalSearchParams();

  const { datas, currentLocation } = useSelector(
    (state: RootState) => state.homeList
  );
  const [homeDetails, setHomes] = useState(params);
  const location = currentLocation;

  const isWithinRange = () => {
    if (location && homeDetails.latitude && homeDetails.longitude) {
      const userCoords = {
        latitude: location.latitude,
        longitude: location.longitude,
      };
      const homeCoords = {
        latitude: parseFloat(homeDetails.latitude),
        longitude: parseFloat(homeDetails.longitude),
      };

      console.log('User coordinates:', userCoords);
      console.log('Home coordinates:', homeCoords);

      try {
        const distance = haversine(userCoords, homeCoords, { unit: 'meter' });
        console.log('Distance:', distance);
        return distance <= 30;
      } catch (err) {
        console.error('Error calculating distance:', err);
        return false;
      }
    }
    return false;
  };
  const dispatch = useDispatch();

  const unlockHome = () => {
    if (homeDetails.id) {
      const updatedHomes = datas.find(
        (home) => Number(home.id) === Number(homeDetails.id)
      );
      const newUpdatedData = { ...updatedHomes, locked: false };

      dispatch(updateDataOnServer(newUpdatedData));
    }
  };

  return (
    <GestureHandlerRootView>
      <View style={homeDetailsStyle.container}>
        <Image
          source={{ uri: homeDetails.image }}
          style={homeDetailsStyle.image}
        />
        <Text style={homeDetailsStyle.title}>{homeDetails.title}</Text>
        <Text style={homeDetailsStyle.address}>{homeDetails.address}</Text>
        <Text style={homeDetailsStyle.price}>{homeDetails.price}</Text>
        <Text style={homeDetailsStyle.description}>
          {homeDetails.description}
        </Text>
        <View style={homeDetailsStyle.locationContainer}>
          <Text style={homeDetailsStyle.location}>
            Location: {homeDetails.location}
          </Text>
          <Text style={homeDetailsStyle.coordinates}>
            Latitude: {homeDetails.latitude}
          </Text>
          <Text style={homeDetailsStyle.coordinates}>
            Longitude: {homeDetails.longitude}
          </Text>
        </View>
        {!(location.latitude || location.longitude) && (
          <ActivityIndicator color={'green'} />
        )}
        {(location.latitude || location.longitude) && homeDetails.locked && (
          <LockButton
            disabled={!isWithinRange()}
            onPress={unlockHome}
            title={
              isWithinRange()
                ? !!homeDetails?.locked
                  ? 'Already Unlocked'
                  : 'Unlock here'
                : 'Locked'
            }
          />
        )}
      </View>
    </GestureHandlerRootView>
  );
}

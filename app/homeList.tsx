import { useRouter } from 'expo-router';
import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { fetchAllData } from './store/slices/homeSlice';
import homeListStyle from './styles/homeList';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeListScreen() {
  const router = useRouter();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onLogout = () => {
    AsyncStorage.clear();
    router.push('/login');
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <></>,
      title: 'Home',
      headerRight: () => (
        <TouchableOpacity onPress={onLogout}>
          <Text style={homeListStyle.logout}>Logout</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const { datas, loading, error } = useSelector(
    (state: RootState) => state.homeList
  );
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={homeListStyle.item}
      onPress={() =>
        router.push({
          pathname: '/homeDetails',
          params: item,
        })
      }
    >
      <Image source={{ uri: item.image }} style={homeListStyle.image} />
      <Text style={homeListStyle.address}>{item.address}</Text>
      <Text style={homeListStyle.description}>{item.description}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={homeListStyle.container}>
      <FlatList
        data={datas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

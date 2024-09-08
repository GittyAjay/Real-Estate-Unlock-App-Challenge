import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack initialRouteName="login">
        <Stack.Screen options={{ headerShown: false }} name="index" />
        <Stack.Screen
          options={{ headerLeft: () => <></>, title: 'Login' }}
          name="login"
        />
        <Stack.Screen name="homeList" />
        <Stack.Screen options={{ title: 'Home Details' }} name="homeDetails" />
      </Stack>
    </Provider>
  );
}

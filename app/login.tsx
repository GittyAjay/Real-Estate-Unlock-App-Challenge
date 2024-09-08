import React from 'react';
import { Alert, View } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import CommonTextInput from '../components/CommonTextInput';
import { useRouter } from 'expo-router';
import styles from './styles/login.style';
import Button from '../components/CommonButton';
import { useDispatch } from 'react-redux';
import { loginUser } from './store/slices/authSlice';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default function LoginScreen(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();
  const login = async (values) => {
    console.log('login values', values);
    const { email, ...rest } = values;
    const { username, password } = rest;

    try {
      const resultAction = await dispatch(loginUser({ username, password }));

      if (loginUser.fulfilled.match(resultAction)) {
        router.push('/homeList');
      } else {
        Alert.alert(
          'Error logging in',
          `${'An unknown error occurred'}\n\nUse this link to get user information:\nhttps://dummyjson.com/users`
        );
      }
    } catch (error) {
      Alert.alert(
        'Error logging in',
        `${'An unknown error occurred'}\n\nUse this link to get user information:\nhttps://dummyjson.com/users`
      );
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={login}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <CommonTextInput
              label="Username"
              value={values.username}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              placeholder="Enter your username"
              error={touched.username ? errors.username : ''}
            />

            <CommonTextInput
              label="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder="Enter your password"
              secureTextEntry
              error={touched.password ? errors.password : ''}
            />
            <Button title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
}

import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, TextInput, Pressable, Image } from 'react-native';
import { FontAwesome, Ionicons, Entypo, AntDesign } from '@expo/vector-icons';

import { storeObjectData, getObjectData } from '../../Functions';

import { styles } from './styles';

export default function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [isEmail, setIsEmail] = useState(false);

  const rememberKey = 'rememberDietApp';

  useEffect(() => {
    const fetchData = async () => {
      const value = await getObjectData(rememberKey);
      if (value !== null) {
        setLogin(value.login);
        setPassword(value.password);
        navigateToHome(value.login);// add more verification steps such as testing if login and pass are valid
      }
    };

    fetchData();
  }, []);

  const handleLogin = useCallback(() => {
    if (isValidEmail(login)) {
      storeObjectData(rememberKey, { login, password });
      navigateToHome(login);
    }
  }, [login]);

  const isValidEmail = useCallback((email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, []);

  const navigateToHome = useCallback((login) => {
    navigation.navigate('Home', { login });
  }, [navigation]);

  const handleInvalidEmail = useCallback(() => {
    // Handle invalid email
  }, []);

  const handleSignIn = useCallback(() => {
    alert('Not yet implemented');
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require('../../../assets/icon.png')}
        />
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <View style={{ width: '80%', alignItems: 'center', flexDirection: 'row' }}>
            <Ionicons name="mail-outline" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Login"
              value={login}
              autoComplete="email"
              onChangeText={(value) => {
                setLogin(value);
                setIsEmail(isValidEmail(value));
              }}
            />
          </View>
          {login ? (
            <View>
              {isEmail ? (
                <AntDesign name="check" size={24} color="black" />
              ) : (
                <AntDesign name="close" size={24} color="black" />
              )}
            </View>
          ) : null}
        </View>
        <View style={styles.inputContainer}>
          <View style={{ width: '80%', alignItems: 'center', flexDirection: 'row' }}>
            <FontAwesome name="lock" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={securePassword}
            />
          </View>
          {password ? (
            <Pressable style={styles.eye} onPress={() => setSecurePassword(!securePassword)}>
              {securePassword ? (
                <Entypo name="eye-with-line" size={24} color="black" />
              ) : (
                <Entypo name="eye" size={24} color="black" />
              )}
            </Pressable>
          ) : null}
        </View>
      </View>
      <View  style={styles.pressablesContainer}>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text>Login</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleSignIn}>
          <Text>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
}

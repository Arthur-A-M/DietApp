import React, { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { FontAwesome, Ionicons, Entypo, AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

export default function LoginScreen() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [isEmail, setIsEmail] = useState(false);

  const handleLogin = () => {
    // Handle login logic
  };

  const handleSignIn = () => {
    // Handle sign in logic
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={{ width: '80%', alignItems: 'center', flexDirection: 'row' }}>
          <Ionicons name="mail-outline" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Login"
            value={login}
            onChangeText={setLogin}
          />
        </View>
        {login ?
          <View>
            {isEmail ?
              <AntDesign name="check" size={24} color="black" />
              : <AntDesign name="close" size={24} color="black" />}
          </View>
          : null}
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
        {password ?
          <Pressable
            style={styles.eye}
            onPress={() => setSecurePassword(!securePassword)}
          >
            {securePassword ?
              <Entypo name="eye-with-line" size={24} color="black" />
              : <Entypo name="eye" size={24} color="black" />}
          </Pressable>
          : null}
      </View>
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text>Login</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleSignIn}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
}

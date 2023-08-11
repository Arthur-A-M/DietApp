import { useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from './styles';

export default function HomeScreen({ navigation, route }) {
  const { login } = route.params;

  useEffect(() => {
    console.log(login);
  });
  
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <Pressable
        onPress={() => navigation.navigate('Meals', { login })}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to Meals</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Foods', { login })}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to Foods</Text>
      </Pressable>
    </View>
  );
}

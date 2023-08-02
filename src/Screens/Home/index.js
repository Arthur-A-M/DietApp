import { Text, View } from 'react-native';

import { styles } from './styles';

export default function HomeScreen({ navigation, route }) {

  const { login } = route.params;
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>{login} received from LoginScreen</Text>
      </View>
    );
  }
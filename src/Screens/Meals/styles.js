import { StyleSheet } from 'react-native';

import { Colors } from '../../Styles/Colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    meal: {
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: Colors.generic.dark,
      borderWidth: 1,
      borderRadius: 2,
      marginVertical: 10
    }
  });
  
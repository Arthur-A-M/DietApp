import { StyleSheet } from 'react-native';

import { Colors } from '../../Styles/Colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.generic.light,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      width: '70%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    input: {
      paddingHorizontal: 10,
    }
  });
  
import { StyleSheet } from 'react-native';

import { Colors } from '../../Styles/Colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.generic.light,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    imageContainer: {
     flex: 1, 
    },
    inputsContainer:{
      flex: 1,
      alignItems: 'start',
      justifyContent: 'center',
    },
    pressablesContainer: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingBottom: 20
    },
    inputContainer: {
      flexDirection: 'row',
      width: '70%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    input: {
      paddingHorizontal: 10,
    },
    button: {
      width: '70%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.core.main,
      height: 50,
      borderRadius: 5,
    },
  });
  
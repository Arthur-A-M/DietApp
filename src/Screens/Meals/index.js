import { useEffect } from 'react';
import { Text, View, Pressable, FlatList } from 'react-native';

import { styles } from './styles';

import { meals } from '../../Data'

export default function MealsScreen({ navigation, route }) {
  const { login } = route.params;
  useEffect(() => {
    console.log(login);
  });

  const renderItem = ({ item }) => (
    <View style={styles.meal}>
      <Text>{item.name}</Text>
      <View>
        <Text style={{ textAlign: 'center' }}>Minimium grams</Text>
        <Text>protein {item.protein}g</Text>
        <Text>carbohydrates {item.carbohydrates}g</Text>
        <Text>fruts {item.fruts}g</Text>
        <Text>greens {item.greens}g</Text>
      </View>
      <Pressable 
      onPress={() => navigation.navigate('Meal',  { item } )}>
        <Text>calories {item.calories}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

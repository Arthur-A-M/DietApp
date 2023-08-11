import { useEffect, useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';

import { SelectList } from 'react-native-dropdown-select-list'

import { styles } from './styles';

export default function MealScreen({ navigation, route }) {
  const { item } = route.params;
  useEffect(() => {
    console.log(item);
  });

  const [selected, setSelected] = useState("");
  const [calPer100Gram, setCalPer100Gram] = useState(0);
  const [grams, setGrams] = useState(0);
  const [calories, setCalories] = useState(0);

  const data = [
    'protein',
    'carbohydrates',
    'fruts',
    'greens',
  ];

  function addCalories() {
    const caloriesAdded = (calPer100Gram*grams)/100;
    setCalories(calories+caloriesAdded);
    return setSelected("");
  }

  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
      <View>
        <Text style={{ textAlign: 'center' }}>Minimium grams</Text>
        <Text>protein {item.protein}g</Text>
        <Text>carbohydrates {item.carbohydrates}g</Text>
        <Text>fruts {item.fruts}g</Text>
        <Text>greens {item.greens}g</Text>
      </View>
      <Pressable>
        <Text>calories {item.calories}</Text>
      </Pressable>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
      />
      {selected ?
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setCalPer100Gram}
            value={calPer100Gram}
            maxLength={5}
            placeholder="Calories per 100 grams"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setGrams}
            value={grams}
            maxLength={4}
            placeholder="Grams of food"
            keyboardType="numeric"
          />
          <Pressable
          onPress={addCalories}
          >
            <Text>Add</Text>
          </Pressable>
        </View>
        : null}
        <Text>{calories} Calories obtained</Text>
    </View>
  );
}
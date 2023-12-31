import { useEffect, useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';

import { SelectList } from 'react-native-dropdown-select-list';// search is bugged

import { foodData } from '../../Data';

import { styles } from './styles';

export default function MealScreen({ navigation, route }) {
  const { item } = route.params;

  const [selected, setSelected] = useState("");
  const [calPer100Gram, setCalPer100Gram] = useState("");
  const [grams, setGrams] = useState("");
  const [calories, setCalories] = useState(0);
  const [secondSelected, setSecondSelected] = useState("");
  const [foodsEaten, setFoodsEaten] = useState([]);

  useEffect(() => {
    console.log(item);
    console.log(foodsEaten);
  }, [foodsEaten]);

  function addCalories() {
    const newFood = {
      secondSelected: secondSelected,
      grams: grams
    }
    const caloriesAdded = (calPer100Gram * grams) / 100;
    setFoodsEaten(foodsEaten => [...foodsEaten, newFood]);
    setCalories(calories + caloriesAdded);
    setSelected("");
  }

  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>

      <View>
        <Text style={{ textAlign: 'center' }}>Minimum grams</Text>
        {Object.entries(foodData).map(([key]) => (
          <Text key={key}>
            {item[key]}g
          </Text>
        ))}
      </View>

      <Pressable>
        <Text>Calories {item.calories}</Text>
      </Pressable>

      <SelectList setSelected={setSelected} data={Object.keys(foodData)} save="value" search={false} />

      {selected && (
        <SelectList setSelected={setSecondSelected} data={Object.keys(foodData[selected])} save="value" search={false} />
      )}

      {secondSelected && (
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setCalPer100Gram}
            value={calPer100Gram.toString()}
            maxLength={5}
            placeholder="Calories per 100 grams"
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            onChangeText={setGrams}
            value={grams.toString()}
            maxLength={4}
            placeholder="Grams of food"
            keyboardType="numeric"
          />

          <Pressable onPress={addCalories}>
            <Text>Add</Text>
          </Pressable>
        </View>
      )}

      <Text>{calories} Calories obtained</Text>
    </View>
  );
}

export const mealsData = {
  grams: {
    protein: [200, 250, 150, 200, 0],
    carbohydrates: [100, 200, 150, 200, 0],
    fruts: [0, 50, 30, 0, 30],
    greens: [0, 50, 30, 0, 30],
  },
  calories: [816, 900, 620, 730, 130]
}

export const meals = [
  {
    name: 'Meal 1',
    protein: mealsData.grams.protein[0],
    carbohydrates: mealsData.grams.carbohydrates[0],
    fruts: mealsData.grams.fruts[0],
    greens: mealsData.grams.greens[0],
    calories: mealsData.calories[0]
  },
  {
    name: 'Meal 2',
    protein: mealsData.grams.protein[1],
    carbohydrates: mealsData.grams.carbohydrates[1],
    fruts: mealsData.grams.fruts[1],
    greens: mealsData.grams.greens[1],
    calories: mealsData.calories[1]
  },
  {
    name: 'Meal 3',
    protein: mealsData.grams.protein[2],
    carbohydrates: mealsData.grams.carbohydrates[2],
    fruts: mealsData.grams.fruts[2],
    greens: mealsData.grams.greens[2],
    calories: mealsData.calories[2]
  },
  {
    name: 'Meal 4',
    protein: mealsData.grams.protein[3],
    carbohydrates: mealsData.grams.carbohydrates[3],
    fruts: mealsData.grams.fruts[3],
    greens: mealsData.grams.greens[3],
    calories: mealsData.calories[3]
  },
  {
    name: 'Meal 5',
    protein: mealsData.grams.protein[4],
    carbohydrates: mealsData.grams.carbohydrates[4],
    fruts: mealsData.grams.fruts[4],
    greens: mealsData.grams.greens[4],
    calories: mealsData.calories[4]
  },
];

export const foodGroups = [
  'protein',
  'carbohydrates',
  'fruts',
  'greens',
  'fats'
]

/**
 * {
  kcal: 0,
  protein: 0,
  carbohydrates: 0,
  fats: 0
    }
 */
export const foodData = {
  protein: {
    'Fried Bull\'s Liver':{
      kcal: 175,
      protein: 26.52,
      carbohydrates: 5.16,
      fats: 4.68
    },
    'Cooked Chiken':{
      kcal: 155,
      protein: 24.24,
      carbohydrates: 0,
      fats: 5.7
    },
    'Fried Chicken': {
      kcal: 187,
      protein: 33.44,
      carbohydrates: 0.51,
      fats: 4.71
    },
    'Cooked Chiken Liver':{
      kcal: 167,
      protein: 24.46,
      carbohydrates: 0.87,
      fats: 6.51
    },
    'Cooked Chiken Heart':{
      kcal: 185,
      protein: 26.41,
      carbohydrates: 0.1,
      fats: 7.92
    },
    'Cooked Chiken Gizzard': {
      kcal: 154,
      protein: 30.39,
      carbohydrates: 0,
      fats: 2.68
    },
    'Cooked Fish': {
      kcal: 162,
      protein: 22.86,
      carbohydrates: 0,
      fats: 7.17
    },
    'Cooked Egg': {
      kcal: 155,
      protein: 12.58,
      carbohydrates: 1.12,
      fats: 10.61
    },
    'Fried Egg': {
      kcal: 196,
      protein: 13.61,
      carbohydrates: 0.83,
      fats: 14.84
    }
  },
  carbohydrates: {
    'Cooked Rice': {
      kcal: 130,
      protein: 2.69,
      carbohydrates: 28.7,
      fats: 0.28
    },
    'Cooked Whole Rice': {
      kcal: 112,
      protein: 2.32,
      carbohydrates: 23.51,
      fats: 0.83
    },
    'Raw Cassava':{
      kcal: 358,
      protein: 0.19,
      carbohydrates: 88.69,
      fats: 0.02
    }

  },
  fruts: {
    'Plum': {
      kcal: 46,
      protein: 0.7,
      carbohydrates: 11.42,
      fats: 0.28
    },
    'Pass Grapes': {
      kcal: 299,
      protein: 3.07,
      carbohydrates: 79.18,
      fats: 0.46
    },
    'Strawberry': {
      kcal: 32,
      protein: 0.67,
      carbohydrates: 7.68,
      fats: 0.3
    },
    'Watermelon': {
      kcal: 30,
      protein: 0.61,
      carbohydrates: 7.55,
      fats: 0.15
    },
    'Orange Juice': {
      kcal: 45,
      protein: 0.7,
      carbohydrates: 10.4,
      fats: 0.2
    },
    'Tangerine': {
      kcal: 53,
      protein: 0.81,
      carbohydrates: 13.34,
      fats: 0.31
    },
    'Passion Fruit Juice': {
      kcal: 60,
      protein: 0.67,
      carbohydrates: 14.45,
      fats: 0.18
    },
    'Pear': {
      kcal: 57,
      protein: 0.36,
      carbohydrates: 15.23,
      fats: 0.14
    },
    'Pineapple': {
      kcal: 50,
      protein: 0.54,
      carbohydrates: 13.12,
      fats: 0.12
    },
    'Banana': {
      kcal: 89,
      protein: 1.09,
      carbohydrates: 22.84,
      fats: 0.33
    },
    'Guava': {
      kcal: 68,
      protein: 2.55,
      carbohydrates: 14.32,
      fats: 0.95
    },
    'Kiwi': {
      kcal: 61,
      protein: 1.14,
      carbohydrates: 14.66,
      fats: 0.52
    },
    'Limonade': {
      kcal: 22,
      protein: 0.35,
      carbohydrates: 6.9,
      fats: 0.24
    },
    'Mango': {
      kcal: 60,
      protein: 0.82,
      carbohydrates: 14.98,
      fats: 0.38
    },
    
  },
  greens: {
    'Cooked Spinach': {
      kcal: 23,
      protein: 2.97,
      carbohydrates: 3.75,
      fats: 0.26
    },
    'Onion': {
      kcal: 44,
      protein: 1.36,
      carbohydrates: 10.15,
      fats: 0.19
    },
    'Cooked Flat Lettuce': {
      kcal: 13,
      protein: 1.35,
      carbohydrates: 2.23,
      fats: 0.22
    },
    'Cooked Eggplant': {
      kcal: 35,
      protein: 0.83,
      carbohydrates: 8.73,
      fats: 0.23
    },
    'Cooked Cauliflower': {
      kcal: 23,
      protein: 1.84,
      carbohydrates: 4.11,
      fats: 0.45
    },
    'Cooked Carrot': {
      kcal: 35,
      protein: 0.76,
      carbohydrates: 8.22,
      fats: 0.18
    },
    'Carrot': {
      kcal: 41,
      protein: 0.93,
      carbohydrates: 9.58,
      fats: 0.24
    },
    'Cooked Cabbage': {
      kcal: 20,
      protein: 2.08,
      carbohydrates: 3.71,
      fats: 0.24
    },
    'Cooked Broccoli': {
      kcal: 35,
      protein: 2.38,
      carbohydrates: 7.18,
      fats: 0.41
    },
    'Cooked Beet': {
      kcal: 44,
      protein: 1.68,
      carbohydrates: 9.96,
      fats: 0.18
    },
    'Cooked Black Bean': {
      kcal: 33,
      protein: 4.83,
      carbohydrates: 4.72,
      fats: 0.58
    },
    'Tomato': {
      kcal: 18,
      protein: 0.88,
      carbohydrates: 3.89,
      fats: 0.2
    },
    'Cooked Sweet Potato': {
      kcal: 90,
      protein: 2.01,
      carbohydrates: 20.71,
      fats: 0.15
    },
    'Cooked Zucchini': {
      kcal: 17,
      protein: 1.21,
      carbohydrates: 3.11,
      fats: 0.32
    },
    'Pea Soup': {
      kcal: 98,
      protein: 7.05,
      carbohydrates: 17.08,
      fats: 0.51
    },
    'Cooked Chayote':{
      kcal: 22,
      protein: 0.62,
      carbohydrates: 4.5,
      fats: 0.48
    },
  },
  fats: {
    'Butter': {
      kcal: 717,
      protein: 0,
      carbohydrates: 0,
      fats: 81
    },
    'Olive Oil': {
      kcal: 904.15,
      protein: 0,
      carbohydrates: 0,
      fats: 100
    },
    'Nuts':{
      kcal: 666.7,
      protein: 15.3,
      carbohydrates: 13.3,
      fats: 67
    }
  }
}
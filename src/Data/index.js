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
  protein: a,
  carbohydrates: {
    'Cooked Rice': {
      kcal: 130,
      protein: 2.69,
      carbohydrates: 28.7,
      fats: 0.28
    },

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
    'cookedSpinach': {
      kcal: 0,
      protein: 0,
      carbohydrates: 0,
      fats: 0
    }
  },
  fats: {
    'Butter': {
      kcal: 717,
      protein: 0,
      carbohydrates: 0,
      fats: 81
    },
  }
}
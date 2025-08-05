
# Menu App 

## Overview
Menu App is a mobile application built with React Native and Expo that allows users to explore different meal categories and view recipe details such as ingredients, preparation steps, duration, and more. The app uses a combination of stack and drawer navigation to provide a smooth and intuitive user experience.

## Project Structure
```
.
├── App.js                   
├── app.json                  
├── babel.config.js           
├── package.json              
├── /assets                  
├── /components               # Reusable UI components
│   ├── CategoryGridTile.js
│   ├── MealDetails.js
│   ├── MealItem.js
│   └── /MealDetail           # Subcomponents for meal detail screen
│       ├── IconButton.js
│       ├── List.js
│       └── Subtitle.js
├── /data
│   └── dummy-data.js         # Static category and recipe data
├── /models
│   ├── category.js
│   └── meal.js
├── /screens
│   ├── CategoriesScreens.js
│   ├── FavoritesScreen.js
│   ├── MealItemScreen.js
│   └── MealsOverViewScreen.js
```

## Technologies Used
- React Native
- Expo
- React Navigation:
- Ionicons

## Main Features
- Meal Categories
- Recipe List View
- Recipe Detail View
- Favorites Screen
- Drawer and Stack Navigation

## Example Data
Defined in `data/dummy-data.js`, including 10 categories and 10 meals.

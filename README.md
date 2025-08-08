# Healthy Menu

## Overview
**Healthy Menu** is a mobile application built with **React Native** and **Expo** that allows users to explore a variety of meal categories and view detailed recipes including ingredients, preparation steps, cooking duration, and more. The app features intuitive **Drawer** and **Stack** navigation, along with a **Favorites** screen backed by **Redux** for state management.

## Features
- Browse meal categories with grid layout
- View meals by selected category
- Detailed meal view with ingredients and step-by-step instructions
- Favorite/unfavorite meals with persistent global state using Redux
- Custom icons and styling
- Fully responsive design with scrollable lists and dynamic routing

## Technologies Used
- **React Native**
- **Expo**
- **React Navigation** (`@react-navigation/native`, `drawer`, `native-stack`)
- **Redux Toolkit** (`@reduxjs/toolkit`, `react-redux`)
- **Ionicons** for UI icons
- **Expo Status Bar**, **Safe Area Context**, and other Expo APIs

## Project Structure
```
.
├── App.js                        
├── app.json                       
├── babel.config.js               
├── package.json                 
├── /components                    # Reusable UI components
│   ├── CategoryGridTile.js
│   ├── MealDetails.js
│   ├── MealsList/                 # List and item components
│   │   ├── MealItem.js
│   │   └── MealsList.js
│   └── MealDetail/                # Subcomponents for meal detail view
│       ├── IconButton.js
│       ├── List.js
│       └── Subtitle.js
├── /data
│   └── dummy-data.js              # Static data for categories and meals
├── /models
│   ├── category.js                # Category model
│   └── meal.js                    # Meal model
├── /screens                       # App screens
│   ├── CategoriesScreen.js       
│   ├── MealsOverviewScreen.js    
│   ├── MealItemScreen.js         
│   └── FavoritesScreen.js        
├── /store
│   └── /redux                     # Redux logic for favorites
│       ├── favorites.js
│       └── store.js
```

## Main Features
- Meal Categories
- Recipe List View
- Recipe Detail View
- Favorites Screen
- Drawer and Stack Navigation

## Navigation
- **Drawer Navigation** (Main menu: "All Categories", "Favorites")
- **Stack Navigation** (Categories → Meals Overview → Meal Details)

## State Management
The app uses **Redux Toolkit** for global state handling of favorite meals. Users can toggle favorites from the meal detail screen. Favorites are accessed in the drawer navigation.

## Example Data
Defined in `data/dummy-data.js`:
- **10 meal categories**
- **10 meals** with:
  - Category tags
  - Duration, affordability, and complexity
  - Images
  - Ingredients and steps
  - Dietary tags: gluten-free, vegan, vegetarian, lactose-free

## Styling
The app uses custom styles for theming, including:
- Warm color palette
- Custom shadow and ripple effects
- Press animations using opacity
- Responsive layouts and scrollable views

## How to Run the App
1. Make sure you have **Node.js** and **Expo CLI** installed.
2. Clone this repo and run:
```bash
npm install
npx expo start
```
3. Use an emulator or Expo Go app on your device to preview.




# 🍳 FoodieApp

A modern, responsive, and feature-rich cross-platform mobile application built using **React Native (Expo CLI)**. **FoodieApp** is designed for culinary enthusiasts to discover new dishes, manage custom personal recipes, track favorites, and organize cooking ingredients via an integrated shopping cart system.

---

## 📘 Project Overview

This mobile application serves as a comprehensive showcase of modern native application design, focusing on modular screen distribution, nested navigation routing engines, and fluid interactive consumer workflows. 

The application utilizes an elegant tabbed layout to cleanly partition separate structural functional scopes (Home Feed, Bookmarked Favorites, Personal Recipe Creation, and Grocery Tracking) while preserving standalone historical view contexts through internal stack mechanics.

---

## 🎨 Navigation Hierarchy & Architecture

The application implements a robust nested navigation scheme using `@react-navigation`:

```text
├── 🧭 Tab.Navigator (Global Application Container)
│   ├── 🏠 Home (Hosts Stack.Navigator)
│   │   ├── 📰 HomeScreen (Infinite browse gallery of curated food cards)
│   │   └── 🔍 RecipeDetail (Granular view of ingredients and cooking instructions)
│   ├── ❤️ Favorites (Dynamic storage for user-bookmarked items)
│   ├── 📖 My Recipes (Personal collection of customized or user-saved recipes)
│   ├── ➕ Add (Interactive ingestion layout for updating specific custom recipes)
│   └── 🛒 Cart (Automated shopping cart compiling collective ingredient lists)
```

---

## ⚙️ Technologies & Tools Used

| Tool / Library | Purpose & Implementation Details |
| :--- | :--- |
| **React Native (Expo CLI)** | Underlying architecture supporting native execution across Android & iOS. |
| **@react-navigation/native** | Core utility stack supplying global navigation states and transitions. |
| **@react-navigation/bottom-tabs** | Standard bottom navbar interface allowing instant swapping between primary contexts. |
| **@react-navigation/stack** | Context-specific historical routing for tracking hierarchical screen drilldowns. |
| **@expo/vector-icons** | Renders performant, hardware-accelerated icon glyphs (`Ionicons`) globally across the UI. |

---

## 🧩 Features Implemented

* 🧭 **Contextual Multi-Stack Navigation:** Combines custom tab and stack routing, allowing users to drill deep into individual recipe specs without losing active positions on adjacent tabs.
* 🎨 **Active Color Feedback Engine:** Uses custom tint parameters (`#ff9500`) to dynamically highlight focus changes, ensuring strong, scannable user navigation cues.
* 📦 **Dynamic Modular Screens:** Seamlessly handles decoupled operational spaces ranging from local forms (`AddRecipeScreen`) to aggregated data views (`CartScreen`).

---

## 💻 Project Setup & Execution

Follow these steps to initialize and preview the mobile runtime environment locally:

### 1. Project Ingestion & Dependency Installation
Install the necessary functional navigation modules and iconography providers directly into your project environment:
```bash
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/stack

npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
```

### 2. Initiate Metro Runtime Bundler
Execute the native live compiler:
```bash
npx expo start
```
* Press **`a`** to load the application inside an active local Android Emulator.
* Scan the matching terminal QR code with the **Expo Go** helper application on your physical smartphone to review changes instantly through hot-reloading.

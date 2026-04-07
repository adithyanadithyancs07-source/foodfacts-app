# 🥗 FoodFacts App (Part 1)

## 📌 What I built

A React app that allows users to search for food items and view their nutrition information using a live API.

## 🚀 Features

* Search for any food (banana, milk, oats, etc.)
* Display results as cards
* Shows:

  * Product name
  * Brand
  * Calories, Protein, Carbs, Fat
  * Product image (with fallback)
* Loading state while fetching data
* Empty state before search
* No-results state when nothing found

## 🧠 Concepts Learned

* JSX
* Functional Components
* Props
* useState Hook
* Event Handling
* Controlled Inputs
* List Rendering with `.map()`
* Fetch API (with async/await)
* Conditional Rendering

## ▶️ How to Run

```bash
npm install
npm run dev
```

## 📸 Screenshots

(Add screenshots here)

## ⚠️ Challenges Faced

* CORS error while fetching API
* Handling missing images and data
* Fixing component export/import errors

## ❓ Questions

* How to handle APIs securely without CORS issues?
* How to improve UI design further?

## 📂 Project Structure

```
src/
 ├── components/
 │   ├── SearchBar.jsx
 │   ├── FoodCard.jsx
 │   └── FoodList.jsx
 ├── App.jsx
 └── main.jsx
```

---

## 🙌 Final Status

✅ App is working
✅ Search functionality implemented
✅ UI states handled
Final submission for Part 1
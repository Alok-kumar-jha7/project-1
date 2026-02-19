# Create a professional README.md file for the React Native Product Module

import pypandoc

readme_content = """
# React Native Product Module

## 📱 Overview
This project is a mini product module built using React Native (Expo).
It fetches products from the Escuela API and displays them in a list.
Users can navigate to a detail screen to view more information about each product.

---

## 🚀 Features
- Product List Screen with API integration
- Product Detail Screen
- Loading with react native inbuilt component and Error handling
- Reusable components (Button, Error)
- Responsive layout for different screen sizes
- Clean UI with modern styling

---

## 🛠 Tech Stack
- React Native (Expo)
- Axios
- Expo Router
- React Hooks (useState, useEffect)

---

## 🌐 API Used
GET https://api.escuelajs.co/api/v1/products

---

## ⚙️ Setup Instructions

1. Clone the repository

   git clone https://github.com/your-username/product-module.git

2. Navigate into the project folder

   cd product-module

3. Install dependencies

   npm install

4. Start the development server

   npx expo start

5. Run on:
   - Android Emulator
   - iOS Simulator
   - Expo Go App

---

## 📌 Assumptions
- API returns valid product data.
- Each product contains at least one image.
- Internet connection is required to fetch products.
- Favorites (if implemented) are stored locally and not persisted.

---

## 📂 Folder Structure

components/
  - Button.jsx
  - Error.jsx

screens/
  - ProductList.jsx
  - ProductDetail.jsx
  - Home.jsx



---

## 🎯 Evaluation Focus
- Clean UI and layout
- Code structure and reusability
- Proper API integration
- Navigation handling
- Smooth user experience

---

## 👨‍💻 Author
Your Name
"""

output_path = "/mnt/data/README.md"

pypandoc.convert_text(
    readme_content,
    'md',
    format='md',
    outputfile=output_path,
    extra_args=['--standalone']
)

output_path

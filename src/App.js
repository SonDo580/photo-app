import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "components/Header";
import NotFound from "components/NotFound";
import Photo from "features/photo";
import SignIn from "features/auth/pages/SignIn";

import "./App.scss";
import productApi from "api/productApi";

import firebase from "firebase/compat/app";

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const params = {
        _page: 1,
        _limit: 10,
      };

      const response = await productApi.getAll(params);
      setProducts(response.data);
    } catch (err) {
      console.log("Failed to fetch product list: ", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="photo-app">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/photos" />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/photos/*" element={<Photo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

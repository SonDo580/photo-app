import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "components/Header";
import NotFound from "components/NotFound";
import Photo from "features/photo";

import "./App.scss";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {};

    fetchProducts();
  }, []);

  return (
    <div className="photo-app">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/photos" />} />
          <Route path="/photos/*" element={<Photo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

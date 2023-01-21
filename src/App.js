import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "components/Header";
import NotFound from "components/NotFound";
import Photo from "features/photo";

import "./App.scss";

function App() {
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

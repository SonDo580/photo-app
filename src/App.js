import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Photo from "./features/photo";
import NotFound from "./components/NotFound";

import "./App.scss";

function App() {
  return (
    <div className="photo-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/photos" />} />
          <Route path="/photos" element={<Photo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

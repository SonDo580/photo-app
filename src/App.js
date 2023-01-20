import { BrowserRouter, Routes, Route } from "react-router-dom";

import Photo from "./features/photo";
import NotFound from "./components/NotFound";

import "./App.scss";

function App() {
  return (
    <div className="photo-app">
      <BrowserRouter>
        <Routes>
          <Route path="/photos" element={<Photo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import Photo from "./features/photo";
import NotFound from "./components/NotFound";

import "./App.scss";

function App() {
  return (
    <div className="photo-app">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/photos">Main Photo Page</Link>
          </li>
          <li>
            <Link to="/photos/add">Add New Photo Page</Link>
          </li>
          <li>
            <Link to="/photos/:id">Edit Photo Page</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" loader={<Navigate to="/photos" />} />
          <Route path="/photos/*" element={<Photo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import AddEdit from "./pages/AddEdit";
import Main from "./pages/Main";

function Photo() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/add" element={<AddEdit />} />
      <Route path="/:id" element={<AddEdit />} />
    </Routes>
  );
}

export default Photo;

import { Routes, Route } from "react-router-dom";

import Add from "./pages/Add";
import Main from "./pages/Main";

function Photo() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/add" element={<Add />} />
      <Route path="/:id" element={<Add />} />
    </Routes>
  );
}

export default Photo;

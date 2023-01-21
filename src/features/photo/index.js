import { Routes, Route } from "react-router-dom";

import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Main from "./pages/Main";

function Photo() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/add" element={<Add />} />
      <Route path="/:id" element={<Edit />} />
    </Routes>
  );
}

export default Photo;

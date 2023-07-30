import { useState } from "react";
import "./App.css";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import BodyTypeTest from "./pages/YourBodyType/YourBodyType";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import YourBodyType from "./pages/YourBodyType/YourBodyType";
import Blog from "./pages/Blog/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/YourBodyType" element={<YourBodyType />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

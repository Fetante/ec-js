import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import Home from "./views/Home";
import Contacts from "./views/Contacts";
import News from "./views/News";
import NewsDetails from "./views/NewsDetails";
import NotFound from "./views/NotFound";
import { ArticleProvider } from "./contexts/ArticleContext";

function App() {
  return (
    <HashRouter>
      <ArticleProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/news" element={<News />} />
          <Route path="news/:id" element={<NewsDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ArticleProvider>
    </HashRouter>
  );
}

export default App;

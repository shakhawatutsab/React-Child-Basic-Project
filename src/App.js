import "./App.css";
import "./css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import SinglePost from "./Pages/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/single-post/:id" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

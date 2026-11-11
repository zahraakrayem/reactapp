import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Catalog from "./pages/Catalog";
import CategoryPage from "./pages/CategoryPage";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Borrowed from "./pages/Borrowed";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <Navbar setSelectedCategory={setSelectedCategory} />
      <main>
        <Routes>
          <Route path="/" element={<Catalog setSelectedBook={setSelectedBook} />} />
          <Route
            path="/category"
            element={
              <CategoryPage
                category={selectedCategory}
                setSelectedBook={setSelectedBook}
              />
            }
          />
          <Route path="/book" element={<BookDetails book={selectedBook} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/borrowed" element={<Borrowed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
            
      <Footer />
    </>
    
  );
}

export default App;
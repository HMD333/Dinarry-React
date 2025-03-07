import Layout from "./pages/layout.jsx";
import Home from "./pages/home.jsx";
import Meals from "./pages/Meals.jsx";
import Drinks from "./pages/Drinks.jsx";
import Desserts from "./pages/Desserts.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Meals" element={<Meals />} />
            <Route path="/Drinks" element={<Drinks />} />
            <Route path="/Desserts" element={<Desserts />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;

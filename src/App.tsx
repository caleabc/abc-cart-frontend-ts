// Lib
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Comp
import Home from "./pages/customer/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

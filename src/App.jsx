import Employees from "./pages/Employees";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";
import Error404 from "./components/Error404";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/employees" element={<Employees />}></Route>
            <Route path="/dictionary" element={<Dictionary />}></Route>
            <Route path="/dictionary/:search" element={<Definition />}></Route>
            <Route path="/error404" element={<Error404 />}></Route>
            <Route path="/*" element={<Error404 />}></Route>
          </Routes>
        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Employees from "./pages/Employees";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/employees" element={<Employees />}></Route>
          </Routes>
        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;

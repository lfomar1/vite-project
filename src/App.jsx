import Employees from "./components/Employees";
import { useState } from "react";
function App() {
  const [role, setRole] = useState("dev");
  return (
    <div>
      <input
        type="text"
        placeholder="Change role"
        onChange={(e) => setRole(e.target.value)}
      />
      <Employees name="Lucas" role={role} />
      <Employees name="Fernanda" />
    </div>
  );
}

export default App;

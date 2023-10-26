import Employees from "./components/Employees";
import AddEmployee from "./components/AddEmployee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Lucas",
      role: "Developer",
      img: "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg",
    },
    {
      id: 2,
      name: "Fernanda",
      role: "Ux Designer",
      img: "https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg",
    },
    {
      id: 3,
      name: "Carla",
      role: "Project Manager",
      img: "https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg",
    },
    {
      id: 4,
      name: "Francis",
      role: "Pianist",
      img: "https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg",
    },
    {
      id: 5,
      name: "Marta",
      role: "Developer",
      img: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
    },
    {
      id: 6,
      name: "Lorenzo",
      role: "Developer",
      img: "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg",
    },
  ]);
  const changeEmployeeInfo = (id, newName, newRole) => {
    const newEmployeeInfo = employees.map((employee) => {
      if (id === employee.id) {
        return {
          ...employee,
          name: newName,
          role: newRole,
        };
      }
      return employee;
    });

    setEmployees(newEmployeeInfo);
  };
  return (
    <div className="flex flex-wrap justify-center">
      {employees.map((employee) => {
        return (
          <Employees
            key={employee.id}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            img={employee.img}
            changeEmployeeInfo={changeEmployeeInfo}
          />
        );
      })}
      <AddEmployee />
    </div>
  );
}

export default App;

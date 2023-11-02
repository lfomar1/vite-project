import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared";

const Customers = () => {
  const [data, setData] = useState();
  const url = baseUrl + "api/customers";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.customers);
        console.log(data.customers);
      });
  }, []);
  return (
    <>
      <h1>Costumers</h1>
      {data &&
        data.map((customer) => {
          return (
            <p>
              <Link to={"/customers/" + customer.id}>{customer.name}</Link>
            </p>
          );
        })}
    </>
  );
};
export default Customers;

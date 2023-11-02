import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../shared";

const Customer = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState();
  const navigate = useNavigate();
  const url = baseUrl + "api/customers/" + id;
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          navigate("/error404");
        }
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
      });
  }, []);
  return (
    <div>
      {customer && (
        <div>
          <p>{customer.id}</p>
          <p>{customer.name}</p>
          <p>{customer.industry}</p>
        </div>
      )}
      <Link to="/customers">Go Back</Link>
    </div>
  );
};
export default Customer;

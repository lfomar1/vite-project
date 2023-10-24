const Employees = (props) => {
  return (
    <>
      <h1>Here is a employee name {props.name}</h1>
      <p>Role: {props.role ? props.role : "No role for this person"}</p>
    </>
  );
};
export default Employees;

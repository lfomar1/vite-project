import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddEmployee(props) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [img, setImg] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="max-h-10 m-3 absolute bottom-[-60px]	 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        + Add Employee
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="w-full max-w-sm"
            id="editform"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(name, role, img);
              props.addEmployeeInfo(img, name, role);
              setName("");
              setImg("");
              setRole("");
            }}
          />
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="name"
              >
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="name"
                type="text"
                placeholder="Juan Alberto"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="role"
              >
                Role
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="role"
                type="text"
                placeholder="Developer"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="image"
              >
                Image URL
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="img"
                type="text"
                placeholder="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg"
                value={img}
                onChange={(e) => {
                  setImg(e.target.value);
                }}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            variant="secondary"
            onClick={handleClose}
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
          <button
            form="editform"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClose}
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;

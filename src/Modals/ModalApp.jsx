import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useDispatch,} from "react-redux";
import { userAdded } from "../features/posts/UserSlice";
export default function ModalApp({ open, toggle }) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let title = e.target[0].value;
    let select = value;
    let content = e.target[2].value;
    dispatch(userAdded({ title: title, select: select, content: content }));
    toggle();
  };

  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader>
        <h3>Add user</h3>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title..."
            className="form-control my-2"
          />
          <select
            onChange={(e) => setValue(e.target.value)}
            className="form-control my-2"
          >
            <option value="" hidden>
              default
            </option>
            <option value="Abdulaziz">Asilbe</option>
            <option value="Abdujabor">Javohir</option>
            <option value="Ulug'bek">Nodir</option>
          </select>
          <textarea
            cols="30"
            rows="5"
            placeholder="Content..."
            className="form-control my-1"
          ></textarea>
          <button className="btn btn-info">save</button>
        </form>
      </ModalBody>
    </Modal>
  );
}

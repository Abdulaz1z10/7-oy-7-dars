import React, { useState } from "react";
import { useSelector,  } from "react-redux";
import { getUsers } from "../features/posts/UserSlice";
import ModalApp from "../Modals/ModalApp";
import TimeAgo from "../features/posts/TimeAgo";
export default function CRUD() {
  const users = useSelector(getUsers);
  const [modalApp, setModalApp] = useState(false);
  const result = users.map((item, index) => {
    return (
      <div className="card my-3" key={index}>
        <div className="card-body ">
          <h2>{item.title}</h2>
          <TimeAgo time={item.date} />
          <h3>{item.select}</h3>
          <h6>{item.content}</h6>
        </div>
      </div>
    );
  });

  const modalOpen = () => {
    setModalApp(true);
  };

  return (
    <div className="container">
      <ModalApp open={modalApp} toggle={() => setModalApp(false)} />

      <div className="row">
        <div className="col-3 offset-2 my-2">
          <button onClick={modalOpen} className="btn btn-primary">
            add user
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-8 offset-2">{result}</div>
      </div>
    </div>
  );
}

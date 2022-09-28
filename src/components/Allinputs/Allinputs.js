import React, { useRef, useState } from "react";
import "./Allinputs.css";

const Allinputs = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const upload = useRef();
  let img;
  const handelupload = () => {
    const file = upload.current.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      img = reader.result;
    };
    reader.readAsDataURL(file);
  };
  const handelSend = () => {
    if (
      name !== "" &&
      price !== "" &&
      description !== "" &&
      handelupload !== ""
    ) {
      fetch("http://localhost:9000/prodect", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          id: Date.now(),
          name,
          image: img,
          price,
          description,
        }),
      });
      setname("");
      setprice("");
      setdescription("");
      img = "";
    }
  };
  return (
    <div className="Allinputs">
      <div className="forms">
        <h4>Name</h4>
        <input
          type="text"
          onChange={(e) => setname(e.target.value)}
          value={name}
        />
      </div>
      <div className="forms">
        <h4>Price</h4>
        <input
          type="text"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <div className="forms">
        <h4>Description</h4>
        <textarea
          className="Description"
          onChange={(e) => setdescription(e.target.value)}
          value={description}
        />
      </div>
      <div className="forms after">
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          ref={upload}
          onChange={handelupload}
        />
        <label htmlFor="file" className="upload">
          UPLOAD IMG
        </label>
      </div>
      <div className="forms">
        <button onClick={handelSend}>Send</button>
      </div>
    </div>
  );
};

export default Allinputs;

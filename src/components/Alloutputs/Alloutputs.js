/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "./Alloutputs.css";

const Alloutputs = () => {
  const [data, setdada] = useState([]);
  useEffect(() => {
    const handeldata = async () => {
      try {
        const req = await fetch("http://localhost:9000/prodect");
        const res = await req.json();
        return setdada(res);
      } catch (e) {
        console.log(e);
      }
    };
    handeldata();
  }, [data]);
  const handeldelete = (id) => {
    fetch(`http://localhost:9000/prodect/${id}`, {
      method: "DELETE",
    });
  };
  const fetching = data
    .reverse()
    .map(({ id, name, image, price, description }) => (
      <div className="item" key={id}>
        <img src={image} />
        <div className="detalies">
          <h2 className="price">{price}$</h2>
          <h4 className="name">{name}</h4>
          <p>{description}</p>
          <button className="delete" onClick={() => handeldelete(id)}>
            Delete
          </button>
        </div>
      </div>
    ));

  return <div className="Alloutputs">{fetching}</div>;
};

export default Alloutputs;

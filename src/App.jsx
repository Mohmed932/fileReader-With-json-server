import "./App.css";
import Allinputs from "./components/Allinputs/Allinputs";
import Alloutputs from "./components/Alloutputs/Alloutputs";

const App = () => {
  return (
    <div className="App">
      <div className="left">
        <Allinputs />
      </div>
      <div className="line"></div>
      <div className="right">
        <Alloutputs />
      </div>
    </div>
  );
};

export default App;

// import React, { useRef, useState } from "react";
// import "./Allinputs.css";

// const Allinputs = () => {
//   const [data, setdata] = useState([]);
//   const [name, setname] = useState("");
//   const [price, setprice] = useState("");
//   const [description, setdescription] = useState("");
//   const upload = useRef();
//   const image = useRef();
//   let img;
//   const handelupload = () => {
//     const file = upload.current.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       img = reader.result;
//     };
//     reader.readAsDataURL(file);
//   };
//   const handelSend = () => {
//     const obj = {
//       id: Date.now(),
//       name: name,
//       image: img,
//       price: price,
//       description: description,
//     };

//     console.log(obj);
//     setname("");
//     setprice("");
//     setdescription("");
//     img = "";
//   };
//   return (
//     <div className="Allinputs">
//       <div className="forms">
//         <h4>Name</h4>
//         <input
//           type="text"
//           onChange={(e) => setname(e.target.value)}
//           value={name}
//         />
//       </div>
//       <div className="forms">
//         <h4>Price</h4>
//         <input
//           type="text"
//           onChange={(e) => setprice(e.target.value)}
//           value={price}
//         />
//       </div>
//       <div className="forms">
//         <h4>Description</h4>
//         <input
//           type="text"
//           className="Description"
//           value={description}
//           onChange={(e) => setdescription(e.target.value)}
//         />
//       </div>
//       <div className="forms after">
//         <input
//           type="file"
//           id="file"
//           style={{ display: "none" }}
//           ref={upload}
//           onChange={handelupload}
//         />
//         <label htmlFor="file" className="upload">
//           UPLOAD IMG
//         </label>
//       </div>
//       <img ref={image} />
//       <div className="forms">
//         <button onClick={handelSend}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Allinputs;

// //   fetch("https://fakestoreapi.com/products", {
// //     method: "POST",
// //     body: JSON.stringify(obj),
// //   })
// //     .then((res) => res.json())
// //     .then((json) => console.log(json));
// // };

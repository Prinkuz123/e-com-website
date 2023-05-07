import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { myContext } from "../../Context/Context";
import { useParams } from "react-router-dom";
import { Productdetail2 } from "./Productdetails2";
import { FaRupeeSign } from "react-icons/fa";
import "./Style.css";

const View = () => {
  const [state, setState] = useState();

  const valuecontext = useContext(myContext);
  const { statecart, setstatecart,Productdetail,setproductdetail } = valuecontext;
  

// console.log(data)
  const { id } = useParams();

  const Cartitem = Productdetail.filter((item) => {
    return item.id === parseInt(id);
  });
  console.log(Productdetail);
  // const decqty = (id) => {
  //   Productdetail.map((item) =>
  //     item.id == id ? setState({ ...item, qty: item.qty - 1 }) : item
  //   );
  //   console.log(state);
  // };
  // // setState(x)
  // const incqty = (id) => {
  //   Productdetail.map((item) =>
  //     item.id == id ? setState({ ...item, qty: item.qty + 1 }) : item
  //   );

  //   console.log(state);
  // };
  const clickhandler = () => {
    const [data] = Cartitem;
    setstatecart([...statecart, data]);
    alert("Your item is added to cart");

    console.log(statecart);
  };

  return (
    <div className="d-inline-flex">
      {Cartitem.map((item) => (
        <div className="viewcart" key={item.id}>
          <Image className="viewimage" src={item.path} rounded />

          <div className="seconddiv">
            <p style={{ fontSize: "25px", fontFamily: "fantasy" }}>
              {item.name}
            </p>
            <p style={{ fontSize: "25px", fontFamily: "cursive" }}>
              <FaRupeeSign size={24} />
              {item.prize}
            </p>
            <p>
              qty{" "}
              <Button className="btn" onClick={() => incqty(item.id)}>
                +
              </Button>
              {item.qty}
              {console.log(item)}
              <Button onClick={() => decqty(item.id)}>-</Button>
            </p>
            <Button onClick={clickhandler} variant="primary">
              Add cart
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default View;

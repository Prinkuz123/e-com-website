import React, { useContext, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { myContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const Addproducts = () => {
  const navigate = useNavigate();
  const addcontext = useContext(myContext);
  const { productdetails, setproductdetails, adddata, setadddata } = addcontext;
  const inputref = useRef(null);

  const add = () => {
    const name = inputref.current.name.value;
    const model = inputref.current.model.value;
    const prize = inputref.current.prize.value;
    const qty = parseInt(inputref.current.qty.value);
    const id = Math.floor(Math.random() * 100);
    setadddata([...adddata, { name, model, prize, qty, id }]);
    navigate("/Admin/Adminproducts");
  };

  return (
    <div className="addprdct" style={{ padding: "10px" }}>
      <form ref={inputref} onSubmit={(e) => e.preventDefault}>
        <b>
          <label>Productname</label>
        </b>
        <input type="text" name="name" />
        <br />
        <br />
        <b>
          <label>Model</label>
        </b>
        <input type="text" name="model" />
        <br />
        <br />
        <b>
          <label>Price</label>
        </b>
        <input type="text" name="prize" />
        <br />
        <br />
        <b>
          <label>Quantity</label>
        </b>
        <input type="text" name="qty" />
        <br />

        <br />
        <Button onClick={add}>Add</Button>
      </form>
    </div>
  );
};

export default Addproducts;

import React, { useRef } from "react";
import { useContext } from "react";
import { myContext } from "../../Context/Context";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Adminedit = () => {
  const inputref = useRef(null);
  const navigate = useNavigate()
  const contextdata = useContext(myContext);
  const { Productdetail, setproductdetail, editdata } = contextdata;
  console.log(editdata)

  const edit = () => {
    const name = inputref.current.name.value;
    const model = inputref.current.model.value;
    const prize = inputref.current.prize.value;
    const path = inputref.current.path.value;
    const qty = parseInt(inputref.current.qty.value);
    const id=Math.floor(Math.random()*100)
    setproductdetail([...Productdetail, { name, model, prize, path, qty ,id}]);
    navigate("/Admin/Adminproducts")
    console.log(Productdetail);
  };
  console.log(editdata);


  return (
    <div className="addprdct">
   {editdata.map((item) => {
    return(
        <form key={item.id} ref={inputref} onSubmit={(e) => e.preventDefault}>
            <label>Productname</label>
          <input type="text" defaultValue={item.name} name="name" />
          <br />
          <br />
          <b>
            <label   >Model</label>
          </b>
          <input type="text" defaultValue={item.model} name="model" />
          <br />
          <br />
          <b>
            <label>Prize</label>
          </b>
          <input type="text" defaultValue={item.prize} name="prize" />
          <br />
          <b>
            <label>Quantity</label>
          </b>
          <input type="text" defaultValue={item.qty} name="qty" />
          <br />
          <br />
          <b>
            <label>Image</label>
          </b>
          <input type="text" defaultValue={item.path} name="path" />
          <br />
          <br />
          <Button type="submit"  onClick={edit}>
            Submit
          </Button>
          <Button type="submit" >
            Cancel
          </Button>
        </form>
  )} )}
    </div>
  );
};

export default Adminedit;

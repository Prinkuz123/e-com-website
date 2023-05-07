import React, { useContext } from "react";
import { myContext } from "../../Context/Context";
import { FaRupeeSign } from "react-icons/fa";
import { Button } from "react-bootstrap";

const Basket = () => {
  const data2= useContext(myContext);
  // const { cartdata,setcartdata } = data2;
 const {statecart,setstatecart}=data2
 
  console.log("fi",statecart);
  const Remove = (dlt) =>{
    const removeid=parseInt(dlt.target.id)
    const update=statecart.filter((item)=>item.id!==removeid)
    setstatecart(update)
    console.log(update);

  }
  return (
    <div>
      {statecart.map((item) => {
        return (
          <div>
            <h4>{item.name} -<FaRupeeSign size={10} />{item.prize}</h4>
            <Button  onClick={Remove} id={item.id}>Removefrom cart</Button>
           
          </div>
        );
      })}
    </div>
  );
};

export default Basket;

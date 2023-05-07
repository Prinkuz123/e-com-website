import React from "react";
import { useNavigate } from "react-router-dom";
import './Style.css'
import { Button, Table } from "react-bootstrap";
import { useContext } from "react";
import { myContext } from "../../Context/Context";

const Adminproducts = () => {
  const productdata=useContext(myContext)

  const{Productdetail,setproductdetail,seteditdata,editdata,adddata,setadddata}=productdata
  const navigate = useNavigate();

 const Delete=(dlt)=>{ 
    const remove=parseInt(dlt.target.id)
    console.log(remove);
    const update=Productdetail.filter((item)=> item.id!==remove)
    setproductdetail(update)
    const updated=adddata.filter((item)=> item.id!==remove)
    setadddata(updated)
  
    console.log(update);
 }

 const editproducts=(item)=>{
  const btnid=parseInt(item.target.id)
  const editdata2= Productdetail.filter((item2)=>parseInt(item2.id)  ===btnid)
  seteditdata(editdata2); 
  const editdata3= Productdetail.filter((item3)=>parseInt(item3.id) !==btnid)
  setproductdetail(editdata3)
  navigate('/Admin/Adminedit')
  console.warn(editdata);
 }
//  console.warn(editdata);

  return (
    <div className="admnprdct">
    <Button
style={{ backgroundColor: "blue" }}
onClick={()=>navigate("/Admin/Addproducts")} >
Addproduct
</Button>
       <form>
         <b>
          
           <label style={{ fontSize: "20px" }}>Product</label>
         </b>
         <br />
         <input type="text" style={{ width: "800px" }} />
       
         <Table>
           <thead>
       <tr>
             <th>Image</th>
             <th>Name</th>
             <th>Model</th>
             <th>Quantity</th>
             <th>Price</th>
           </tr>
             </thead>
             <tbody >
             {Productdetail.map((item) => {
             return (
                 <tr key={item.id}>
                   <td ><img src={item.path} alt={item.name} style={{height:'100px', width:'100px'}}/></td>
                  <td>{item.name}</td>
                  <td>{item.model}</td>
                  <td>{item.qty}</td>
                  <td>{item.prize}</td>
                  <Button onClick={editproducts} id={item.id}  >Edit</Button>
                  <Button type="button" onClick={Delete} id={item.id} variant="danger">Delete</Button>
                  
                </tr>
              );
            
            })}
            </tbody>


            <tbody >

               {adddata.map((item)=>{
                  return (
                    <tr key={item.id}>
                      <td ><img src={item.path} alt={item.name} style={{height:'100px', width:'100px'}}/></td>
                      <td>{item.name}</td>
                      <td>{item.model}</td>
                      <td>{item.qty}</td>
                      <td>{item.prize}</td>
                      <Button onClick={editproducts} id={item.id}  >Edit</Button>
                      <Button type="button" onClick={Delete} id={item.id} variant="danger">Delete</Button>
                    </tr>
                  )
                })
              }
           
          </tbody>
        </Table>
        <br/>
        </form>
       
    </div>
  );
};

export default Adminproducts;

import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Fooddata from "./Fooddata";
import Set from "./Set";
import './style.css';
const Search = () =>{
const [fdata, setFdata] = useState(Fooddata);
//console.log(fdata)
const [copydata,setCopydata] = useState([]);
//console.log(copydata)
const chanegData = (e)=>{
let getchangedata = e.toLowerCase();
if(getchangedata == ""){
setCopydata(fdata);
}else{
let storedata = copydata.filter((ele,k)=>{
 return ele.name.toLowerCase().match(getchangedata);
})
 setCopydata(storedata)
}
}
const zomatologo = "https://www.citypng.com/public/uploads/preview/zomato-black-logo-hd-png-11662674148bvgltyctin.png"
useEffect(()=>{
setTimeout(()=>{
setCopydata(Fooddata);
},3000);

},[])
return(
<>
<div className="Container d-flex justify-content-between align-items-center">
<img src={zomatologo} style={{width:"8rem",position:"relative",left:"2%",cursor:"pointer"}} alt=""/>
<h2 style={{color:"#1b1464",cursor:"pointer"}} className="mt-3">Search Filter App</h2>
</div>

<form className="d-flex justify-content-center align-items-center mt-3">
  <div className=" mx-2 col-lg-4">
    <input type="text"onChange={(e)=>chanegData(e.target.value)} class="form-control" placeholder="Search Restaurant" />
  </div>
<button className="btn text-light col-1g-1" style={{background:"#ed4c67"}}>Submit</button>
</form>

<section className="iteam_section mt-4 container">
<h2 className="px-5" style={{fontWeight:"400"}}>Best Food in Delhi NCR</h2>
<div className="row mt-2 d-flex justify-content-around align-items-center">
 {copydata && copydata.length ? <Cards data={copydata}/>:<Set sdata={fdata}/>}
</div>
</section>
</>
)
}

export default Search
import React from "react";

const Cards = ({data}) =>{
return(
<>
{
data.map((element,k)=>{
return(
<>
<div className="card hove mt-4"style={{width: "22rem",border:"none"}}>
  <img src={element.img} className="cd" alt="..."/>
  <div className="card_body">
<div className="upper_data d-flex justify-content-between align-items-center">
<h4 className="mt-2">{element.name}</h4>
<span>130&nbsp;★</span>
</div>
<div className="lower_data d-flex justify-content-between">
<h5>{element.CategoryName}</h5>
<span>220</span>
</div>
<div className="extra"></div>
<div className="last_data d-flex justify-content-between align-items-center">
<img src="https://png.pngtree.com/png-clipart/20210827/ourmid/pngtree-3d-red-up-arrow-png-image_3827584.jpg"className="limg" alt=""/>
<p>{element.description}</p>
<img src="https://b.zmtcdn.com/data/o2_assets/e50eb01feab6bd50e50430f34b4645ac1613542991.png" className="laimg" alt=""/>
</div>
</div>
</div>
</>
)
})
}
</>
)
}
export default Cards
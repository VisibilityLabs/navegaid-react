import React,{useState} from 'react'


export const AccountsTabs = () => {
    const [active, setActive] = useState("Birth AI");
    const [toggle,setToggle]=useState(false)
    return (
      <div className="d-flex flex-column">
        <h3>Your Apps</h3>
        <div className="d-flex ">
          {["Birth AI", "Riley", "WhatsGPT"].map((item) => {
            return (
              <>
                {active === item ? (
                  <div className="border-bottom border-2 mx-3 border-info p-1">
                    {item}
                  </div>
                  
                ) : (
                  <div className="mx-3 p-1" onClick={() => setActive(item)}>
                    {item}
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div>
          <div className="small my-3 mx-3">Would you like to enable {active}?</div>
           <div  className="d-flex my-5 mx-3 rounded"
           style={{width:"80px",backgroundColor:`${toggle?"#28c577":"#dbdbdb"}`,height:"30px",border:"1px solid black",justifyContent:`${toggle?"start":"end"}`}} onClick={()=>setToggle(!toggle)}>
              <div style={{width:"40%",height:"100%",backgroundColor:"white"}}></div>
           </div>
        </div>
        
      </div>
    );

}


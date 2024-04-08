import React,{useState} from 'react'


export const AccountsTabs = () => {
    const [active, setActive] = useState(1);
    const [toggle, setToggle] = useState(false);
    const modes=[
      {
        id:1,
        name:"Birthd AI",
        description:"BirthdAI",
        enabled:true,
        stage:'toggle',
        qr:false
      },
      {
        id:2,
        name:"Riley",
        description:"Riley",
        enabled:false,
        stage:'toggle',
        qr:true
      },
      {
        id:3,
        name:"WhatsGPT",
        description:"WhatsGPT",
        enabled:false,
        stage:'verify',
        qr:true
      },
    ]
    const [modesData, setModesData] = useState(modes)
    const toggleItem=(id)=>{
      let newModesData=modesData.map((item)=>{
        if(item.id===id){
          item.enabled=!item.enabled
        }
        return item
      })
      setModesData(newModesData)
    }
    return (
      <div className="accounts-content-container d-flex flex-column">
        <h3>Your Apps</h3>
        <div className="d-flex ">
          {modesData.map((item) => {
            return (
              <>
                {active === item.id ? (
                  <div className="cursor-pointer border-bottom border-2 mx-3 border-info p-1"
                  style={{cursor:'pointer'}}
                  >
                    {item.name}
                  </div>
                  
                ) : (
                  <div className="cursor-pointer  mx-3 p-1" onClick={() => setActive(item.id)}
                  style={{cursor:'pointer'}}
                  >
                    {item.name}
                  </div>
                )}
              </>
            );
          })}
        </div>
        {modesData.map((item) => {
          if(item.id!==active) return null
          else
          return (
        <div  >
          {item.stage==='toggle'&&
          <>
          <div className="small my-3 mx-3">Would you like to enable {item.name}?</div>
           <div className={item.enabled?"enabled-toggle enabled":"enabled-toggle"} onClick={()=>toggleItem(item.id)} >
            <div className="toggle-indicator" >
              
            </div>
           </div>
          </>
          }
          {
            item.stage==='verify'&&
            <div className="form-group verify-otp-container">
          <div className="small my-3 mx-3">Verify your Phone Number</div>
              
            <input
              type="text"
              className="form-control m-2"
              placeholder="Your Phone Number"
            />
            </div>
          }
          {
            item.qr&&
            <div className="d-flex flex-column align-items-center">
            <div className="small my-3 mx-3">Scan the QR code to get started with {item.name}</div>
            <img src="/assets/img/navegaid-qr.png" alt="qr code" />
            </div>
          }
        </div>
          )
        })}        
      </div>
    );

}


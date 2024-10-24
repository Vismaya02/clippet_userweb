import {clippetword, ClippetFooterLogo, closeicon} from "../image"
import style from "./style.module.css"

const Login =({handleClose})=>{
    return(
        <>
    <div className={style.modalwrapper}>
      <div className={style.modal}>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div >
          <div style={{display:"flex",justifyContent:"flex-end", cursor:"pointer",alignItems:"center"}} onClick={handleClose}>
            <img src={closeicon} width={20} height={20}/>
          </div>
          <div>
              <div>
                <div>
                  <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                    <div style={{marginBottom:"10px"}}>
                    <div style={{display:"flex",justifyContent:"space-between",gap:"15px"}}>
                      <img src={ClippetFooterLogo} width={70} height={70}/>
                      <img src={clippetword} width={100} height={70}/>
                    </div>
                    </div>
                    <div>
                      <p style={{textAlign:"center",padding:"0", margin:"0"}}>Let's create uh-MAY-zing designs</p>
                      <p style={{textAlign:"center",padding:"0", margin:"0",marginTop:"5px"}}>Log in or Sign up</p>
                    </div>
                  </div>
                </div >
                <div>
                <div>
                      <div style={{display:"inline-flex",flexDirection:"column",marginTop:"10px",marginBottom:"5px",width:"100%"}}>
                        <div style={{display:"flex",border:"2px solid",borderRadius:"10px",width:"365px", alignItems:"center",paddingLeft:"10px"}}>
                          <p style={{marginTop:"2px",marginRight:"10px",marginBottom:"0px"}}>+91</p>
                          <input style={{border:"none",padding:"15px 15px 15px 0px",height: "1.4375em", width:"100%"}}></input>
                        </div>
                      </div>
                      <div style={{width:"100%"}}>
                        <button>Continue</button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default Login
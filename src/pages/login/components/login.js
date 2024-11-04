import {clippetword, ClippetFooterLogo, closeicon} from "../../../image"
import style from "../styles/style.module.css"

const Login =({handleClose})=>{
    return(
        <>
    <div className={style.modalwrapper}>
      <div className={style.modal}>
        <div style={{width:"100%",height:"20px"}}>
          <div></div>
          <div></div>
        </div>
        <div style={{ padding: "0px 20px 20px 20px"}}>
          <div>
          <div className={style.close} onClick={handleClose}>
            <img src={closeicon} width={20} height={20}/>
          </div>
          <div className={style.modalcontainer}>
              <div className={style.container}>
                <div>
                  <div className={style.topcontainer}>
                    <div style={{marginBottom:"10px"}}>
                    <div className={style.logo}>
                      <img src={ClippetFooterLogo} width={70} height={70}/>
                      <img src={clippetword} width={100} height={70}/>
                    </div>
                    </div>
                    <div>
                      <p className={style.text1} >Let's create uh-MAY-zing designs</p>
                      <p className={style.text2} >Log in or Sign up</p>
                    </div>
                  </div>
                </div >
                <div>
                <div>
                      <div className={style.number}>
                        <div className={style.numbercontainer} >
                          <p className={style.countrycode}>+91</p>
                          <input className={style.numberinput} ></input>
                        </div>
                      </div>
                      <div>
                        <button className={style.continuebutton}>Continue
                          <span className={style.continue}>
                            </span>
                        </button>
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
import {Image} from "@fluentui/react-components";
import {
    leftSideLine,
    rightSideLine,
    howWorksFour,
    howWorksTwo,
    howWorksThree,
    howWorksone,
    } from "../image"


const steps = [
    {
      number: 1,
      title: "Order your design",
      description: "Choose your service and complete the payment seamlessly.",
      image: howWorksone,
    },
    {
      number: 2,
      title: "Share your brief",
      description: "Share your project details through a simple form.",
  
      image: howWorksTwo,
    },
    {
      number: 3,
      title: "Meet your designer",
      description: "We match you with a talented designer tailored to your needs",
      image: howWorksThree,
    },
    {
      number: 4,
      title: "Receive your output",
      description:
        "Get your finished design files delivered promptly and securely.",
      image: howWorksFour,
    },
  ];


const Howclippetworks = () => {
    return(
        <>
            <div style={{padding:"0px 20px"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Image style={{width:"250px",heighgt:"auto"}} src={rightSideLine}/>
                    <div style={{padding:"5px 10px",margin:"0 10px",display:"flex"}}>
                        <span style={{fontSize:"32px",fontWeight:"600"}}>How Clippet Works</span>
                    </div>
                    <Image style={{width:"250px",heighgt:"auto"}} src={leftSideLine}/>
                </div>
                <p style={{textAlign:"center",margin:"0px"}}>Our design process streamlined to perfection</p>
                <div style={{marginTop:"20px",display:"flex"}}>
                    {steps.map((step)=>(
                        <div style={{paddingTop:"30px",paddingLeft:"30px"}}>
                        <div style={{display:"flex",flexDirection:"column",padding:"20px"}}>
                            <div style={{backgroundColor:"#6F42E5",borderRadius:"50%",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center", width:"40px", height:"40px"}}>{step.number}</div>
                            <div >
                                <img style={{width:"200px",height:"200px"}} src={step.image}/>
                            </div>
                            <div>
                                <h6 style={{margin:"0px",textAlign:"center"}}>
                                    {step.title}
                                </h6>
                                <p style={{margin:"0px",textAlign:"center"}}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </>
    )
}
export default Howclippetworks;
import {Image} from "@fluentui/react-components";
import {
    benifitsFive,
    benifitsFour,
    benifitsOne,
    benifitsSix,
    benifitsThree,
    benifitsTwo,
    leftSideLine,
    rightSideLine,
  } from "../image";

const benefits = [
    {
      icon: benifitsOne,
      title: "Customised",
      subtitle: "Designs",
    },
    {
      icon: benifitsTwo,
      title: "Assured",
      // subtitle: "On Time Delivery*",
      subtitle: "On Time Delivery",
    },
    {
      icon: benifitsSix,
      title: "16 Point",
      // subtitle: "Quality Check*",
      subtitle: "Quality Check",
    },
    {
      icon: benifitsThree,
      title: "Satisfaction",
      subtitle: "Guaranteed",
    },
    {
      icon: benifitsFour,
      title: "Transparent",
      // subtitle: "Pricing*",
      subtitle: "Pricing",
    },
    {
      icon: benifitsFive,
      title: "Expert",
      subtitle: "Designers",
    }
]
    
    
    
const BenefitSection = () => {
    return(
        <>
        <div style={{padding:"30px 10px"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Image src={rightSideLine} style={{width:"250px",height:"auto"}}></Image>
                <div style={{padding:"5px 10px",margin:"0 10px",display:"flex"}}>
                  <h3 style={{fontSize:"32px",fontWeight:"600",margin:"0px"}}>Assured by Clippet</h3>
                </div>
                <Image src={leftSideLine} style={{width:"250px",height:"auto"}}></Image>
            </div>
            <p style={{textAlign:"center",margin:"0px"}}>Your design needs, our assured commitment</p>
            <div style={{display:"flex",paddingTop:"30px",justifyContent:"center",gap:"15px"}}>
              {benefits.map((benefits)=>(
                <div style={{backgroundColor:"#6C3AD1",borderRadius:"10px", width:"178px", textAlign:"center",padding:"10px 0px"}}>
                <Image src={benefits.icon} style={{width:"120px",height:"120px"}}/>
                <h3 style={{color:"white"}}>
                  {benefits.title}
                </h3>
                <p style={{color:"white"}}>
                  {benefits.subtitle}
                </p>
              </div>))}
            </div>
        </div>

        </>
    )
}
export default BenefitSection;
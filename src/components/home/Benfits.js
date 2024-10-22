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
import { makeStyles } from "@mui/styles";

const benefits = [
    {
      icon: benifitsOne,
      title: "Customised",
      subtitle: "Designs",
    },
    {
      icon: benifitsTwo,
      title: "Assured",
      subtitle: "On Time Delivery",
    },
    {
      icon: benifitsSix,
      title: "16 Point",
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
      subtitle: "Pricing",
    },
    {
      icon: benifitsFive,
      title: "Expert",
      subtitle: "Designers",
    }
]
    
const useStyles = makeStyles((theme)=>({
  root: {
    padding:"30px 10px"
  },
  heading: {
    fontSize:"32px",
    fontWeight:"600",
    margin:"0px"
  },
  headercontainer: {
    padding:"5px 10px",
    margin:"0 10px",
    display:"flex"    
  },
  benefitCardContainer: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  benefitContainer: {
    display:"flex",
    paddingTop:"30px",
    justifyContent:"center",
    gap:"15px"
  },
  benefitCard: {
    backgroundColor:"#6C3AD1",
    borderRadius:"10px",
    width:"178px",
    textAlign:"center",
    padding:"10px 0px"
  },
  icon: {
    width:"120px",
    height:"120px"
  },
  title: {
    color:"white"
  },
  subtitle: {
    color:"white"
  },
  sideImage: {
    width:"250px",
    height:"auto"
  },
  bannerContainer:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
}));

    
const BenefitSection = () => {
  const classes = useStyles();
    return(
        <>
        <div className={classes.root}>
            <div className={classes.bannerContainer}>
                <Image src={rightSideLine} className={classes.sideImage}></Image>
                <div className={classes.headercontainer}>
                  <h3 className={classes.heading}>Assured by Clippet</h3>
                </div>
                <Image src={leftSideLine} className={classes.sideImage}></Image>
            </div>
            <p style={{textAlign:"center",margin:"0px"}}>Your design needs, our assured commitment</p>
            <div className={classes.benefitContainer}>
              {benefits.map((benefits)=>(
                <div className={classes.benefitCard}>
                <Image src={benefits.icon} className={classes.icon}/>
                <h3 className={classes.title}>
                  {benefits.title}
                </h3>
                <p className={classes.subtitle}>
                  {benefits.subtitle}
                </p>
              </div>))}
            </div>
        </div>

        </>
    )
}
export default BenefitSection;
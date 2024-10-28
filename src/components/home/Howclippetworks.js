import {Image} from "@fluentui/react-components";
import {
    leftSideLine,
    rightSideLine,
    howWorksFour,
    howWorksTwo,
    howWorksThree,
    howWorksone,
    } from "../image"
import { makeStyles } from "@mui/styles";


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

  const useStyles = makeStyles(()=>({
    container:{
        padding:"0px 20px"
    },
    header:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    rightSideLine:{
        width:"250px",
        heighgt:"auto"
    },
    textcontainer:{
        padding:"5px 10px",
        margin:"0 10px",
        display:"flex",
    },
    text:{
        fontSize:"32px",
        fontWeight:"600",
    },
    leftSideLine:{
        width:"250px",
        heighgt:"auto"
    },
    text2:{
        textAlign:"center",
        margin:"0px"
    },
    steps:{
        marginTop:"20px",
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(300px, 1fr))",
    },
    stepwrapper:{
        paddingTop:"30px",
        paddingLeft:"30px",
        boxSizing:"border-box"
    },
    stepcontainer:{
        display:"flex",
        flexDirection:"column",
        padding:"20px"
    },
    stepnumber:{
        backgroundColor:"#6F42E5",
        borderRadius:"50%",
        color:"#fff",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"40px",
        height:"40px"
    },
    stepimage:{
        width:"200px",
        height:"200px"
    },
    steptitle:{
        margin:"0px",
        fontWeight: 600,
        fontSize:"16px",
        textAlign:"center",
        color: "#6F42E5"
    },
    stepdescription:{
        margin:"0px",
        textAlign:"center"
    },
  }));


const Howclippetworks = () => {
    const classes = useStyles()
    return(
        <>
            <div className={classes.container}>
                <div className={classes.header}>
                    <Image className={classes.rightSideLine} src={rightSideLine}/>
                    <div className={classes.textcontainer}>
                        <span className={classes.text}>How Clippet Works</span>
                    </div>
                    <Image className={classes.leftSideLine} src={leftSideLine}/>
                </div>
                <p className={classes.text2}>Our design process streamlined to perfection</p>
                <div className={classes.steps}>
                    {steps.map((step)=>(
                        <div className={classes.stepwrapper}>
                        <div className={classes.stepcontainer}>
                            <div className={classes.stepnumber}>{step.number}</div>
                            <div >
                                <img className={classes.stepimage}  src={step.image}/>
                            </div>
                            <div>
                                <h6 className={classes.steptitle}>
                                    {step.title}
                                </h6>
                                <p className={classes.stepdescription}>
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
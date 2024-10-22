import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=>({
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
  con:{
    display:"flex",
    justifyContent:"space-around",
    backgroundColor:"#F0ECFC",
    borderRadius:"10px",
    alignItems:"center",
    width:"74%",
    height:"200px",
    padding:"20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  statItem: {
    marginBottom:"20px"
  },
  heading: {
    margin:"0",
    padding:"0",
    fontSize: "36px",
    fontWeight: 700,
  },
  text: {
    marginTop:"5px",
    margin:"0",
    fontWeight: 500,
  },
  star: {
    
  },
}));

const statisticsData = [
    {
      value: "1000+",
      description: "5 Stars Rated",
    },
    {
      value: "5000+",
      description: "Designs Delivered",
    },
    {
      value: "100+",
      description: "Design Services",
    },
    {
      value: "120+",
      description: "Designers",
    },
  ];

  const Staticbanner = () =>{
    const classes = useStyles();
    return(
        <>
        <div className={classes.container}>
            <div className={classes.con}>
            {statisticsData.map((item,index)=>(
                <div className={classes.statItem}>
                    <h2 className={classes.heading}>{item.value}
                    </h2>
                    <p className={classes.text}>{item.description}
                    </p>
                </div>
                ))}
            </div>
        </div>
        </>
    )
  }

  export default Staticbanner;
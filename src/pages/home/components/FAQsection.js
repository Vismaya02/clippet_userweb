import { Image } from "@fluentui/react-components";
import { useState } from "react";
import {
  leftSideLine,
  rightSideLine,
} from "../../../image";
import { makeStyles } from "@mui/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const faqData = [
  {
    question: "What services does Clippet offer?",
    answer: `Clippet provides a wide array of design services, including Logo & Branding, Social Media posts, Print designs, UI/UX projects, presentations, and resumes.`,
  },
  {
    question: "How is Clippet different from freelancers or agencies?",
    answer: `Clippet merges the best of both worlds: agency-level quality at freelancer prices.`,
  },
  {
    question: "How do revisions work at Clippet?",
    answer: `We offer standard revisions for each project, allowing you to fine-tune your design.`,
  },
  {
    question: "What does Clippet’s 16-Point Quality Check involve?",
    answer: `Our 16-point QC process ensures flawless designs...`,
  },
  {
    question: "Can I request an express delivery?",
    answer: `Absolutely! Our express delivery starts at just 90 minutes for selected designs...`,
  },
  {
    question: "What do you have for recurring or full-service design solutions?",
    answer: `Yes, we provide retainer and subscription models for businesses needing large-scale ongoing design services.`,
  },
];

const useStyles = makeStyles(() => ({
  root: {
    padding: "0px 30px",
  },
  headercontainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 20px 0px 20px",
  },
  rightSideLine: {
    width: "250px",
    height: "auto",
  },
  leftSideLine: {
    width: "250px",
    height: "auto",
  },
  textcontainer: {
    padding: "5px 10px",
    margin: "0 10px",
    display: "flex",
  },
  text: {
    fontSize: "32px",
    fontWeight: "600",
  },
  faqsection: {
    display: "flex",
    padding: "0px 10px",
    '&:hover':{
      cursor:"pointer"
    }
  }
}));

const Faqsection = () => {
  const classes = useStyles();
  const [openIndex, setOpenIndex] = useState(null);
  const [clickcount,setClickcount] = useState(0)

  const handleExpand = (index) => {
    if (clickcount === 0){
    setClickcount(clickcount+1)
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    }
    else{
    setClickcount(0)
    setOpenIndex(null);
    }
  };
  
  // const handleExpandMore = () =>{
  //   setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  // }
  
  // const handleExpandLess = () => {
  //   setOpenIndex(null);
  // };

  return (
    <div className={classes.root}>
      <div className={classes.headercontainer}>
        <Image src={rightSideLine} className={classes.rightSideLine} />
        <div className={classes.textcontainer}>
          <span className={classes.text}>You asked, we answered</span>
        </div>
        <Image src={leftSideLine} className={classes.leftSideLine} />
      </div>
      <br />
      {faqData.map((faqdata, index) => (
        <div
          key={index}
          style={{ marginBottom: "20px", borderBottom: "1px solid #E8E8E8" }}
        >
          <div className={classes.faqsection} onClick={() => handleExpand(index)}>
            <div
              style={{
                display: "flex",
                flexGrow: "1",
                margin: "10px 0px",
                fontSize: "20px",
                fontWeight: "400",
              }}
            >
              {faqdata.question}
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {openIndex === index ?<ExpandLessIcon />:<ExpandMoreIcon/>}
            </div>
          </div>
          {openIndex === index && (
            <div>
              <div style={{ padding: "5px 15px 15px 15px" }}>
                <p style={{ margin: "0px", padding: "0px" }}>
                  {faqdata.answer}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqsection;

import React, { useState } from "react";
import { Clippetlogo, CartIcon, Profileicon } from "../../../image";
import styles from "../styles/header.module.css";
import Login from "../../../pages/login/components/login";
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from "@mui/icons-material/Search";
import {InputBase} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const categories = [
  { name: "Branding", nameApi: "Branding", subcategories: ["Business Cards", "Letter Heads", "Envelope Design", "Certificate Design"] },
  { name: "Print Media", nameApi: "Print Media", subcategories: ["Business Cards", "Letter Heads", "Envelope Design", "Certificate Design"] },
  { name: "Print Design", nameApi: "Print Design", subcategories: ["Flyers", "Brochures", "Posters", "Banners"] },
  { name: "UI/UX", nameApi: "UI Designs", subcategories: ["Website Design", "App Design", "UI/UX Design", "Landing Pages"] },
  { name: "Social Media", nameApi: "Digital Designs", subcategories: ["Social Media Posts", "Cover Photos", "Profile Pictures", "Ads Design"] },
  { name: "Presentation", nameApi: "Presentations", subcategories: ["PowerPoint", "Google Slides", "Keynote", "Prezi"] },
  { name: "Resume", nameApi: "CV & Resumes", subcategories: ["Professional", "Creative", "Student", "Executive"] },
  { name: "Invitation", nameApi: "Invitation Designs", subcategories: ["Greeting Cards", "Event Invitations"] },
  { name: "Videos", nameApi: "Videos", subcategories: ["Greeting Cards", "Event Invitations"] },
];

const Header = () => {
  const [mode, setMode] = useState(false);
  const [sidebar,setSidebar] = useState(false);

  const handleOpen = () => {
    setMode(true);
    document.body.style.overflow ="hidden"
  };

  const handleClose = () => {
    setMode(false);
    document.body.style.overflow ="scroll"
  };
  
  const handlesidebaropen =() =>{
    setSidebar(true);
  }

  const handlesidebarclose =() =>{
    setSidebar(false);
  }

  const windowscreen = useMediaQuery('(min-width:1000px)');
  const mobilescreen = useMediaQuery('(min-width:400px)');

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


  return (
    <>
      <div className={styles.headerwrapper}>
        <header className={styles.header}>
          {!windowscreen&&
          <div>
            <MenuIcon style={{color:"white", height:"30px", width:"30px"}} onClick={handlesidebaropen}/>
          </div>}
          <div className={styles.logo}>
            <img
              src={Clippetlogo}
              alt="Clippet_Design_Services.png"
              width={142}
              height={59.94}
            />
          </div>
          {windowscreen&&<nav className={styles.categoryNav}>
            {categories.map((data, index) => (
              <div key={index} className={styles.dropdown}>
                <button className={styles.categoryButton}>{data.name}</button>
                <div className={styles.dropdownContent}>
                  {data.subcategories.map((subcategory, subIndex) => (
                    <a href="#" key={subIndex} className={styles.subcategoryLink}>
                      {subcategory}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>} 
         {!windowscreen &&  
          <>
          <div className={styles.searchBar}>
          <div style={{
                    width: "42px",
                    height: "39px",
                    borderRadius: "4px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "6px",
                    cursor: "pointer",
                  }}>
                <SearchIcon
                    className={styles.searchIcon}
                  />
                </div>
          <InputBase placeholder="Search for any services" className={styles.input} style={{
                paddingLeft: "16px",
                width: "300px",
                maxHeight: "30px",
                fontFamily: "globalFont",
                color:"white",
              }}/>
              
                </div>
                </>}
          <div className={styles.cartArea}>
            <div>
              <img
                src={CartIcon}
                alt="Clippet_Design_Services.png"
                width={32}
                height={32}
                onClick={handleOpen}
              />
            </div>
            <div>
              <img
                src={Profileicon}
                alt="Clippet_Design_Services.png"
                width={32}
                height={32}
                onClick={handleOpen}
              />
            </div>
          </div>
        </header>
      </div>
      {mode && (
        <div className={styles.modalOverlay}>
          <Login handleClose={handleClose}/>
        </div>
      )}
      {sidebar&&
      <>
      <div className={styles.sidebaroverlay}>
        <div className={styles.sidebarcontainer}>
          <div className={styles.container}>
          {categories.map((data, index) => (
              <div key={index}>
                <div className={styles.sidebarmenu} onClick={() => handleExpand(index)}>
            <div
              style={{
                display: "flex",
                flexGrow: "1",
                margin: "10px 0px",
                fontSize: "15px",
              }}
            >
              {data.name}
            </div>
            <div style={{ display: "flex", alignItems: "center",flexShrink:"0" }}>
              {openIndex === index ?<ExpandLessIcon />:<ExpandMoreIcon/>}
            </div>
          </div>
          {openIndex === index&&
            <div className={styles.sidebardropdown} >
                  {data.subcategories.map((subcategory, subIndex) => (
                    <div key={subIndex} className={styles.sidebarsubcategory}>
                      {subcategory}
                    </div>
                  ))}
                </div>
             }
          </div>
          ))}
            </div>
            </div>
            <div style={{width:"100%",height:"100%"}} onClick={handlesidebarclose}></div>
        </div>
        </>
        }
    </>
  );
};

export default Header;

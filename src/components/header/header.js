import React, { useState } from "react";
import { Clippetlogo, CartIcon, Profileicon,clippetword, ClippetFooterLogo, closeicon} from "../image";
import styles from "./header.module.css";

const categories = [
  {
    name: "Branding",
    nameApi: "Branding",
    subcategories: [
      "Business Cards",
      "Letter Heads",
      "Envelope Design",
      "Certificate Design",
    ],
  },
  {
    name: "Print Media",
    nameApi: "Print Media",
    subcategories: [
      "Business Cards",
      "Letter Heads",
      "Envelope Design",
      "Certificate Design",
    ],
  },
  {
    name: "Print Design",
    nameApi: "Print Design",
    subcategories: ["Flyers", "Brochures", "Posters", "Banners"],
  },
  {
    name: "UI/UX",
    nameApi: "UI Designs",
    subcategories: [
      "Website Design",
      "App Design",
      "UI/UX Design",
      "Landing Pages",
    ],
  },
  {
    name: "Social Media",
    nameApi: "Digital Designs",
    subcategories: [
      "Social Media Posts",
      "Cover Photos",
      "Profile Pictures",
      "Ads Design",
    ],
  },
  {
    name: "Presentation",
    nameApi: "Presentations",
    subcategories: ["PowerPoint", "Google Slides", "Keynote", "Prezi"],
  },
  {
    name: "Resume",
    nameApi: "CV & Resumes",
    subcategories: ["Professional", "Creative", "Student", "Executive"],
  },
  {
    name: "Invitation",
    nameApi: "Invitation Designs",
    subcategories: ["Greeting Cards", "Event Invitations"],
  },
  {
    name: "Videos",
    nameApi: "Videos",
    subcategories: ["Greeting Cards", "Event Invitations"],
  },
];

const Header = () => {
  const [mode,setmode]=useState(false)

  const handleopen=()=>{
    setmode(true)
  }

  const handleclose=()=>{
    setmode(false)
  }
  return (
    <>
    <div className={styles.headerwrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            src={Clippetlogo}
            alt="Clippet_Design_Services.png"
            width={142}
            height={59.94}
          />
        </div>
        <nav className={styles.categoryNav}>
          {categories.map((data, index) => (
            <div key={index} className={styles.dropdown}>
              <button className={styles.categoryButton}>{data.name}</button>
              <div className={styles.dropdownContent}>
                {data.subcategories.map((subcategory, subIndex) => (
                  <a
                    href="#"
                    key={subIndex}
                    className={styles.subcategoryLink}
                  >
                    {subcategory}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className={styles.cartArea}>
          <div>
            <img
              src={CartIcon}
              alt="Clippet_Design_Services.png"
              width={32}
              height={32}
            />
          </div>
          <div>
            <img
              src={Profileicon}
              alt="Clippet_Design_Services.png"
              width={32}
              height={32}
              onClick={handleopen}
            />
          </div>
        </div>
      </header>
    </div>
    {mode&&<div style={{width:"400px",height:"400px",border:"2px solid"}}>
      <div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div >
          <div style={{display:"flex",justifyContent:"flex-end", cursor:"pointer"}} onClick={handleclose}>
            <img src={closeicon} width={20} height={20}/>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div style={{display:"flex"}}>
                      <img src={ClippetFooterLogo} width={70} height={70}/>
                      <img src={clippetword} width={100} height={70}/>
                    </div>
                    <div>
                      <p>Let's create uh-MAY-zing designs</p>
                      <p>Log in or Sign up</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div style={{display:"flex",border:"2px solid",borderRadius:"10px"}}>
                          <p>+91</p>
                          <input style={{border:"none"}}></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
};

export default Header;

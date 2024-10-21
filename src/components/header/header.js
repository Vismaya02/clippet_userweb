import React from "react"
import {Clippetlogo,CartIcon,Profileicon}from "../image"
// import SearchIcon from "@mui/icons-material/Search";/
import styles from "./header.module.css"

  const Header=()=>{
    const categories = [
  {
    name: "Branding",
    nameApi: "Branding Design",
    subcategories: [
      "Business Cards",
      "Letter Heads",
      "Envelope Design",
      "Certificate Design",
    ],
  },
  {
    name: "Print",
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
    nameApi: "Social Media Designs",
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
];
    return(
      <div className={styles.headerwrapper}>
        <header className={styles.header}>
          <div className={styles.logo}>
          <img src={Clippetlogo} alt="Clippet_Design_Services.png"  width={142} height={59.94}/>
          </div>
          <nav className={styles.categoryNav}>
          {categories.map((data)=>(
            <div>
            <button key={data.name} className={styles.categoryButton}>{data.name}</button>
            </div>
          ))}
          </nav>
          <div className={styles.cartArea}>
          <div>
          <img src={CartIcon} alt="Clippet_Design_Services.png" width={32} height={32}/>
          </div>
          <div>
          <img src={Profileicon} alt="Clippet_Design_Services.png" width={32} height={32}/>
          </div>
          </div>
        </header>
      </div>
)
  }
  export default Header;
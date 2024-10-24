import React, { useState } from "react";
import { Clippetlogo, CartIcon, Profileicon } from "../image";
import styles from "./header.module.css";
import Login from "../login/login";

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

  const handleOpen = () => {
    setMode(true);
  };

  const handleClose = () => {
    setMode(false);
  };

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
                    <a href="#" key={subIndex} className={styles.subcategoryLink}>
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
                onClick={handleOpen}
              />
            </div>
          </div>
        </header>
      </div>

      {/* Modal Background Overlay */}
      {mode && (
        <div className={styles.modalOverlay}>
          <Login handleClose={handleClose}/>
        </div>
      )}
    </>
  );
};

export default Header;

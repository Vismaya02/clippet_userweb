import { heropageleftellipse,
         heropagerightellipse,
         rightsidearrow,
         leftsidearrow,
         yellowstar,
         womensitting,
         manstanding} from "../image";
import {InputBase} from "@mui/material";
import style from "./herosection.module.css"
import {Image} from "@fluentui/react-components";
import SearchIcon from "@mui/icons-material/Search";

const HeroSection=()=>{
    return(
        <div className={style.heroSection}>
            <div className={`${style.backgroundShape} ${style.backgroundShapeLeft}`}>
            <Image
              src={heropageleftellipse}
              alt="Clippet_Design_Services.png"
              fit="cover"
            />
            </div>
            <div className={`${style.backgroundShapeTwo} ${style.backgroundShapeRight}`}>
            <Image
              src={heropagerightellipse}
              alt="Clippet_Design_Services.png"
              fit="cover"
            />
            </div>
            <div className={style.content}>
                <div className={style.bannerContainer}>
                    <Image src={leftsidearrow} className={style.sideImage}/>
                    <div className={style.textContainer}>
                        <span className={style.text}>
                            <img src={yellowstar} className={style.starImage} alt="Clippet_Design_Services.png"/>Best design service platform
                        </span>
                    </div>
                    <img src={rightsidearrow} className={style.sideImage} alt="Clippet_Design_Services.png"/>
                </div>
                    <h1 className={style.title}>India’s First On-demand
                        <br/>
                    Design Service Platform
                    </h1>
                    <h2 className={style.subtitle}>Get your creatives designed in just 90 min
                    </h2>
                
        <div className={style.searchBar}>
            <InputBase placeholder="Search for your design service" className={style.input} style={{
                color: "#000",
                paddingLeft: "16px",
                width: "460px",
                maxHeight: "46px",
                fontFamily: "globalFont",
              }}/>
              <div style={{
                    // background:
                    //   "linear-gradient(180deg, #8B5EFF 0%, #6F42E5 48%, #8B5EFF 100%)",
                    width: "42px",
                    height: "39px",
                    borderRadius: "9px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "6px",
                    cursor: "pointer",
                  }}>
                <SearchIcon
                    className={style.searchIcon}
                    style={{ color: "#6F42E5" }}
                  />
                </div>
                </div>
            </div>
            <img src={womensitting} className={style.leftImage} alt="Clippet_Design_Services.png"/>
            <img src={manstanding} className={style.rightImage} alt="Clippet_Design_Services.png"/>
        </div>
    )
}
export default HeroSection;
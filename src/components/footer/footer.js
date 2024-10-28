import { Callicon, Clippetfooterlogo, Clippetlogo,Clippetlogo1, Clippetwhite } from "../image"
import { Image,Button } from "@fluentui/react-components";
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import Twitter from "@mui/icons-material/Twitter"
import LinkdeIn from "@mui/icons-material/LinkedIn"
import style from "./footer.module.css"
// import { useStyle } from "./useStyle"
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
    Box,
    Link,
    Grid2,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerContent}>
                <div className={style.leftSection}>
                    <div className={style.logo}>
                        <Image src={Clippetfooterlogo} alt="Clippet_Design_Services.png" height={40} width={35.69}/>
                        <Image src={Clippetwhite} alt="Clippet_Design_Services.png" height={40} width={40} />
                    </div> 
                    <Typography variant="body2" className={style.description} style={{fontSize: "16px",textAlign: "left"}}>
                        Clippet is your go-to place for custom design needs. Easily order
                        posters, social media graphics, banners, and business cards design.
                        High-quality designs delivered to your inbox. Hassle-free and
                        professional.
                    </Typography>
                </div>
                <div className={style.rightSection}>
                <div className={style.colContent}>
                    <div>
                        <Typography variant="h6" className={style.header} style={{marginBottom: "7px" }}>Contact Us</Typography>
                        <Typography variant="body2" style={{fontSize: "16px",color: "#ffffff",}}><a href="mailto:+91-7624934555" style={{color:"white",textDecoration: "none"}}>support@clippet.ai</a></Typography>
                    </div>
                    <div>
                        <Typography variant="h6" className={style.header} style={{marginBottom: "7px" }}>Careers</Typography>
                        <Typography variant="body2" style={{fontSize: "16px",color: "#ffffff",}}><a href="mailto:+91-7624934555" style={{color:"white",textDecoration: "none"}}>careers@clippet.ai</a></Typography>
                    </div>
                    <div style={{marginTop:"40px"}}>
                        <Button style={{
                    backgroundColor: "#FCA447",
                    padding: "8px",
                    borderRadius: "6px",
                    fontSize: "16px",
                    fontFamily: "globalFont",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                            <Image src={Callicon} alt="Clippet_Design_Services.png" style={{ marginRight: "4px" }}/><a href="tel:+91-7624934555" style={{color:"white",textDecoration: "none"}}>+91-7624934555</a>
                        </Button>
                    </div>
                </div>
                <div>
                    <div className={style.column}>
                        <Typography variant="h6" className={style.header}>Categories</Typography>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                        }}>
                        <Link sx={{color:"white"}}>Branding Design</Link>
                        <Link sx={{color:"white"}}>Print Design</Link>
                        <Link sx={{color:"white"}}>UI Designs</Link>
                        <Link sx={{color:"white"}}>Presentations</Link>
                        <Link sx={{color:"white"}}>CV & Resumes</Link>
                        <Link sx={{color:"white"}}>Invitation</Link>
                    </div>
                </div>
                <div className={style.column}>
                <div className={style.column}>
                    <Typography variant="h6">
                        Policies
                    </Typography>
                    <ul style={{listStyle:"none",margin:"0px",padding:"0px"}}>
                        <li style={{marginBottom:"8px"}}>
                            <a href="/refundpolicy" target="_blank" style={{ fontSize: "16px"}}>Cancellation & Refund policy</a>
                        </li>
                        <li style={{marginBottom:"8px"}}>
                            <a href="/privacypolicy" target="_blank" style={{ fontSize: "16px"}}>Privacy policy</a>
                        </li>
                        <li style={{marginBottom:"8px"}}>
                            <a href="/termsandconditons" target="_blank" style={{ fontSize: "16px"}}>Terms & Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            </div>
            <Grid2 sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ flex: "0 0 28%" }}>
                <div>
                    <Typography variant="body2" style={{
                    marginBottom: "8px",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}>REGD. OFFICE ADDRESS</Typography>
                <div style={{ fontSize: "14px" }}>
                    Clippet Technologies Private Limited #665, 3rd Main, 11th Cross, Hemavathi Nagar, Hassan, Karnataka - 573201.
                </div>
                </div>
                </Box>
                <Box sx={{ flex: "0 0 15%" }}>
                <div>
                    <Typography variant="h6" style={{ marginBottom: "8px"}}>Keep in Touch</Typography>
                    <div className={style.socialIcons}>
                        <a><InstagramIcon style={{color: "#6F42E5",backgroundColor:"#fff", borderRadius:"50%",padding:"3px"}} /></a>
                        <a><FacebookIcon style={{color: "#6F42E5",backgroundColor:"#fff", borderRadius:"50%",padding:"3px"}} /></a>
                        <a><Twitter style={{color: "#6F42E5",backgroundColor:"#fff", borderRadius:"50%",padding:"3px"}} /></a>
                        <a><LinkdeIn style={{color: "#6F42E5",backgroundColor:"#fff", borderRadius:"50%",padding:"3px"}} /></a>
                    </div>
                </div>
                </Box>
            </Grid2>
            <div className={style.bottomsection}>
                <br/>
                <Typography variant="body2" className={style.copyright}>Clippet &trade; {new Date().getFullYear()} All Rights Reserved</Typography>
            </div>
        </footer>
    )
}
export default Footer;
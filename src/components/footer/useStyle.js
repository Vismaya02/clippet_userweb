import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  footer: {
    // backgroundColor: "#fff",
    // padding: "50px 20px",
    padding: "20px 40px",
    fontFamily: "Arial, sans-serif",
    [theme.breakpoints.up("xs")]: {
      padding: "20px 30px",
      // padding: "20px 80px 0px 80px",
    },
    color: "#fff",
    fontFamily: "globalFont",
  },
  footerContent: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  leftSection: {
    marginBottom: "30px",
    [theme.breakpoints.up("md")]: {
      flex: "0 0 30%",
      marginRight: "40px",
      marginBottom: 0,
    },
  },
  logo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  logoText: {
    marginLeft: "10px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  description: {
    color: "#fff",
    fontFamily: "globalFont",
  },
  rightSection: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      flex: "0 0 50%",
    },
  },
  column: {
    flex: "0 0 48%",
    marginBottom: "20px",
    [theme.breakpoints.up("sm")]: {
      flex: "0 0 30%",
    },
    "& h6": {
      marginBottom: "7px",
      fontSize: "20px",
      // fontWeight: "bold",
      fontFamily: "globalFont",
    },
    "& ul": {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    "& li": {
      marginBottom: "8px",
    },
    "& a": {
      // color: "#6A6A6A",
      color: "#fff",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
      fontFamily: "globalFont",
    },
  },
  bottomSection: {
    // marginTop: "40px",
    // marginBottom: "40px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start",
    },
  },
  socialIcons: {
    display: "flex",
    // justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
      // justifyContent: "center",
    },
    [theme.breakpoints.up("xs")]: {
      marginBottom: 0,
      // justifyContent: "center",
    },
    "& svg": {
      fontSize: "28px",
      color: "#6F42E5",
      backgroundColor: "#fff",
      padding: "3px",
      borderRadius: "50%",
      fontFamily: "globalFont",
    },
  },
  copyright: {
    // color: "#6A6A6A",
    color: "#fff",
    // marginTop: "28px",
    [theme.breakpoints.up("lg")]: {
      borderTop: "1px solid rgba(255, 255, 255, 0.12)",
      justifyContent: "start",
    },
    width: "100%",
    alignSelf: "start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center", //start
    alignItems: "start",
    paddingTop: "15px",
    fontFamily: "globalFont !important",
  },
  colContent: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  accordion: {
    backgroundColor: "transparent",
    boxShadow: "none",
    "& ul": {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    "& li": {
      marginBottom: "8px",
    },
    "& a": {
      color: "#fff", // Change this color to any desired color
      textDecoration: "none",
      fontSize: "16px",
      fontFamily: "globalFont",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  header: {
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "globalFont",
  },
  expandIcon: {
    color: "#fff",
    width: "20px",
    height: "20px",
  },
  accordionLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontFamily: "globalFont",
    // transition: "text-decoration 0.3s ease",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  linkCategory: {
    color: "#fff", // Change this color to any desired color
    textDecoration: "none",
    fontSize: "16px",
    display: "block",
    lineHeight: "35px",
    fontFamily: "globalFont",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

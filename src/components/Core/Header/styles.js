import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";

export default makeStyles((theme) => ({
  textButtonHeader:{
   fontSize:'13px',
   textTransform: "none",
   marginLeft:'2px'
  },
  nameUser:{
    fontSize:'12px',
    marginTop:'2px',
    marginLeft:'1px'
  },
  buttonSelect: {
    color: "#fff",
    textTransform: "none",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: alpha(theme.palette.common.black, 0.08),
    },
  },
  imgLogo: {
    width: "50px",
    height: "50px",
  },
  logotype: {
    color: "white",
    marginLeft: theme.spacing(4.5),
    marginRight: theme.spacing(2.5),
    fontWeight: 500,
    fontSize: 18,
    whiteSpace: "nowrap",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    width: "140px",
  },
  logo: {
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
      padding: "3px",
      backgroundColor: alpha(theme.palette.common.black, 0.08),
    },
  },
  navLink: {
    textDecoration: "none",
    color: "#B9B9B9",
  },
  appBar: {
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  headerSection: {
    marginLeft: "15px",
  },
  toolbar: {
    paddingLeft: '0px',
    paddingRight: theme.spacing(2),
    minHeight:"52px !important"
 
  },
  hide: {
    display: "none",
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: 25,
    paddingLeft: theme.spacing(2.5),
    width: 36,
    backgroundColor: alpha(theme.palette.common.black, 0),
    transition: theme.transitions.create(["background-color", "width"]),
    "&:hover": {
      cursor: "pointer",
      backgroundColor: alpha(theme.palette.common.black, 0.08),
    },
  },
  searchFocused: {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 250,
    },
  },
  searchIcon: {
    width: 36,
    right: 0,
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: theme.transitions.create("right"),
    "&:hover": {
      cursor: "pointer",
    },
  },
  searchIconOpened: {
    right: theme.spacing(1.25),
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    height: 36,
    padding: 0,
    paddingRight: 36 + theme.spacing(1.25),
    width: "100%",
  },
  messageContent: {
    display: "flex",
    flexDirection: "column",
  },
  headerMenu: {
    marginTop: theme.spacing(2),
 
  },
  headerMenuList: {
    display: "flex",
    flexDirection: "column",
  },
  headerMenuItem: {
    "&:hover, &:focus": {
      backgroundColor: theme.palette.background.light,
      // color: "white",
    },
  },
  headerMenuButton: {
    // marginLeft: theme.spacing(2),
    // padding: theme.spacing(0.5),
    padding:'0px 0xp 0xp 0px',
    height:'30px'
    
  },
  headerMenuButtonSandwich: {
    marginLeft: 9,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
    padding: theme.spacing(0.5),
  },
  headerMenuButtonCollapse: {
    marginRight: theme.spacing(2),
    marginLeft: '20px',
  },
  headerMenuButtonCollapseMargin:{
    marginLeft:'35px'
  },
  headerIcon: {
    fontSize: 23,
    
    // color: "rgba(255, 255, 255, 0.35)",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: alpha(theme.palette.common.black, 0.08),
    },
  },
  headerIconCollapse: {
    color: "white",
  },
  menuUser: {
    display: "flex",
    alignItems: "center",
  },
  nofitication: {
    padding: "0 10px",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: alpha(theme.palette.common.black, 0.08),
    },
  },
  menuProfile: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: alpha(theme.palette.common.black, 0.08),
    },
  },
  menuProfileUser: {
    backgroundColor: "#40454a",
    borderRadius: "3px",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#aaa",
    },
  },
  profileMenu: {
    minWidth: 265,
  },
  profileMenuUser: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  profileMenuItem: {
    color: theme.palette.text.hint,
  },
  profileMenuIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.text.hint,
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.08),
    },
  },
  profileMenuLink: {
    fontSize: 16,
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  messageNotification: {
    height: "auto",
    display: "flex",
    alignItems: "center",
    "&:hover, &:focus": {
      backgroundColor: alpha(theme.palette.common.black, 0.08),
    },
  },
  messageNotificationSide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
  messageNotificationBodySide: {
    alignItems: "flex-start",
    marginRight: 0,
  },
  sendMessageButton: {
    margin: theme.spacing(4),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textTransform: "none",
  },
  sendButtonIcon: {
    marginLeft: theme.spacing(2),
  },
  purchaseBtn: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    marginRight: theme.spacing(3),
  },
  profileLabel: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

// "&:hover": {
//   cursor: "pointer",
//   backgroundColor: alpha(theme.palette.common.black, 0.08),
// },

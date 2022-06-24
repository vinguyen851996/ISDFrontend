import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@mui/material/styles";

export default makeStyles((theme) => ({
  link: {
  
    textDecoration: "none",
    "&:hover, &:focus": {
      backgroundColor: "#1e282c",
      "& > .MuiSvgIcon-root": {
        display: "inline-block",
      },
    },
    "&.Mui-focusVisible": {
      backgroundColor: theme.palette.common.black,
    },
 
    fontSize:'16px',
    paddingLeft:'0px'
  },
  linkActive: {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
    color: "#fff",
  },
  // linkNested: {
  //   paddingLeft: 25,
  //   "&:hover, &:focus": {
  //     backgroundColor: "#1e282c",
  //   },
  // },
  linkIcon: {
    // marginRight: theme.spacing(1),
    "& > .MuiSvgIcon-root": {
      display: "inline-block",
      fill: "#fff",
    },
    // color:
    //   theme.palette.type === "dark"
    //     ? "#616168 !important"
    //     : theme.palette.text.secondary + "99",
    color:'#b8c7ce',
    transition: theme.transitions.create("color"),
    display: "flex",
    justifyContent: "center",
    "&:hover":{
      color:"#fff"
    }
 
  },
  linkIconActive: {
    color: `#fff !important`,
  },
  linkText: {
    padding: 0,
    // color:
    //   theme.palette.type === "dark"
    //     ? "#D6D6D6 !important"
    //     : theme.palette.text.secondary + "CC",
    transition: theme.transitions.create(["opacity", "color"]),
    fontSize: 13,
    color:'#b8c7ce',
    // marginLeft:'18px',
    "&:hover": {
      color:"#fff"
    }
  },
  linkTextActive: {
    color: "#fff",
  },
  linkTextHidden: {
    opacity: 0,
  },
  nestedList: {
    paddingLeft: 0,
  },
  sectionTitle: {
    marginLeft: theme.spacing(4.5),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: 1,
    backgroundColor:
      theme.palette.type === "dark" ? "rgba(151,151,151, .15)" : "#D8D8D880",
  },
  expand: {
    transform: "rotate(180deg)",
  },
  expandWrapper: {
    color: theme.palette.text.secondary + "99",
    transition: theme.transitions.create("transform"),
    display: (props) => (props ? "inline-flex" : "none"),
    marginLeft: "auto",
  },
  nestedMenu: {
    paddingLeft: 0,
  },
  nestedMenuItem: {
    paddingLeft: 0,
  },
}));

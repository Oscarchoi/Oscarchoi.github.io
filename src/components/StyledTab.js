import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";

export default withStyles({
  root: {
    // background: "linear-gradient(45deg, #FFF 30%, #FF8E53 90%)",
    border: 0,
    height: 10,
    alignItems: "middle",
    padding: "0 10px",
    margin: 0,
    wrapped: true, // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
  wrapper: {
    flexDirection: "row",
    fontSize: "1rem",
  },
})(Tab);

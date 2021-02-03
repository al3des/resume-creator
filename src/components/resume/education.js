import { makeStyles } from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";

let useStyles = makeStyles({
  root: {}
});

export default function Education() {
  let classes = useStyles();
  return <div className={classes.root}></div>;
}

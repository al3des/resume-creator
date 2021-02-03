import "./styles.css";

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Resume from "./components/layout/Resume";
import { makeStyles, CssBaseline } from "@material-ui/core";

let useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "minmax(200px, 200px) 2fr",
    gridTemplateAreas: `". header header"
     "sidebar resume resume" `
  }
});

export default function App() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <header />
      <Sidebar />
      <Resume />
    </div>
  );
}

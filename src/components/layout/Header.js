import { makeStyles } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

let useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gridArea: "header",
    maxHeight: "100%"
  },
  img: {
    maxWidth: "50%",
    display: "block"
  },
  p: {
    display: "flex",
    alignItems: "center"
  }
});

export default function Header() {
  let classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src="https://avatars.dicebear.com/api/male/:seed.svg"
        alt=""
      />
      <h1>Name</h1>
      <p className={classes.p}>
        Frontend Developer <LocationOnIcon /> Address | phone
      </p>
    </div>
  );
}

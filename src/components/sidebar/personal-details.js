import { makeStyles } from "@material-ui/core";

let useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  span: {
    display: "block"
  }
});

export default function PersonalDetails({ personalDetails }) {
  let { address, phone, email } = personalDetails;

  let classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>Details</h2>
      <p>
        <span className={classes.span}>
          {address.street}, {address.city}, {address.zip}, {address.country}
        </span>
        <span className={classes.span}>{phone}</span>
        <span className={classes.span}>{email}</span>
      </p>
    </div>
  );
}

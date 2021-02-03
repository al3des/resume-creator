import { makeStyles } from "@material-ui/core";

let useStyles = makeStyles({
  root: {
    textAlign: "center"
  }
});

export default function CustomField({ customField }) {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>{customField.name}</h2>
      {customField.text.map((value, i) => (
        <p key={i}>{value}</p>
      ))}
    </div>
  );
}

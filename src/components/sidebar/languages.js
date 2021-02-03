import { LinearProgress, makeStyles } from "@material-ui/core";

let useStyles = makeStyles({
  root: {
    textAlign: "center"
  }
});

export default function Languages({ languages }) {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>languages</h2>
      {languages.map((lang) => (
        <div key={lang.name}>
          <h3>{lang.name}</h3>
          <LinearProgress variant="determinate" value={lang.level} />
        </div>
      ))}
    </div>
  );
}

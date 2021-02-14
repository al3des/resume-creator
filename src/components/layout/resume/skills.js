import { LinearProgress, makeStyles, Typography } from "@material-ui/core"

let useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: "50%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: theme.spacing(2),
  },
  title: {
    textTransform: "uppercase",
  },
}))

export default function Skills({ items }) {
  let classes = useStyles()
  return (
    <div className={classes.root}>
      {items &&
        items.map(({ skill, level }) => (
          <div key={skill}>
            <Typography className={classes.title}>{skill}</Typography>
            <LinearProgress
              variant="determinate"
              color="primary"
              value={level}
            />
          </div>
        ))}
    </div>
  )
}

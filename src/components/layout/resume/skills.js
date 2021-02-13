import { LinearProgress, makeStyles } from "@material-ui/core"

let useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "50%",
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
  console.log("skills", items)
  return (
    <div className={classes.root}>
      {items &&
        items.map(({ skill, level }) => (
          <div key={skill}>
            <h3 className={classes.title}>{skill}</h3>
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

import { LinearProgress, makeStyles } from "@material-ui/core"

let useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
})

export default function Languages({ languages }) {
  let classes = useStyles()
  return (
    <>
      {languages && (
        <div className={classes.root}>
          <h2>languages</h2>
          {languages &&
            languages.map((lang) => (
              <div key={lang.name}>
                <h3>{lang.language}</h3>
                <LinearProgress
                  variant="determinate"
                  color="secondary"
                  value={lang.level}
                />
              </div>
            ))}
        </div>
      )}
    </>
  )
}

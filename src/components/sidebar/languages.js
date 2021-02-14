import { LinearProgress, makeStyles, Typography } from "@material-ui/core"

let useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  langContainer: {
    maxWidth: "70%",
    margin: "0 auto",
  },
  langName: {
    margin: ".8em auto",
  },
})

export default function Languages({ languages }) {
  let classes = useStyles()
  return (
    <>
      {languages && (
        <div className={classes.root}>
          <Typography variant="subtitle1">languages</Typography>
          {languages &&
            languages.map((lang) => (
              <div className={classes.langContainer} key={lang.name}>
                <Typography className={classes.langName} variant="subtitle2">
                  {lang.language}
                </Typography>
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

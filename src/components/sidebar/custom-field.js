import { makeStyles, Typography } from "@material-ui/core"

let useStyles = makeStyles({
  root: {
    textAlign: "center",
    marginBottom: "2em",
  },
})

export default function CustomField({ customField }) {
  let classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="subtitle2">{customField.fieldTitle}</Typography>
      <Typography>{customField.fieldValue}</Typography>
    </div>
  )
}

import { makeStyles } from "@material-ui/core"

let useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
})

export default function CustomField({ customField }) {
  let classes = useStyles()
  return (
    <div className={classes.root}>
      <h2>{customField.fieldTitle}</h2>
      <p>{customField.fieldValue}</p>
    </div>
  )
}

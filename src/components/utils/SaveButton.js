import { Button, makeStyles } from "@material-ui/core"

import SaveIcon from "@material-ui/icons/Save"

let useStyles = makeStyles({
  root: {
    margin: "2em auto",
  },
})

export default function SaveButton({ children, saved, handleSubmit }) {
  let classes = useStyles()
  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      startIcon={<SaveIcon />}
      disabled={saved}
      className={classes.root}
    >
      {children}
    </Button>
  )
}

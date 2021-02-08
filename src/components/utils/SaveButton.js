import { Button } from "@material-ui/core"

import SaveIcon from "@material-ui/icons/Save"

export default function SaveButton({ children, saved, handleSubmit }) {
  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      startIcon={<SaveIcon />}
      disabled={saved}
    >
      {children}
    </Button>
  )
}

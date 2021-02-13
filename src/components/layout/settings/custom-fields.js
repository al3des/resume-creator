import { Fragment } from "react"
import {
  Button,
  Box,
  makeStyles,
  TextField,
  IconButton,
} from "@material-ui/core"

import SaveIcon from "@material-ui/icons/Save"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"

import { withFormHOC } from "../../../HOCs/FormHOC"

let useStyles = makeStyles((theme) => ({
  inputGroup: {
    display: "flex",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "200px",
    },
  },
  actionButtons: { display: "flex" },
}))

function CustomFieldsSettings(props) {
  let classes = useStyles()
  let {
    inputFields,
    personalDetails,
    handleSubmit,
    handleInputChange,
    handleAddField,
    handleRemoveField,
    saved,
  } = props
  return (
    <>
      <form onSubmit={handleSubmit}>
        {inputFields &&
          inputFields.map((field, i) => {
            return (
              <Fragment key={`${field}-${i}`}>
                <Box className={classes.inputGroup}>
                  <TextField
                    required
                    label="Field Title"
                    name="fieldTitle"
                    value={field.fieldTitle}
                    onChange={(e) => handleInputChange(field.id, e)}
                  />
                  <TextField
                    required
                    label="Field Value"
                    name="fieldValue"
                    value={field.fieldValue}
                    onChange={(e) => handleInputChange(field.id, e)}
                  />
                  <Box className={classes.actionButtons}>
                    <IconButton onClick={handleAddField}>
                      <AddIcon />
                    </IconButton>
                    <IconButton
                      onClick={(i) => handleRemoveField(field.id)}
                      disabled={inputFields.length < 2}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Fragment>
            )
          })}
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => handleSubmit(e)}
          type="submit"
          startIcon={<SaveIcon />}
          disabled={saved}
        >
          save
        </Button>
      </form>
    </>
  )
}

export default withFormHOC(CustomFieldsSettings, {
  type: "SET_CUSTOM_FIELDS",
  addFieldsSchema: { fieldTitle: "", fieldValue: "" },
  fieldSetKey: "customFields",
})

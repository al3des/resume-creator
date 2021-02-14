import { Fragment } from "react"
import { Box, makeStyles, TextField } from "@material-ui/core"

import { withFormHOC } from "../../../HOCs/FormHOC"
import DeleteButton from "../../utils/DeleteButton"
import AddButton from "../../utils/AddButton"
import SaveButton from "../../utils/SaveButton"

let useStyles = makeStyles((theme) => ({
  inputGroup: {
    display: "flex",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  actionButtons: { display: "flex" },
}))

function CustomFieldsSettings(props) {
  let classes = useStyles()
  let {
    inputFields,
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
                    <DeleteButton
                      onClick={(i) => handleRemoveField(field.id)}
                      disabled={inputFields.length < 2}
                    />
                  </Box>
                </Box>
              </Fragment>
            )
          })}
        <AddButton onClick={handleAddField} />
        <SaveButton disabled={saved}>save</SaveButton>
      </form>
    </>
  )
}

export default withFormHOC(CustomFieldsSettings, {
  type: "SET_CUSTOM_FIELDS",
  addFieldsSchema: {},
  fieldSetKey: "customFields",
})

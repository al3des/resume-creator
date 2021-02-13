import {
  Box,
  Icon,
  IconButton,
  makeStyles,
  TextareaAutosize,
  TextField,
} from "@material-ui/core"
import { Fragment } from "react"
import { withFormHOC } from "../../../HOCs/FormHOC"
import SaveButton from "../../utils/SaveButton"

let useStyles = makeStyles((theme) => ({
  inputGroup: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: theme.spacing(2),
  },
  actionButtons: { display: "flex" },
}))

function WorkHistorySettings(props) {
  let {
    inputFields,
    saved,
    handleSubmit,
    handleInputChange,
    handleAddField,
    handleRemoveField,
  } = props

  let classes = useStyles()
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        {inputFields &&
          inputFields.map((field, i) => (
            <Fragment key={`${field}-${i}`}>
              <Box className={classes.inputGroup}>
                <TextField
                  required
                  label="Title"
                  name="title"
                  value={field.title}
                  onChange={(e) => handleInputChange(field.id, e)}
                />
                <TextField
                  required
                  label="Location"
                  name="location"
                  value={field.location}
                  onChange={(e) => handleInputChange(field.id, e)}
                />
                <TextField
                  required
                  label="Institution"
                  name="institution"
                  value={field.institution}
                  onChange={(e) => handleInputChange(field.id, e)}
                />
                <TextField
                  label="From"
                  name="from"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={field.from}
                  onChange={(e) => handleInputChange(field.id, e)}
                />
                <TextField
                  label="To"
                  name="to"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={field.to}
                  onChange={(e) => handleInputChange(field.id, e)}
                />
                <TextareaAutosize
                  required
                  placeholder="Description"
                  name="text"
                  label="Description"
                  rowsMin={10}
                  cols={50}
                  value={field.text}
                  onChange={(e) => handleInputChange(field.id, e)}
                />
              </Box>
              <Box className={classes.actionButtons}>
                <IconButton onClick={handleAddField}>
                  <Icon>add</Icon>
                </IconButton>
                <IconButton
                  onClick={(i) => handleRemoveField(field.id)}
                  disabled={inputFields.length < 2}
                >
                  <Icon>remove</Icon>
                </IconButton>
              </Box>
            </Fragment>
          ))}
        <SaveButton saved={saved}>save</SaveButton>
      </form>
    </Box>
  )
}

export default withFormHOC(WorkHistorySettings, {
  type: "SET_WORK_HISTORY",
  addFieldsSchema: {},
  fieldSetKey: "workHistory",
})

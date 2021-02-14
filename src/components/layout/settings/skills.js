import { Fragment } from "react"
import {
  Select,
  MenuItem,
  TextField,
  Button,
  Box,
  makeStyles,
  InputLabel,
} from "@material-ui/core"

import SaveIcon from "@material-ui/icons/Save"

import { withFormHOC } from "../../../HOCs/FormHOC"
import DeleteButton from "../../utils/DeleteButton"
import AddButton from "../../utils/AddButton"

let useStyles = makeStyles((theme) => ({
  inputGroup: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr auto",
    gridGap: theme.spacing(2),
  },
  actionButtons: { display: "flex", justifyContent: "flex-end" },
}))

function SkillsSettings(props) {
  let {
    inputFields,
    handleSubmit,
    handleInputChange,
    handleAddField,
    handleRemoveField,
    saved,
  } = props
  let classes = useStyles()

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        {inputFields &&
          inputFields.map((field, i) => (
            <Fragment key={i}>
              <Box className={classes.inputGroup}>
                <TextField
                  name="skill"
                  label="Skill title"
                  value={field.skill}
                  onChange={(e) => handleInputChange(field.id, e)}
                />
                <Box>
                  <InputLabel id={`language-${field.id}`}>Level</InputLabel>
                  <Select
                    labelId="skill"
                    id="skill-select"
                    name="level"
                    onChange={(e) => handleInputChange(field.id, e)}
                    value={field.level}
                    fullWidth
                  >
                    <MenuItem value={25}>Basic</MenuItem>
                    <MenuItem value={50}>Intermediate</MenuItem>
                    <MenuItem value={75}>Advanced</MenuItem>
                    <MenuItem value={95}>Very advanced</MenuItem>
                    <MenuItem value={100}>Native</MenuItem>
                  </Select>
                </Box>
                <Box className={classes.actionButtons}>
                  <DeleteButton
                    onClick={(i) => handleRemoveField(field.id)}
                    disabled={inputFields.length < 2}
                  />
                </Box>
              </Box>
            </Fragment>
          ))}
        <AddButton onClick={handleAddField} />
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

export default withFormHOC(SkillsSettings, {
  type: "SET_SKILLS",
  addFieldsSchema: {},
  fieldSetKey: "skills",
})

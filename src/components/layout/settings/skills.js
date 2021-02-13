import { Fragment } from "react"
import {
  Select,
  MenuItem,
  TextField,
  Button,
  Box,
  makeStyles,
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
              <TextField
                name="skill"
                label="Skill title"
                value={field.skill}
                onChange={(e) => handleInputChange(field.id, e)}
              />
              <Select
                labelId="skill"
                id="skill-select"
                name="level"
                onChange={(e) => handleInputChange(field.id, e)}
                value={field.level}
              >
                <MenuItem value={25}>Basic</MenuItem>
                <MenuItem value={50}>Intermediate</MenuItem>
                <MenuItem value={75}>Advanced</MenuItem>
                <MenuItem value={95}>Very advanced</MenuItem>
                <MenuItem value={100}>Native</MenuItem>
              </Select>
              <Box className={classes.actionButtons}>
                <IconButton onClick={() => handleAddField()}>
                  <AddIcon />
                </IconButton>
                <IconButton
                  onClick={(i) => handleRemoveField(field.id)}
                  disabled={inputFields.length < 2}
                >
                  <RemoveIcon />
                </IconButton>
              </Box>
            </Fragment>
          ))}
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
  addFieldsSchema: { skill: "", level: "" },
  fieldSetKey: "skills",
})

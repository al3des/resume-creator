import { Fragment, useContext, useState } from "react"
import {
  Select,
  Typography,
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

import { PersonalDetailsContext } from "../../../context/PersonalDetails"

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

export default function SkillsSettings() {
  let { dispatch } = useContext(PersonalDetailsContext)
  let initialFields = [{ skill: "", level: "" }]
  let [inputFields, setInputFields] = useState(initialFields)

  let [saved, setSaved] = useState(false)

  function handleInputChange(e, i) {
    const values = [...inputFields]
    values[i][e.target.name] = e.target.value
    setInputFields(values)
    setSaved(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSaved((s) => !s)
    dispatch({ type: "SET_SKILLS", inputFields })
  }

  function handleAddField() {
    setInputFields([...inputFields, { skill: "", level: "" }])
    setSaved(false)
  }

  function handleRemoveField(i) {
    const values = [...inputFields]
    values.splice(i, 1)
    setInputFields(values)
    setSaved(false)
  }

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
                value={handleRemoveField.language}
                onChange={(e) => handleInputChange(e, i)}
              />
              <Select
                labelId="skill"
                id="skill-select"
                name="level"
                onChange={(e) => handleInputChange(e, i)}
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
                  onClick={(i) => handleRemoveField(i)}
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

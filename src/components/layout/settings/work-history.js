import {
  Box,
  Icon,
  IconButton,
  makeStyles,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core"
import { Label } from "@material-ui/icons"
import { Fragment, useContext, useState } from "react"
import { PersonalDetailsContext } from "../../../context/PersonalDetails"
import SaveButton from "../../utils/SaveButton"

let useStyles = makeStyles((theme) => ({
  inputGroup: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: theme.spacing(2),
  },
  actionButtons: { display: "flex" },
}))

let fieldsTemplate = {
  title: "",
  location: "",
  text: "",
  from: "",
  to: "",
}

export default function WorkHistorySettings() {
  let { personalDetails, dispatch } = useContext(PersonalDetailsContext)

  let savedValues = personalDetails.sections.filter(
    (section) => section.name === "Work History"
  )[0].items

  let [inputFields, setInputFields] = useState(savedValues)
  let [saved, setSaved] = useState(true)

  function handleSubmit(e) {
    dispatch({ type: "SET_WORK_HISTORY", inputFields })
    e.preventDefault()
  }

  function handleInputChange(i, e) {
    const values = [...inputFields]
    values[i][e.target.name] = e.target.value
    setInputFields(values)
    console.log(inputFields)
    setSaved(false)
  }

  function handleAddField() {
    setInputFields([...inputFields, fieldsTemplate])
  }

  function handleRemoveField(i) {
    const values = [...inputFields]
    values.splice(i, 1)
    setInputFields(values)
    setSaved(false)
  }

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
                  onChange={(e) => handleInputChange(i, e)}
                />
                <TextField
                  required
                  label="Location"
                  name="location"
                  value={field.location}
                  onChange={(e) => handleInputChange(i, e)}
                />
                <TextField
                  label="From"
                  name="from"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={field.from}
                  onChange={(e) => handleInputChange(i, e)}
                />
                <TextField
                  label="From"
                  name="to"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={field.to}
                  onChange={(e) => handleInputChange(i, e)}
                />
                <TextareaAutosize
                  required
                  placeholder="Description"
                  name="text"
                  label="Description"
                  rowsMin={10}
                  cols={50}
                  value={field.text}
                  onChange={(e) => handleInputChange(i, e)}
                />
              </Box>
              <Box className={classes.actionButtons}>
                <IconButton onClick={() => handleAddField()}>
                  <Icon>add</Icon>
                </IconButton>
                <IconButton
                  onClick={(i) => handleRemoveField(i)}
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

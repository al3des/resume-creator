import { Fragment } from "react"
import {
  Button,
  Box,
  makeStyles,
  TextField,
  Typography,
  IconButton,
} from "@material-ui/core"

import SaveIcon from "@material-ui/icons/Save"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"

import { useContext, useState } from "react"
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

export default function CustomFieldsSettings() {
  let { personalDetails, dispatch } = useContext(PersonalDetailsContext)
  let { customFields } = personalDetails
  let [inputFields, setInputFields] = useState(customFields)
  let [saved, setSaved] = useState(true)

  function handleInputChange(i, e) {
    const values = [...inputFields]
    values[i][e.target.name] = e.target.value
    setInputFields(values)
    setSaved(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSaved((s) => !s)
    dispatch({ type: "SET_CUSTOM_FIELDS", inputFields })
    console.log("inputFields", inputFields)
    console.log("customFields:", customFields)
  }

  function handleAddField() {
    setInputFields([...inputFields, { fieldTitle: "", fieldValue: "" }])
    // dispatch({
    //   type: "ADD_BLANK_FIELD",
    //   blankTemplate: { fieldTitle: "", fieldValue: "" },
    // })
    // setSaved(false)
  }

  function handleRemoveField(i) {
    const values = [...inputFields]
    values.splice(i, 1)
    setInputFields(values)
    // dispatch({ type: "SET_CUSTOM_FIELDS", inputFields: values })
    setSaved(false)
  }

  let classes = useStyles()
  return (
    <>
      <Typography variant="h6" component="h2">
        Add Fields to the sidebar
      </Typography>
      <Typography>
        (place of birth, date of bith, driving license, etc..)
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)}>
        {inputFields &&
          inputFields.map((field, i) => (
            <Fragment key={`${field}-${i}`}>
              <Box className={classes.inputGroup}>
                <TextField
                  required
                  label="Field Title"
                  name="fieldTitle"
                  value={field.fieldTitle}
                  onChange={(e) => handleInputChange(i, e)}
                />
                <TextField
                  required
                  label="Field Value"
                  name="fieldValue"
                  value={field.fieldValue}
                  onChange={(e) => handleInputChange(i, e)}
                />
                <Box className={classes.actionButtons}>
                  <IconButton onClick={() => handleAddField()}>
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    onClick={(i) => handleRemoveField(i)}
                    disabled={customFields.length < 2}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Box>
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

import { useContext, useState } from "react"
import { InputLabel, Select, Typography, MenuItem } from "@material-ui/core"
import { PersonalDetailsContext } from "../../../context/PersonalDetails"

export default function LanguageSettings() {
  let { dispatch } = useContext(PersonalDetailsContext)
  let initialFields = [
    { language: "English", level: ["25", "50", "75", "100"] },
  ]
  let [inputFields, setInputFields] = useState(initialFields)
  let [saved, setSaved] = useState(false)

  function handleInputChange(i, e) {
    const values = [...inputFields]
    values[i][e.target.name] = e.target.value
    setInputFields(values)
    setSaved(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSaved((s) => !s)
    dispatch({ type: "SET_LANGUAGES", inputFields })
    console.log("inputFields", inputFields)
  }

  function handleAddField() {
    setInputFields([...inputFields, { fieldTitle: "", fieldValue: "" }])
    setSaved(false)
  }

  function handleRemoveField(i) {
    const values = [...inputFields]
    values.splice(i, 1)
    setInputFields(values)
    setSaved(false)
  }

  return (
    <>
      <Typography variant="h6" component="h2">
        Languages{" "}
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)}>
        <InputLabel id="language-1">{initialFields.language}</InputLabel>
        <Select
          labelId="language-1"
          id="language-select"
          onChange={handleInputChange}
        >
          {inputFields.level.map((l) => (
            <MenuItem value={l}>{l}</MenuItem>
          ))}
        </Select>
      </form>
    </>
  )
}

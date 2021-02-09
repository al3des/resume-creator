import { Box, TextareaAutosize, Typography } from "@material-ui/core"
import { useContext, useState } from "react"
import { PersonalDetailsContext } from "../../../context/PersonalDetails"
import SaveButton from "../../utils/SaveButton"

export default function ProfileSettings() {
  let { personalDetails, dispatch } = useContext(PersonalDetailsContext)
  let [profile, setProfile] = useState()

  let currentValue = personalDetails.sections.filter(
    (section) => section.name === "Profile"
  )[0].items[0].text

  function handleChange(e) {
    setProfile(e.target.value)
  }

  function handleSubmit(e) {
    dispatch({ type: "SET_PROFILE", profile })
    e.preventDefault()
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextareaAutosize
          rowsMin={10}
          cols={50}
          value={profile || currentValue}
          onChange={handleChange}
        />
        <SaveButton>save</SaveButton>
      </form>
    </Box>
  )
}

import { Box, TextareaAutosize, Typography } from "@material-ui/core"
import { withFormHOC } from "../../../HOCs/FormHOC"
import SaveButton from "../../utils/SaveButton"

function ProfileSettings(props) {
  let { inputFields, handleSubmit, handleInputChange, saved } = props
  let { text, id } = inputFields[0]
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextareaAutosize
          rowsMin={10}
          cols={50}
          defaultValue={text}
          value={text}
          name="text"
          onChange={(e) => handleInputChange(id, e)}
        />
        <SaveButton saved={saved}>save</SaveButton>
      </form>
    </Box>
  )
}

export default withFormHOC(ProfileSettings, {
  type: "SET_PROFILE",
  addFieldsSchema: { text: "" },
  fieldSetKey: "profile",
})

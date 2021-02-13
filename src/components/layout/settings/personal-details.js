import { Box, makeStyles, TextField, Typography } from "@material-ui/core"
import { withFormHOC } from "../../../HOCs/FormHOC"
import SaveButton from "../../utils/SaveButton"

let useStyles = makeStyles((theme) => ({
  inputGroup: {
    display: "flex",
    flexWrap: "wrap",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "200px",
    },
  },
}))

function PersonalDetailsSettings(props) {
  let { inputFields, handleSubmit, handleInputChange, saved } = props

  let {
    id,
    name,
    position,
    phone,
    email,
    street,
    zip,
    city,
    country,
  } = inputFields[0]
  let classes = useStyles()
  return (
    <form onSubmit={handleSubmit}>
      <Box className={classes.inputGroup}>
        <TextField
          label="Name"
          name="name"
          value={name}
          placeholder="Your name"
          onChange={(e) => handleInputChange(id, e)}
        />
        <TextField
          label="Position"
          name="position"
          placeholder="Your position"
          value={position}
          onChange={(e) => handleInputChange(id, e)}
        />
        <TextField
          label="Phone"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => handleInputChange(id, e)}
        />
        <TextField
          label="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => handleInputChange(id, e)}
        />
      </Box>
      <Typography variant="h6" component="h2">
        Address:
      </Typography>
      <Box className={classes.inputGroup}>
        <TextField
          label="Street name and number"
          name="street"
          value={street}
          onChange={(e) => handleInputChange(id, e)}
        />
        <TextField
          label="Zip code"
          name="zip"
          value={zip}
          onChange={(e) => handleInputChange(id, e)}
        />
        <TextField
          label="Your city"
          name="city"
          value={city}
          onChange={(e) => handleInputChange(id, e)}
        />
        <TextField
          label="Your country"
          name="country"
          value={country}
          onChange={(e) => handleInputChange(id, e)}
        />
      </Box>
      <SaveButton saved={saved}>save</SaveButton>
    </form>
  )
}

export default withFormHOC(PersonalDetailsSettings, {
  type: "SET_DETAILS",
  addFieldsSchema: {},
  fieldSetKey: "details",
})

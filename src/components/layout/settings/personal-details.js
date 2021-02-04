import { useContext } from "react"
import { PersonalDetailsContext } from "../../../context/PersonalDetails"

import { Box, makeStyles, TextField, Typography } from "@material-ui/core"

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

export default function PersonalDetailsSettings() {
  let { personalDetails, dispatch } = useContext(PersonalDetailsContext)
  let { name, position, address, phone, email } = personalDetails

  let classes = useStyles()
  return (
    <>
      <Typography variant="h6" component="h2">
        Personal Information:
      </Typography>
      <Box className={classes.inputGroup}>
        <TextField
          label="Name"
          value={name}
          placeholder="Your name"
          onChange={(e) =>
            dispatch({ type: "SET_DETAILS", name: e.target.value })
          }
        />
        <TextField
          label="Position"
          placeholder="Your position"
          value={position}
          onChange={(e) =>
            dispatch({ type: "SET_DETAILS", position: e.target.value })
          }
        />
        <TextField
          label="Phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) =>
            dispatch({ type: "SET_DETAILS", phone: e.target.value })
          }
        />
        <TextField
          label="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            dispatch({ type: "SET_DETAILS", email: e.target.value })
          }
        />
      </Box>
      <Typography variant="h6" component="h2">
        Address:
      </Typography>
      <Box className={classes.inputGroup}>
        <TextField
          label="Street name and number"
          value={address.street}
          onChange={(e) =>
            dispatch({ type: "SET_DETAILS", street: e.target.value })
          }
        />
        <TextField
          label="Zip code"
          value={address.zip}
          onChange={(e) =>
            dispatch({ type: "SET_DETAILS", zip: e.target.value })
          }
        />
        <TextField
          label="Your city"
          value={address.city}
          onChange={(e) =>
            dispatch({ type: "SET_DETAILS", city: e.target.value })
          }
        />
        <TextField
          label="Your country"
          value={address.country}
          onChange={(e) =>
            dispatch({ type: "SET_DETAILS", country: e.target.value })
          }
        />
      </Box>
    </>
  )
}

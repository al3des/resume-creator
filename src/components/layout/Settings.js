import { Divider, Drawer, makeStyles, Typography } from "@material-ui/core"

import PersonalDetails from "./settings/personal-details"
import CustomFields from "./settings/custom-fields"

import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import LanguageSettings from "./settings/languages"

let useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDivider-root": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  paper: {
    maxWidth: "40%",
    padding: theme.spacing(4),
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  backBtn: {
    cursor: "pointer",
    marginRight: theme.spacing(2),
  },
}))

export default function Settings({ open, setOpen }) {
  let classes = useStyles()
  return (
    <Drawer
      anchor="right"
      open={open}
      className={classes.root}
      classes={{ paper: classes.paper }}
    >
      <Typography variant="h5" component="h2" className={classes.title}>
        <ArrowBackIcon
          className={classes.backBtn}
          onClick={() => setOpen((s) => !s)}
        />
        Settings
      </Typography>
      <Divider />
      <PersonalDetails />
      <CustomFields />
      <LanguageSettings />
    </Drawer>
  )
}

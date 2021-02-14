import { useState } from "react"
import { theme } from "./theme/theme"
import "./styles.css"

import Sidebar from "./components/layout/Sidebar"
import Resume from "./components/layout/Resume"

import {
  makeStyles,
  CssBaseline,
  Paper,
  Fab,
  Box,
  ThemeProvider,
} from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"

import PersonalDetailsProvider from "./context/PersonalDetails"

import Settings from "./components/layout/Settings"

let useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: "60%",
    padding: theme.spacing(4),
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "4fr 8fr",
    gridTemplateRows: "1fr auto",
    gridTemplateAreas: `"sidebar resume resume"`,
    gridGap: theme.spacing(4),
    maxWidth: "210mm",
    width: "210mm",
    maxHeight: "297mm",
    background: "none",
    border: "none",
    boxShadow: "none",
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

export default function App() {
  let [settingsOpen, setSettingsOpen] = useState(false)
  let classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <PersonalDetailsProvider>
        <Paper className={classes.root}>
          <CssBaseline />
          <Sidebar />
          <Box displayPrint="none">
            <Fab
              color="secondary"
              className={`${classes.fab}`}
              displayPrint="none"
              onClick={() => setSettingsOpen((s) => !s)}
            >
              <EditIcon />
            </Fab>
          </Box>
          <Settings open={settingsOpen} setOpen={setSettingsOpen} />
          <Resume />
        </Paper>
      </PersonalDetailsProvider>
    </ThemeProvider>
  )
}

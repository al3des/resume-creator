import { useState } from "react"
import "./styles.css"

import Header from "./components/layout/Header"
import Sidebar from "./components/layout/Sidebar"
import Resume from "./components/layout/Resume"

import { makeStyles, CssBaseline, Paper, Fab } from "@material-ui/core"
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
    gridTemplateAreas: `"header header header"
     "sidebar resume resume" `,
    gridGap: theme.spacing(4),
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
    <PersonalDetailsProvider>
      <Paper className={classes.root}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Fab
          color="secondary"
          className={classes.fab}
          onClick={() => setSettingsOpen((s) => !s)}
        >
          <EditIcon />
        </Fab>
        <Settings open={settingsOpen} setOpen={setSettingsOpen} />
        <Resume />
      </Paper>
    </PersonalDetailsProvider>
  )
}

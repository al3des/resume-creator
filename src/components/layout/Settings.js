import { useState } from "react"

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Drawer,
  makeStyles,
  Typography,
} from "@material-ui/core"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import PersonalDetails from "./settings/personal-details"
import CustomFields from "./settings/custom-fields"

import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import LanguageSettings from "./settings/languages"
import ProfileSettings from "./settings/profile"
import WorkHistorySettings from "./settings/work-history"
import EducationSettings from "./settings/education"
import SkillsSettings from "./settings/skills"

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
  let [expanded, setExpanded] = useState(false)
  let classes = useStyles()

  const handleChange = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

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
      <Accordion
        expanded={expanded === "details"}
        onChange={handleChange("details")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="details">
          <Typography variant="subtitle2" component="h2">
            Personal Details:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PersonalDetails />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "introduction"}
        onChange={handleChange("introduction")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="introduction">
          <Typography variant="subtitle2" component="h2">
            Introduction:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ProfileSettings />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "education"}
        onChange={handleChange("education")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="education">
          <Typography variant="subtitle2" component="h2">
            Education:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EducationSettings />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "work"} onChange={handleChange("work")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="work">
          <Typography variant="subtitle2" component="h2">
            Work History:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <WorkHistorySettings />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "custom-fields"}
        onChange={handleChange("custom-fields")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="custom-fields">
          <Typography variant="subtitle2" component="h2">
            Add Fields to the sidebar
          </Typography>
          <Typography>
            (place of birth, date of bith, driving license, etc..)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomFields />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "languages"}
        onChange={handleChange("languages")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="languages">
          <Typography variant="subtitle2" component="h2">
            Languages:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <LanguageSettings />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "skills"}
        onChange={handleChange("skills")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="skills">
          <Typography variant="subtitle2" component="h2">
            Skills:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SkillsSettings />
        </AccordionDetails>
      </Accordion>
    </Drawer>
  )
}

import { makeStyles } from "@material-ui/core"

import { useContext } from "react"
import { PersonalDetailsContext } from "../../context/PersonalDetails"
import Section from "./resume/section"
import Skills from "./resume/skills"
import HistoryItems from "./resume/history-items"

let useStyles = makeStyles((theme) => ({
  root: {
    gridArea: "resume",
    // maxWidth: "70%",
  },
  section: {},
}))

export default function Resume() {
  let { personalDetails } = useContext(PersonalDetailsContext)
  let { skills, profile, education, workHistory } = personalDetails
  let classes = useStyles()

  return (
    <div className={classes.root}>
      <Section name="Profile" icon="person">
        {<HistoryItems items={profile} />}
      </Section>
      <Section name="Skills" icon="code">
        {<Skills items={skills} />}
      </Section>

      <Section name="Work History" icon="work">
        {<HistoryItems items={workHistory} />}
      </Section>
      <Section name="Education" icon="school">
        {<HistoryItems items={education} />}
      </Section>
      <pre></pre>
    </div>
  )
}

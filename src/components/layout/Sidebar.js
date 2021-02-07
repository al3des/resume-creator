import { useContext } from "react"

import { Divider, makeStyles } from "@material-ui/core"
import CustomField from "../sidebar/custom-field"
import Languages from "../sidebar/languages"
import PersonalDetails from "../sidebar/personal-details"

import { PersonalDetailsContext } from "../../context/PersonalDetails"
import { CustomFieldsContext } from "../../context/CustomFields"

let useStyles = makeStyles((theme) => ({
  root: {
    gridArea: "sidebar",
    maxWidth: "80%",
    margin: "0 auto",
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
  },
}))

let state = {
  languages: [
    { name: "spanish", level: 100 },
    { name: "english", level: 90 },
    { name: "french", level: 50 },
    { name: "portuguese", level: 30 },
    { name: "german", level: 20 },
  ],
  customFields: [
    {
      name: "Date / Place of birth",
      text: ["23.03.1984", "Buenos Aires, Argentina"],
    },
    {
      name: "Nationality",
      text: ["Italian"],
    },
    {
      name: "Driving License",
      text: ["A.2.1 / B.2"],
    },
  ],
}

export default function Sidebar() {
  let { personalDetails } = useContext(PersonalDetailsContext)
  let { customFields, languages } = personalDetails
  let classes = useStyles()
  return (
    <div className={classes.root}>
      <PersonalDetails personalDetails={personalDetails} />
      <Divider className={classes.divider} />
      {customFields &&
        customFields.map((field) => <CustomField customField={field} />)}
      <Divider className={classes.divider} />
      <Languages languages={languages} />
    </div>
  )
}

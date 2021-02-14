import { useContext } from "react"

import Header from "./Header"

import { Divider, makeStyles } from "@material-ui/core"
import CustomField from "../sidebar/custom-field"
import Languages from "../sidebar/languages"
import PersonalDetails from "../sidebar/personal-details"

import { PersonalDetailsContext } from "../../context/PersonalDetails"

let useStyles = makeStyles((theme) => ({
  root: {
    gridArea: "sidebar",
    margin: "0 auto",
  },
  divider: {
    backgroundColor: theme.palette.text.disabled,
    border: "none",
    borderBottom: `2px solid ${theme.palette.text.disabled}`,
    margin: "3em auto",
  },
}))

export default function Sidebar() {
  let { personalDetails } = useContext(PersonalDetailsContext)

  let { customFields, languages } = personalDetails
  let classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <PersonalDetails personalDetails={personalDetails} />
      <Divider className={classes.divider} />
      {customFields &&
        customFields.map((field, i) => (
          <CustomField key={i} customField={field} />
        ))}
      <Divider className={classes.divider} />
      <Languages languages={languages} />
    </div>
  )
}

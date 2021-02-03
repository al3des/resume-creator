import { Divider, makeStyles } from "@material-ui/core";
import CustomField from "../sidebar/custom-field";
import Languages from "../sidebar/languages";
import PersonalDetails from "../sidebar/personal-details";

let useStyles = makeStyles({
  root: {
    gridArea: "sidebar"
  }
});

let state = {
  personalDetails: {
    address: {
      street: "Lettealle 36",
      city: "Berlin",
      zip: "13409",
      country: "Deutschland"
    },
    phone: "+49 1573 165 8084",
    email: "alejandrodesalvo@gmail.com"
  },
  languages: [
    { name: "spanish", level: 100 },
    { name: "english", level: 90 },
    { name: "french", level: 50 },
    { name: "portuguese", level: 30 },
    { name: "german", level: 20 }
  ],
  customFields: [
    {
      name: "Date / Place of birth",
      text: ["23.03.1984", "Buenos Aires, Argentina"]
    },
    {
      name: "Nationality",
      text: ["Italian"]
    },
    {
      name: "Driving License",
      text: ["A.2.1 / B.2"]
    }
  ]
};

export default function Sidebar() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <PersonalDetails personalDetails={state.personalDetails} />
      <Divider />
      {state.customFields.map((cf, i) => (
        <CustomField customField={cf} key={i} />
      ))}
      <Divider />
      <Languages languages={state.languages} />
    </div>
  );
}

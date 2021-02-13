import { makeStyles } from "@material-ui/core"

let useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  span: {
    display: "block",
  },
})

export default function PersonalDetails({ personalDetails }) {
  let { details } = personalDetails
  let classes = useStyles()
  return (
    <div className={classes.root}>
      {details &&
        details.map(({ street, city, zip, country, phone, email }) => (
          <>
            <h2>Details</h2>
            <p>
              <span className={classes.span}>
                {street}, {city}, {zip}, {country}
              </span>
              <span className={classes.span}>{phone}</span>
              <span className={classes.span}>{email}</span>
            </p>
          </>
        ))}
    </div>
  )
}

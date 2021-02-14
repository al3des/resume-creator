import { makeStyles, Typography } from "@material-ui/core"

let useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    marginBottom: "1em",
  },
  span: {
    fontWeight: "700",
  },
})

export default function PersonalDetails({ personalDetails: { details } }) {
  let classes = useStyles()
  return (
    <div className={classes.root}>
      {details &&
        details.map(({ street, city, zip, country, phone, email }) => (
          <>
            <Typography className={classes.title} variant="subtitle1">
              Details
            </Typography>
            <Typography>
              <Typography className={classes.span}>
                {street}, {city}, {zip}, {country}
              </Typography>
              <Typography className={classes.span}>{phone}</Typography>
              <Typography className={classes.span}>{email}</Typography>
            </Typography>
          </>
        ))}
    </div>
  )
}

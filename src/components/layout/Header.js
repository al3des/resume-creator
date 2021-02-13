import { useContext } from "react"
import { makeStyles, Typography } from "@material-ui/core"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import { PersonalDetailsContext } from "../../context/PersonalDetails"

let useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gridArea: "header",
  },
  title: {
    margin: 0,
    textTransform: "capitalize",
    fontSize: "1.2em",
    fontWeight: "700",
  },
  img: {
    maxWidth: "100px",
    display: "block",
    borderRadius: "50%",
  },
  p: {
    display: "flex",
    alignItems: "center",
    margin: 0,
  },
})

export default function Header() {
  let { personalDetails } = useContext(PersonalDetailsContext)
  let { details } = personalDetails
  let classes = useStyles()

  return (
    <div className={classes.root}>
      {details &&
        details.map(({ name, position, street, city, phone }) => (
          <>
            <img
              className={classes.img}
              src="https://avatars.dicebear.com/api/male/:seed.svg"
              alt=""
            />
            <Typography variant="h6" component="h1" className={classes.title}>
              {name}
            </Typography>
            <p className={classes.p}>
              {position} <LocationOnIcon /> {city}
            </p>
          </>
        ))}
    </div>
  )
}

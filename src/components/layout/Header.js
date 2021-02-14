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
    marginBottom: "3em",
  },
  title: {
    textTransform: "uppercase",
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
        details.map(({ picture, name, position, city }) => (
          <>
            <img className={classes.img} src={picture} alt="" />
            <Typography variant="h1" className={classes.title}>
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

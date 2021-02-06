import { useContext } from "react"
import { makeStyles } from "@material-ui/core"
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
    textTransform: "uppercase",
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
  let { name, position, address, phone } = personalDetails
  let classes = useStyles()

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src="https://avatars.dicebear.com/api/male/:seed.svg"
        alt=""
      />
      <h1 className={classes.title}>{name}</h1>
      <p className={classes.p}>
        {position} <LocationOnIcon /> {address.street}, {address.city} | {phone}
      </p>
    </div>
  )
}

import { Divider, Icon, makeStyles, Typography } from "@material-ui/core"

let useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: `${theme.palette.primary.main}`,
    width: "2px",
    margin: "0 auto",
    border: "none",
    borderLeft: `2px solid ${theme.palette.primary.main}`,
  },
  section: {
    display: "grid",
    gridTemplateColumns: "2fr 10fr",
    gridTemplateRows: "1fr auto",
    gridTemplateAreas: `'icon title'
                      'divider items'
                      `,
    gridGap: ".5em",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  sectionIcon: {
    gridArea: "icon",
    textAlign: "center",
  },
  sectionTitle: {
    gridArea: "title",
  },

  content: {
    gridArea: "items",
  },
}))

export default function Section({ children, name, icon }) {
  let classes = useStyles()

  return (
    <>
      <div key={name} className={classes.section}>
        <Typography
          // variant="subtitle1"
          // component="h2"
          className={classes.sectionIcon}
        >
          <Icon>{icon}</Icon>
        </Typography>
        <Typography
          variant="subtitle1"
          component="h2"
          className={classes.sectionTitle}
        >
          {name}
        </Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          className={classes.divider}
          component="div"
        />
        <div className={classes.content}>{children}</div>
      </div>
    </>
  )
}

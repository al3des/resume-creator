import { makeStyles, Typography } from "@material-ui/core"

let useStyles = makeStyles({
  item: {
    margin: "1.5em auto",
    "&:first-child": {
      marginTop: 0,
    },
    "&:last-child": {
      marginBottom: 0,
    },
  },
  text: {
    whiteSpace: "pre-line",
    fontSize: ".8rem",
  },
  title: {
    fontSize: ".9rem",
    fontWeight: "700",
  },
  date: {
    marginBottom: ".5em",
  },
})

export default function HistoryItems({ items }) {
  function formatDate(dateStr) {
    const date = new Date(dateStr)
    return date.toLocaleString("default", { month: "short", year: "numeric" })
  }

  let classes = useStyles()
  return (
    <>
      {items &&
        items.map((item, i) => (
          <div key={i} className={classes.item}>
            {item.title && item.location && (
              <Typography className={classes.title}>
                {item.title} @ {item.institution}, {item.location}
              </Typography>
            )}
            {item.from && item.to && (
              <Typography
                variant="caption"
                component="p"
                className={classes.date}
              >
                {formatDate(item.from)} - {formatDate(item.to)}
              </Typography>
            )}

            <Typography className={classes.text}>{item.text}</Typography>
          </div>
        ))}
    </>
  )
}

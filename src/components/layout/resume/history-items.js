import { makeStyles, Typography } from "@material-ui/core"

let useStyles = makeStyles({
  text: {
    whiteSpace: "pre",
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
              <Typography>
                {item.title} @ {item.institution}, {item.location}
              </Typography>
            )}
            {item.from && item.to && (
              <Typography>
                <span>
                  {formatDate(item.from)} - {formatDate(item.to)}
                </span>
              </Typography>
            )}

            <p className={classes.text}>{item.text}</p>
          </div>
        ))}
    </>
  )
}

import { createMuiTheme } from "@material-ui/core"
import grey from "@material-ui/core/colors/grey"

export const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        subtitle1: "h2",
      },
    },
  },
  typography: {
    h1: {
      fontSize: "1.3rem",
    },
    subtitle1: {
      textTransform: "uppercase",
      fontSize: "1.2rem",
    },
    subtitle2: {
      color: grey[700],
      textTransform: "uppercase",
      fontSize: "1.2rem",
    },
  },
})

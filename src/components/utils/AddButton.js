import { Icon, IconButton } from "@material-ui/core"

export default function AddButton(props) {
  return (
    <IconButton onClick={props.onClick}>
      <Icon>add</Icon>
    </IconButton>
  )
}

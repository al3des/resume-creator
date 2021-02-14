import { Icon, IconButton } from "@material-ui/core"

export default function DeleteButton(props) {
  return (
    <IconButton
      onClick={props.onClick}
      disabled={props.disabled}
      color="secondary"
    >
      <Icon>delete</Icon>
    </IconButton>
  )
}

import { TextField } from "@material-ui/core"

export default function ControlledForm({ children, ...restProps }) {
  console.log(children)
  return <form>{children}</form>
}

ControlledForm.Input = ({ children, ...restProps }) => {
  return (
    <TextField
      required
      label="Field Title"
      name="fieldTitle"
      value={field.fieldTitle}
      onChange={(e) => handleInputChange(i, e)}
    />
  )
}

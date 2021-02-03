import { Drawer } from "@material-ui/core";

export default function Settings({ open }) {
  return (
    <Drawer anchor="left" open={open}>
      Settings
    </Drawer>
  );
}

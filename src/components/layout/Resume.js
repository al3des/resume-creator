import { Divider, makeStyles } from "@material-ui/core";

import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";

let useStyles = makeStyles((theme) => ({
  root: {
    gridArea: "resume"
  },
  divider: {
    backgroundColor: `${theme.palette.primary.main}`,
    width: "2px",
    margin: "0 auto"
  },
  section: {
    display: "grid",
    gridTemplateColumns: "1fr 11fr",
    gridTemplateRows: "1fr auto",
    gridTemplateAreas: `'icon title'
                        'divider items'
                        `
  },
  sectionIcon: {
    gridArea: "icon",
    textAlign: "center"
  },
  sectionTitle: {
    gridArea: "title"
  },

  items: {
    gridArea: "items"
  }
}));

let state = {
  sections: [
    {
      name: "Profile",
      icon: <PersonIcon />,
      items: [{ text: "Some text" }]
    },
    {
      name: "Work History",
      icon: <WorkIcon />,
      items: [
        {
          title: "Manager at Bonkarma",
          location: "Buenos Aires",
          from: "",
          to: "",
          text: "Some text"
        },
        {
          title: "Manager at Bonkarma",
          location: "Buenos Aires",
          from: "",
          to: "",
          text: "Some text"
        }
      ]
    },
    {
      name: "Education",
      icon: <SchoolIcon />,
      items: [
        {
          title: "Manager at Bonkarma",
          location: "Buenos Aires",
          from: "",
          to: "",
          text: "Some text"
        }
      ]
    }
  ]
};

export default function Resume() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      {state.sections.map((section) => (
        <div key={section.name} className={classes.section}>
          <h2 className={classes.sectionIcon}>{section.icon}</h2>
          <h2 className={classes.sectionTitle}>{section.name}</h2>
          <Divider
            orientation="vertical"
            variant="middle"
            className={classes.divider}
          />
          <div className={classes.items}>
            {section.items.map((item, i) => (
              <div key={i} className={classes.item}>
                {item.title && item.location && (
                  <h2>
                    {item.title}, {item.location}
                  </h2>
                )}
                {item.from && item.to && (
                  <p>
                    <span>
                      {item.from} - {item.to}
                    </span>
                  </p>
                )}

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

import { useReducer } from "react"

export default function usePersonalDetails() {
  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_DETAILS":
          return {
            ...state,
            name: action?.name || state.name,
            position: action?.position || state.position,
            address: {
              street: action?.street || state.address.street,
              zip: action?.zip || state.address.zip,
              city: action?.city || state.address.city,
              country: action?.country || state.address.country,
            },
            phone: action?.phone || state.phone,
            email: action?.email || state.email,
          }
        case "SET_PROFILE":
          return {
            ...state,
            sections: state.sections.map((section) => {
              if (section.name === "Profile") {
                return {
                  ...section,
                  items: [{ text: action.profile }],
                }
              }
              return section
            }),
          }

        case "SET_CUSTOM_FIELDS":
          return {
            ...state,
            customFields: action.inputFields,
          }
        case "SET_LANGUAGES":
          return {
            ...state,
            languages: action.inputFields,
          }

        case "SET_WORK_HISTORY":
          return {
            ...state,
            sections: state.sections.map((section) => {
              if (section.name === "Work History") {
                return {
                  ...section,
                  items: action.inputFields,
                }
              }
              return section
            }),
          }

        case "SET_EDUCATION":
          return {
            ...state,
            sections: state.sections.map((section) => {
              if (section.name === "Education") {
                return {
                  ...section,
                  items: action.inputFields,
                }
              }
              return section
            }),
          }

        case "ADD_BLANK_FIELD":
          return {
            ...state,
            customFields: [...state.customFields, action.blankTemplate],
          }

        default:
          return state
      }
    },
    {
      name: "",
      position: "",
      address: { street: "", city: "", country: "" },
      phone: "",
      email: "",
      customFields: [{ fieldTitle: "", fieldValue: "" }],
      sections: [
        { name: "Profile", icon: "person", items: [{ text: "" }] },
        {
          name: "Work History",
          icon: "work",
          items: [
            {
              title: "",
              location: "",
              institution: "",
              text: "",
              from: "",
              to: "",
            },
          ],
        },
        {
          name: "Education",
          icon: "school",
          items: [
            {
              title: "",
              location: "",
              institution: "",
              text: "",
              from: "",
              to: "",
            },
          ],
        },
      ],
    }
  )

  return [state, dispatch]
}

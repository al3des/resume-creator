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
    }
  )

  return [state, dispatch]
}

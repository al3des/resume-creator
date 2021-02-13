import { useReducer } from "react"

export default function usePersonalDetails() {
  let json = localStorage.getItem("personalDetails")
  let savedValues = JSON.parse(json)
  let [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_DETAILS": {
        let json = JSON.stringify({ ...state, details: action.inputFields })
        localStorage.setItem("personalDetails", json)
        return {
          ...state,
          details: action.inputFields,
        }
      }
      case "SET_PROFILE":
        return {
          ...state,
          profile: action.inputFields,
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
      case "SET_SKILLS":
        return {
          ...state,
          skills: action.inputFields,
        }

      case "SET_WORK_HISTORY":
        return {
          ...state,
          workHistory: action.inputFields,
        }

      case "SET_EDUCATION":
        return {
          ...state,
          education: action.inputFields,
        }

      case "ADD_BLANK_FIELD":
        return {
          ...state,
          customFields: [...state.customFields, action.blankTemplate],
        }

      default:
        return state
    }
  }, savedValues || {})

  return [state, dispatch]
}

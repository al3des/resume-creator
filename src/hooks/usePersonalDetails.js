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
      case "SET_PROFILE": {
        let json = JSON.stringify({ ...state, profile: action.inputFields })
        localStorage.setItem("personalDetails", json) 
        return {
          ...state,
          profile: action.inputFields,
        }
      }

      case "SET_CUSTOM_FIELDS": {
        let json = JSON.stringify({ ...state, customFields: action.inputFields })
        localStorage.setItem("personalDetails", json) 
        return {
          ...state,
          customFields: action.inputFields,
        }
      }
      case "SET_LANGUAGES": {
        let json = JSON.stringify({ ...state, languages: action.inputFields })
        localStorage.setItem("personalDetails", json) 
        return {
          ...state,
          languages: action.inputFields,
        }
      }
      case "SET_SKILLS": {
        let json = JSON.stringify({ ...state, skills: action.inputFields })
        localStorage.setItem("personalDetails", json) 
        return {
          ...state,
          skills: action.inputFields,
        }
      }

      case "SET_WORK_HISTORY": { 
        let json = JSON.stringify({ ...state, workHistory: action.inputFields })
        localStorage.setItem("personalDetails", json)
        return {
          ...state,
          workHistory: action.inputFields,
        }
      }
        
      case "SET_EDUCATION": {
        let json = JSON.stringify({ ...state, education: action.inputFields })
        localStorage.setItem("personalDetails", json) 
        return {
          ...state,
          education: action.inputFields,
        }
      }
        
      default:
        return state
    }
  }, savedValues || {})

  return [state, dispatch]
}

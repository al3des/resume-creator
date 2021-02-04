import React from "react"

import usePersonalDetails from "../hooks/usePersonalDetails"

export const PersonalDetailsContext = React.createContext({})

export default function PersonalDetailsProvider({ children }) {
  let [personalDetails, dispatch] = usePersonalDetails()

  return (
    <PersonalDetailsContext.Provider value={{ personalDetails, dispatch }}>
      {children}
    </PersonalDetailsContext.Provider>
  )
}

import React from "react"

import useCustomFields from "../hooks/useCustomFields"

export const CustomFieldsContext = React.createContext()

export default function CustomFieldsProvider({ children }) {
  // let [state, dispatch] = useCustomFields({ fieldTitle: "", fieldValue: "" })
  return (
    <CustomFieldsContext.Provider
    // value={{ state, dispatch }}
    >
      {children}
    </CustomFieldsContext.Provider>
  )
}

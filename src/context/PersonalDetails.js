import React from "react";

import usePersonalDetails from "../hooks/usePersonalDetails";

export const PersonalDetails = React.createContext({});

export default function PersonalDetailsProvider({ children }) {
  let [state, dispatch] = usePersonalDetails();

  return (
    <PersonalDetails.Provider value={{ state, dispatch }}>
      {children}
    </PersonalDetails.Provider>
  );
}

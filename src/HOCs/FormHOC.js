import { useContext, useEffect, useState } from "react"
import { PersonalDetailsContext } from "../context/PersonalDetails"

import { generate } from "shortid"

export function withFormHOC(Component, { type, addFieldsSchema, fieldSetKey }) {
  return (props) => {
    let { personalDetails, dispatch } = useContext(PersonalDetailsContext)

    let initialValues = personalDetails[fieldSetKey] || [
      {
        id: generate(),
        ...addFieldsSchema,
      },
    ]
    let [inputFields, setInputFields] = useState(initialValues)
    let [saved, setSaved] = useState(true)

    function handleInputChange(id, e) {
      const value = e.target.value
      setInputFields((currInput) =>
        currInput.map((x) =>
          x.id === id ? { ...x, [e.target.name]: value } : x
        )
      )
      setSaved(false)
    }

    function handleSubmit(e) {
      e.preventDefault()
      setSaved((s) => !s)

      dispatch({ type, inputFields })
    }

    function handleAddField() {
      setInputFields([...inputFields, { id: generate(), ...addFieldsSchema }])
    }

    function handleRemoveField(i) {
      setInputFields((fields) => fields.filter((x) => x.id !== i))

      setSaved(false)
    }
    return (
      <Component
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handleAddField={handleAddField}
        handleRemoveField={handleRemoveField}
        saved={saved}
        inputFields={inputFields}
        personalDetails={personalDetails}
        {...props}
      />
    )
  }
}

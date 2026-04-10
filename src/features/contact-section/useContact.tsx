import { useForm } from "react-hook-form"
import type { InputsForm } from "./types"

import type { SubmitHandler } from "react-hook-form"

export const useContact = () => {
  const formControl = useForm<InputsForm>({
    defaultValues: { email: "", message: "", name: "" },
  })

  const onSubmit: SubmitHandler<InputsForm> = (data) => {
    console.log("Submit data", data)
  }

  return { formControl, onSubmit }
}

import type { SubmitHandler, UseFormReturn } from "react-hook-form"

export type InputsForm = {
  email: string
  message: string
  name: string
}

export type ContactFormProps = {
  controls: UseFormReturn<InputsForm, unknown, InputsForm>
  isPending: boolean
  onSubmit: SubmitHandler<InputsForm>
}

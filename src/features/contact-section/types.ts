import type { UseFormReturn } from "react-hook-form"

export type InputsForm = {
  email: string
  message: string
  name: string
}

export type ContactFormProps = {
  controls: UseFormReturn<InputsForm, unknown, InputsForm>
  isPending: boolean
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
}

export type ContactSectionProps = {
  ref: React.Ref<HTMLElement>
  visibleSections: Set<string>
}

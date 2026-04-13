import { showErrorToast, showSuccessToast } from "@lib"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { useResetForm } from "@hooks"
import type { InputsForm } from "../types"

import type { SubmitHandler } from "react-hook-form"
import { sendContactMessage, type ResponseSuccess } from "@actions"

export const useContact = () => {
  const formControl = useForm<InputsForm>({
    defaultValues: { email: "", message: "", name: "" },
  })

  const mutation = useMutation<ResponseSuccess, Error, InputsForm>({
    mutationFn: async (body) => await sendContactMessage(body),
    onSuccess: () => showSuccessToast("Message sent successfully"),
    onError: () => showErrorToast("Message failed to send. Please try later"),
  })

  const onSubmit: SubmitHandler<InputsForm> = (data) => mutation.mutate(data)

  useResetForm({
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isSubmitSuccess: formControl.formState.isSubmitSuccessful,
    onSuccess: () => formControl.reset({ email: "", message: "", name: "" }),
  })

  return {
    formControl,
    isPending: mutation.isPending,
    onSubmit: formControl.handleSubmit(onSubmit),
  }
}

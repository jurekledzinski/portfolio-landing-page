import { Controller } from "react-hook-form"
import {
  Button,
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  Input,
  Textarea,
} from "@/components"
import type { ContactFormProps } from "./types"

export const ContactForm = ({ controls, onSubmit }: ContactFormProps) => {
  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={controls.handleSubmit(onSubmit)}
      noValidate
    >
      <FieldGroup>
        <Controller
          name="name"
          control={controls.control}
          rules={{ required: { message: "Name is required", value: true } }}
          render={({ field, fieldState }) => {
            console.log("fieldState", fieldState)
            return (
              <Field className="gap-1" data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  {...field}
                  className="rounded-xs"
                  id="name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Name"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError className="text-xs" errors={[fieldState.error]} />
                )}
              </Field>
            )
          }}
        />
      </FieldGroup>

      <FieldGroup>
        <Controller
          name="email"
          control={controls.control}
          rules={{
            required: { message: "Email is required", value: true },
            validate: {
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                "Email address must be a valid address",
            },
          }}
          render={({ field, fieldState }) => (
            <Field className="gap-1" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...field}
                className="rounded-xs"
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="Email"
                autoComplete="off"
              />
              {fieldState.invalid && (
                <FieldError className="text-xs" errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
      </FieldGroup>

      <FieldGroup>
        <Controller
          name="message"
          control={controls.control}
          rules={{
            required: { message: "Message is required", value: true },
            minLength: {
              message: "Message require at least 30 characters",
              value: 30,
            },
          }}
          render={({ field, fieldState }) => (
            <Field className="gap-1" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                {...field}
                className="h-40 resize-none rounded-xs"
                id="message"
                aria-invalid={fieldState.invalid}
                placeholder="Message"
                autoComplete="off"
              />
              {fieldState.invalid && (
                <FieldError className="text-xs" errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
      </FieldGroup>

      <Button
        className="mt-4 cursor-pointer rounded-xs py-5 text-white hover:bg-primary/90"
        type="submit"
      >
        Send Message
      </Button>
    </form>
  )
}

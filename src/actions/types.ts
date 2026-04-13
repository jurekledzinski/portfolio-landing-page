import { z } from "zod"

export type ResponseSuccess = {
  statusCode: number
  body: { message: string }
}

export const ContactEmailSchema = z.object({
  name: z.string({ error: "Name is required" }),
  email: z.string({ error: "Email is required" }),
  message: z.string({ error: "Message is required" }),
})

export type ContactEmail = z.infer<typeof ContactEmailSchema>

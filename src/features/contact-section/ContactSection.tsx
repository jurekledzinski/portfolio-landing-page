import { ContactForm } from "./ContactForm"
import { GetInTouch } from "./GetInTouch"
import { memo } from "react"
import { useContact } from "./hooks"
import type { ContactSectionProps } from "./types"

const ContactComponent = ({ ref }: ContactSectionProps) => {
  const form = useContact()

  return (
    <section className="group px-4 py-10" data-id="contact" ref={ref}>
      <div className="mx-auto max-w-300">
        <h2 className="text-2xl font-bold sm:text-4xl">Contact</h2>
        <p className="mt-2 text-sm text-secondary sm:text-base">
          Drop me a message and I'll get back to you.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <div className="w-full -translate-y-2 opacity-0 group-[.visible]:translate-y-0 group-[.visible]:opacity-100 group-[.visible]:transition-[transform,opacity] group-[.visible]:duration-500 group-[.visible]:ease-in sm:w-[50%]">
            <GetInTouch />
          </div>

          <div className="mt-10 w-full -translate-y-2 opacity-0 group-[.visible]:translate-y-0 group-[.visible]:opacity-100 group-[.visible]:transition-[transform,opacity] group-[.visible]:delay-300 group-[.visible]:duration-500 group-[.visible]:ease-in sm:mt-auto sm:w-[50%]">
            <ContactForm
              isPending={form.isPending}
              controls={form.formControl}
              onSubmit={form.onSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export const ContactSection = memo(ContactComponent)

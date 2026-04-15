import { ContactForm } from "./ContactForm"
import { GetInTouch } from "./GetInTouch"
import { memo } from "react"
import { SectionHeader } from "@components"
import { useContact } from "./hooks"
import type { ContactSectionProps } from "./types"

const ContactComponent = ({ ref }: ContactSectionProps) => {
  const form = useContact()

  return (
    <section
      className="group/section px-4 py-10 lg:py-20"
      data-id="contact"
      ref={ref}
    >
      <div className="mx-auto max-w-300">
        <SectionHeader
          subtitle="Drop me a message and I'll get back to you."
          title="Contact"
        />

        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <div className="w-full -translate-y-2 opacity-0 group-[.visible]/section:translate-y-0 group-[.visible]/section:opacity-100 group-[.visible]/section:transition-[transform,opacity] group-[.visible]/section:duration-400 group-[.visible]/section:ease-in md:w-[50%]">
            <GetInTouch />
          </div>

          <div className="mt-10 w-full -translate-y-2 opacity-0 group-[.visible]/section:translate-y-0 group-[.visible]/section:opacity-100 group-[.visible]/section:transition-[transform,opacity] group-[.visible]/section:delay-200 group-[.visible]/section:duration-400 group-[.visible]/section:ease-in md:mt-auto md:w-[50%]">
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

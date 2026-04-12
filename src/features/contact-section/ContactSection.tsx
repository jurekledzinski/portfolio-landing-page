import { ContactForm } from "./ContactForm"
import { GetInTouch } from "./GetInTouch"
import { useContact } from "./useContact"
import type { ContactSectionProps } from "./types"

export const ContactSection = ({ ref }: ContactSectionProps) => {
  const form = useContact()

  return (
    <section className="px-4 py-10" id="contact" ref={ref}>
      <div className="mx-auto max-w-300">
        <h2 className="text-2xl font-bold sm:text-4xl">Contact</h2>
        <p className="mt-2 text-sm text-secondary sm:text-base">
          Drop me a message and I'll get back to you.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <div className="w-full sm:w-[50%]">
            <GetInTouch />
          </div>

          <div className="mt-10 w-full sm:mt-auto sm:w-[50%]">
            <ContactForm
              isPending={false}
              controls={form.formControl}
              onSubmit={form.onSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import clsx from "clsx"
import { ContactForm } from "./ContactForm"
import { GetInTouch } from "./GetInTouch"
import { useContact } from "./hooks"
import type { ContactSectionProps } from "./types"

export const ContactSection = ({
  ref,
  visibleSections,
}: ContactSectionProps) => {
  const form = useContact()

  return (
    <section className="px-4 py-10" id="contact" ref={ref}>
      <div className="mx-auto max-w-300">
        <h2 className="text-2xl font-bold sm:text-4xl">Contact</h2>
        <p className="mt-2 text-sm text-secondary sm:text-base">
          Drop me a message and I'll get back to you.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <div
            className={clsx({
              "w-full -translate-y-2 opacity-0 sm:w-[50%]": true,
              "translate-y-0 opacity-100 transition-[transform,opacity] duration-500 ease-in":
                visibleSections.has("contact"),
            })}
          >
            <GetInTouch />
          </div>

          <div
            className={clsx({
              "mt-10 w-full -translate-y-2 opacity-0 sm:mt-auto sm:w-[50%]": true,
              "translate-y-0 opacity-100 transition-[transform,opacity] delay-300 duration-500 ease-in":
                visibleSections.has("contact"),
            })}
          >
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

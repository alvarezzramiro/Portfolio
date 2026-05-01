import Section from "../components/Section";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function Contact() {
  return (
    <Section id="contact" centered>
      <div className="flex flex-col gap-12 w-full">

        {/* Header */}
        <div className="flex flex-col gap-3 items-center text-center">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Get In <span className="text-[#D8B89D]">Touch</span>
          </h2>
          <p className="text-[#5C5F4F]">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <ContactForm />
          <ContactInfo />
        </div>

      </div>
    </Section>
  );
}
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";

const Contact = () => {
  return (
    <section
      className="px-0 lg:px-[200px] mt-10 overflow-hidden"
      aria-labelledby="contact-section-heading"
    >
      <h1 id="contact-section-heading" className="sr-only">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 py-4 gap-5 overflow-hidden ">
        <ContactInformation />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;

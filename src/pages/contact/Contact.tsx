import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT_INFO, META } from "../../constants";
import Seo from "../../components/Seo";

type AlertVariant = "danger" | "success" | "";

type ContactFormState = {
  alertMessage: string;
  email: string;
  loading: boolean;
  message: string;
  name: string;
  show: boolean;
  variant: AlertVariant;
};

const initialFormState: ContactFormState = {
  alertMessage: "",
  email: "",
  loading: false,
  message: "",
  name: "",
  show: false,
  variant: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData((current) => ({ ...current, loading: true, show: false }));

    try {
      await emailjs.send(
        CONTACT_INFO.serviceId,
        CONTACT_INFO.templateId,
        {
          email: formData.email,
          message: formData.message,
          name: formData.name,
        },
        CONTACT_INFO.publicKey,
      );

      setFormData({
        ...initialFormState,
        alertMessage: "Success! You should receive a confirmation email soon.",
        show: true,
        variant: "success",
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";

      setFormData((current) => ({
        ...current,
        alertMessage: `Failed to send! ${message}`,
        loading: false,
        show: true,
        variant: "danger",
      }));
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  return (
    <section className="content-page">
      <Seo title={`Contact Me | ${META.title}`} />

      <header className="page-heading">
        <h1>Contact Me</h1>
      </header>

      {formData.show && (
        <div className={`form-alert form-alert-${formData.variant}`} role="status">
          <p>{formData.alertMessage}</p>
          <button
            aria-label="Dismiss message"
            onClick={() => setFormData((current) => ({ ...current, show: false }))}
            type="button"
          >
            &times;
          </button>
        </div>
      )}

      <div className="contact-layout">
        <section className="contact-intro">
          <h2>Let's connect...</h2>
          <address>
            <strong>My Email:</strong>{" "}
            <a href={`mailto:${CONTACT_INFO.email}`}>
              aram(dot)zaprosyan(at)gmail(dot)com
            </a>
          </address>
          <p>{CONTACT_INFO.description}</p>
        </section>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              <span>Name</span>
              <input
                autoComplete="name"
                name="name"
                onChange={handleChange}
                required
                type="text"
                value={formData.name}
              />
            </label>

            <label>
              <span>Email</span>
              <input
                autoComplete="email"
                name="email"
                onChange={handleChange}
                required
                type="email"
                value={formData.email}
              />
            </label>
          </div>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              onChange={handleChange}
              required
              rows={6}
              value={formData.message}
            />
          </label>

          <button
            className="button button-secondary"
            disabled={formData.loading}
            type="submit"
          >
            {formData.loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div className={formData.loading ? "loading-bar" : "d-none"} />
    </section>
  );
};

export default Contact;

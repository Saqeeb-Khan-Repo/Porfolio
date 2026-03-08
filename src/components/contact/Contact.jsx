// Contact.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 text-amber-50 flex items-center justify-center px-4 py-10"
    >
      <div className="w-full max-w-3xl bg-slate-800/70 border border-slate-700 rounded-2xl shadow-xl p-6 md:p-8">
        <div className="mb-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Get in touch
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-cyan-500 mt-2">
            Contact Me
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-300">
            Have a project, question, or just want to say hi? Drop a message and
            I’ll get back to you.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4 grid grid-cols-1 md:grid-cols-2 md:gap-4"
        >
          <div className="md:col-span-1">
            <label
              className="block mb-1 text-xs font-medium text-slate-300"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-slate-600 bg-slate-900/60 rounded-lg px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </div>

          <div className="md:col-span-1">
            <label
              className="block mb-1 text-xs font-medium text-slate-300"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-slate-600 bg-slate-900/60 rounded-lg px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </div>

          <div className="md:col-span-2">
            <label
              className="block mb-1 text-xs font-medium text-slate-300"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              required
              className="w-full border border-slate-600 bg-slate-900/60 rounded-lg px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </div>

          <div className="md:col-span-2">
            <label
              className="block mb-1 text-xs font-medium text-slate-300"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-slate-600 bg-slate-900/60 rounded-lg px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
            />
          </div>

          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-3 mt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-cyan-500 text-slate-900 font-semibold text-sm hover:bg-cyan-400 transition-colors w-full md:w-auto"
            >
              Send Message
            </button>

            {status && (
              <p className={`text-xs md:text-sm  md:text-right ${status.includes("successfully") ? "text-green-400" : "text-cyan-500"} text-center mt-2 md:mt-0 bg-slate-700 p-2 font-bold `}>
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

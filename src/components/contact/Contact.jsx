
import { CiLocationArrow1 } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center px-4">
      {/* Background gradient blur blob */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-sky-500/10 to-fuchsia-500/20 blur-3xl" />
      </div>

      {/* Wrapper */}
      <div className="w-full max-w-2xl flex flex-col items-center gap-6">
        {/* Heading */}
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
            Get in touch
          </p>
          <h1 className="font-semibold font-serif text-3xl lg:text-5xl text-cyan-50">
            Liked my work?
          </h1>
          <p className="text-sm text-cyan-100/80 max-w-md mx-auto">
            Drop a message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Form card - glassmorphism */}
        <form
          className="w-full bg-slate-900/60 backdrop-blur-xl border border-white/10
                     rounded-2xl p-6 md:p-8 space-y-5 shadow-[0_18px_60px_rgba(15,23,42,0.75)]"
        >
          {/* Name */}
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm text-slate-200">
              Name<span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-xl border border-slate-700/70 bg-slate-950/60
                           pl-8 pr-3 py-2.5 text-sm text-slate-100
                           outline-none transition
                           focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm text-slate-200">
              Email<span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l8.217 4.885a2 2 0 0 0 2.066.003L21 8m-2-3H5a2 2 0 0 0-2 2v10
                       a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
                  />
                </svg>
              </span>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-700/70 bg-slate-950/60
                           pl-9 pr-3 py-2.5 text-sm text-slate-100
                           outline-none transition
                           focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1">
            <label htmlFor="message" className="text-sm text-slate-200">
              Message<span className="text-red-400">*</span>
            </label>
            
            <textarea
              id="message"
              rows={4}
              required
              className="w-full rounded-xl border border-slate-700/70 bg-slate-950/60
                         px-3 py-2.5 text-sm text-slate-100
                         outline-none resize-none transition
                         focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40"
              placeholder="Tell me about your project or idea..."
            />
          </div>

          {/* Footer row */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2
                         rounded-full bg-linear-to-r from-cyan-400 via-sky-400 to-emerald-400
                         px-6 py-2.5 text-sm md:text-sm font-semibold text-slate-950
                         shadow-lg shadow-cyan-500/30
                         hover:shadow-cyan-400/40 hover:brightness-110
                         active:scale-[0.98]
                         transition"
            >
              Send message
              <span className="text-base">
                <CiLocationArrow1/>
              </span>
            </button>

            <p className="text-xs text-slate-400 md:ml-2">
              I usually reply within 24 hours.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

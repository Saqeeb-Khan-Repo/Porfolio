import { FaArrowTrendDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Services = () => {
  const items = [
    {
      id: "01",
      title: "MERN Full Stack Development",
      icon: <FaArrowTrendDown />,
      description:
        "End-to-end MERN stack apps with secure APIs, authentication, and modern UI.",
    },
    {
      id: "02",
      title: "Frontend Development",
      icon: <FaArrowTrendDown />,
      description:
        "Responsive, performant frontends using React, Tailwind CSS, and modern tooling.",
    },
    {
      id: "03",
      title: "UI/UX Design",
      icon: <FaArrowTrendDown />,
      description:
        "Clean, user-centered interfaces with strong focus on usability and accessibility.",
    },
    {
      id: "04",
      title: "Web Development Freelancer",
      icon: <FaArrowTrendDown />,
      description:
        "Freelance projects, landing pages, dashboards, and custom business solutions.",
    },
  ];

  return (
    <section className="w-full bg-slate-950 text-slate-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <p className="text-2xl uppercase tracking-[0.25em] text-cyan-400 lg:text-4xl md:text-3xl  ">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            What I can do for you
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-2xl mx-auto">
            From full‑stack web apps to polished interfaces, I help you ship
            fast, modern, and maintainable products.
          </p>
        </div>

        {/* List */}
        <div className="space-y-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col gap-4 rounded-2xl border border-white/5 bg-slate-900/40 p-6 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900/70"
            >
              {/* Top row: id + icon */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.3em] text-slate-400">
                  {item.id}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10 text-xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                  {item.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold sm:text-2xl">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>

              {/* Optional “learn more” link – change route as needed */}
              <div className="mt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300"
                >
                  Let&apos;s work together
                  <span className="ml-1 text-xs">↗</span>
                </Link>
              </div>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

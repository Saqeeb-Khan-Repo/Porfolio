import { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [activeButton, setActiveButton] = useState(null); // "projects" | "contact" | null

  return (
    <main className="w-full bg-slate-950 text-slate-100 h-full">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-4 py-8 md:flex-row md:px-8 lg:px-16 lg:py-4">
        {/* Left: text */}
        <section className="flex w-full flex-col gap-4 text-center md:w-1/2  md:pr-6 md:text-left">
          <div className="space-y-2">
            <span className="text-sm font-medium uppercase tracking-normal  text-cyan-400 lg:text-2xl typing">
              Frontend Developer
            </span>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl xl:text-6xl">
              Hello I&apos;m
              <br />
              <span className="text-cyan-400"> Saqeeb Khan</span>
            </h1>
          </div>

          <p className="mx-auto max-w-xl text-sm text-slate-300 sm:text-base md:mx-0">
            I build fast, responsive, and modern web experiences using React,
            Node.js, and Tailwind CSS. I love crafting clean UIs and smooth
            animations that feel delightful to use.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Link
             to="/work"
              className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold shadow-lg shadow-cyan-500/30 transition hover:translate-y-0.5 bg-cyan-500 text-slate-950"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              onClick={() => setActiveButton("contact")}
              className={`inline-flex items-center justify-center rounded-full border px-5 py-2 text-sm font-semibold transition hover:border-cyan-400 ${
                activeButton === "contact"
                  ? "border-cyan-400 text-cyan-300"
                  : "border-slate-600 text-slate-100"
              }`}
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* Right: image */}
        <section className="mt-8 flex w-full items-center justify-center md:mt-0 md:w-1/2 md:pl-6">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-cyan-500/20 blur-3xl" />
            <img
              className="relative h-40 w-40 rounded-full border border-cyan-500 object-cover shadow-xl shadow-cyan-500/50 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlie4MsQ9pJSSKY7DoEpxn3uBAq-rT7in1sA&s"
              alt="Khan"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;

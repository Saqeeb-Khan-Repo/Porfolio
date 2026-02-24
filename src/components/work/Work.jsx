import { useState } from "react";
import { FaArrowUpRightFromSquare, FaSquareGithub } from "react-icons/fa6";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Work = () => {
  const details = [
    {
      nums: "01",
      title: "Frontend Project",
      name: "Pomodoro",
      date: "Nov – Dec 2025",
      skill: "React.js,react-icons",
      link: "https://pomodoro-iota-wine.vercel.app/#/",
      github: "https://github.com/Saqeeb-Khan-Repo/Pomodoro",
      video: "/pomodoro.mp4",
    },
    {
      nums: "02",
      title: "Full Stack Project",
      name: "Task Manager",
      date: "Dec 2026",
      skill: "MERN,Authentication",
      link: "https://taskflos.netlify.app/#/",
      github: "https://github.com/Saqeeb-Khan-Repo/Task-manager",
      video: "/taskflow.mp4",
    },
    {
      nums: "03",
      title: "Full Stack Project",
      name: "Dribbble Clone",
      date: "Jan – Feb 2026",
      skill: "MERN, Pexels API , Authentication , jwt , bycrypt",
      link: "https://dribbleclone-mu.vercel.app/#/",
      github: "https://github.com/Saqeeb-Khan-Repo/Dribble",
      video: "/dribble.mp4",
    },
    {
      nums: "04",
      title: "Frontend Project",
      name: "Nykaa Clone",
      date: "Jan – Feb 2026",
      skill: "React.js, Products API",
      link: "https://nykaa-pearl.vercel.app/#",
      github: "https://github.com/Saqeeb-Khan-Repo/NYKAA",
      video: "/nykaa.mp4",
    },
    {
      nums: "05",
      title: "Frontend Project",
      name: "Weather Teller",
      date: "Jan – Feb 2026",
      skill: "React.js, Weather API",
      link: "https://saqeeb-khan-repo.github.io/Weather-React/",
      github: "https://github.com/Saqeeb-Khan-Repo/Weather-React",
      video: "/weather.mp4",
    },
    {
      nums: "06",
      title: "Frontend Project",
      name: "Youtube Clone",
      date: "Jan – Feb 2026",
      skill: "React.js, Rapid API",
      link: "https://youtube-olive-beta.vercel.app/",
      github: "https://github.com/Saqeeb-Khan-Repo/Youtube",
      video: "/yt.mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = details[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? details.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === details.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-slate-950 text-amber-50 py-16 min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
        {/* Left: text / meta */}
        <div className="flex-1 space-y-4">
          <p className="text-sm md:text-2xl uppercase tracking-[0.25em] text-cyan-400 typing">
            My work's
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">{current.name}</h2>

          <div className="flex items-center gap-4 text-sm text-slate-300">
            <span className="text-xs font-semibold tracking-[0.3em] text-slate-500">
              {current.nums}
            </span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-wide">
              {current.title}
            </span>
          </div>

          <div className="space-y-1 text-sm text-slate-400">
            <p>{current.date}</p>
            <p className="text-xs uppercase tracking-wide text-cyan-300">
              {current.skill}
            </p>
          </div>

          {/* Links */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
            <a
              href={current.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 font-medium text-slate-950 shadow shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              <FaArrowUpRightFromSquare />
              <span>Live preview</span>
            </a>
            <a
              href={current.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white"
            >
              <FaSquareGithub className="text-xl" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Slider controls */}
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="text-3xl text-slate-500 transition hover:text-cyan-400"
              aria-label="Previous project"
            >
              <FaArrowCircleLeft />
            </button>
            <button
              onClick={handleNext}
              className="text-3xl text-slate-500 transition hover:text-cyan-400"
              aria-label="Next project"
            >
              <FaArrowCircleRight />
            </button>
            <span className="text-xs text-slate-500">
              {currentIndex + 1} / {details.length}
            </span>
          </div>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60">
          {current.video ? (
            <video
              src={current.video}
              className="h-full w-full object-cover"
              muted
              autoPlay
              loop
              playsInline
              onError={(e) => {
                console.error("Video load error:", e);
                e.target.style.display = "none";
              }}
              preload="metadata"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-slate-500">
              Project preview coming soon
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;

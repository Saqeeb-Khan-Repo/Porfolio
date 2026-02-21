import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-slate-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript className="text-yellow-400" />,
    },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3 className="text-blue-400" /> },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill className="text-cyan-400" />,
    },
  ];

  return (
    <section className="w-full bg-slate-950 py-16 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div>
          <h2 className="inline-block border-b-2 border-cyan-500 pb-1 text-2xl font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-3xl lg:text-4xl mb-5">
            Skills
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
            A snapshot of the technologies I use to build full‑stack,
            production‑ready web applications.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center shadow-sm shadow-slate-900/40 transition hover:-translate-y-1 hover:border-cyan-500/70 hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/20 lg:mt-2 cursor-pointer"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/80 text-2xl transition group-hover:scale-110">
                {item.icon}
              </div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-200 sm:text-sm">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

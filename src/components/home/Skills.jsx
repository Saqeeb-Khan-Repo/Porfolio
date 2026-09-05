import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiDotnet,
  SiMicrosoftsqlserver,
  SiEntityframework,
  SiJavascript,
  SiXunit,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  const skills = [
    { name: "C#", icon: <SiDotnet className="text-purple-400" /> },
    { name: ".NET", icon: <SiDotnet className="text-purple-500" /> },
    {
      name: "ASP.NET Core",
      icon: <SiDotnet className="text-indigo-400" />,
    },
    {
      name: "Web API",
      icon: <TbApi className="text-cyan-400" />,
    },
    {
      name: "Entity Framework Core",
      icon: <SiEntityframework className="text-purple-400" />,
    },
    {
      name: "SQL Server",
      icon: <SiMicrosoftsqlserver className="text-red-500" />,
    },
    {
      name: "LINQ",
      icon: <SiDotnet className="text-blue-400" />,
    },
    {
      name: "xUnit",
      icon: <SiXunit className="text-green-400" />,
    },
    {
      name: "React.js",
      icon: <FaReact className="text-sky-400" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3 className="text-blue-400" />,
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt className="text-orange-500" />,
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
            Technologies and tools I use to build reliable, scalable, and
            maintainable web applications and RESTful APIs.
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
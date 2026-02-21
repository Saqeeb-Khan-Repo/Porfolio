const Education = () => {
  const data = [
    {
      title: "Bachelor of Engineering (CSE)",
      collge: "Ghousia College of Engineering – VTU",
      loc: "Ramanagara, Karnataka",
      from: "2022 – 2026",
      marks: "8.2+ CGPA",
    },
    {
      title: "1st – 2nd PUC",
      collge: "BGS PU College",
      loc: "Bychapura, Magadi",
      from: "2020 – 2022",
      marks: "68%",
    },
    {
      title: "8th – 10th Standard",
      collge: "Jawahar English High School",
      loc: "Magadi, Kalya Gate",
      from: "2018 – 2020",
      marks: "67%",
    },
    {
      title: "1st – 7th Standard",
      collge: "Muhammadiya Urdu Primary School",
      loc: "Magadi, Kalya Gate",
      from: "2011 – 2018",
      marks: "79%",
    },
  ];

  return (
    <main className="w-full bg-slate-950 py-16 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div>
          <h2 className="inline-block border-b-2 border-cyan-500 pb-1 text-2xl font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-3xl lg:text-4xl">
            Education
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
            A quick overview of my academic journey and key milestones.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-700 pl-6">
          {data.map((item) => (
            <div key={item.title} className="mb-8 last:mb-0 pl-4">
              {/* Dot */}
              <span className="absolute -left-2.5 mt-1 flex h-3 w-3 items-center justify-center rounded-full bg-cyan-500 ring-4 ring-slate-950" />

              {/* Card */}
              <div className="rounded-xl bg-slate-900/70 p-4 shadow-md shadow-slate-900/40 transition hover:-translate-y-1 hover:border-cyan-500/60 hover:bg-slate-900 hover:shadow-cyan-500/20 border border-slate-800">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                    {item.title}
                  </h3>
                  <span className="text-xs font-medium text-cyan-400 sm:text-sm">
                    {item.from}
                  </span>
                </div>

                <p className="mt-1 text-sm font-medium text-slate-200">
                  {item.collge}
                </p>

                <p className="mt-0.5 text-xs text-slate-400 sm:text-sm">
                  {item.loc}
                </p>

                <p className="mt-2 inline-flex items-center rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-emerald-400">
                  {item.marks}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Education;

import React, { useState } from "react";

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);

  // Will become /Porfolio/mycv.pdf in prod
  const pdfUrl = `${import.meta.env.BASE_URL}mycv.pdf#toolbar=0&navpanes=0&scrollbar=0`;
 
  const togglePreview = () => setShowPreview((prev) => !prev);

  return (
    <section className="w-full min-h-screen bg-slate-950 flex flex-col items-center px-4 py-10 gap-8">
      <div className="max-w-4xl w-full flex flex-col items-center gap-4 text-slate-100 text-center">
        <h1 className="font-semibold text-3xl lg:text-4xl text-cyan-500">
          Resume
        </h1>
        <p className="text-sm text-slate-50 max-w-xl">
          You can download the resume or preview it directly on this page.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={pdfUrl}
            download="mycv.pdf"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-medium text-slate-950 shadow shadow-cyan-500/30 transition hover:bg-cyan-400"
          >
            Download Resume
          </a>

          <button
            type="button"
            onClick={togglePreview}
            className="inline-flex items-center justify-center rounded-full border border-cyan-500 px-6 py-2.5 text-sm font-medium text-cyan-400 hover:bg-cyan-500/10"
          >
            {showPreview ? "Close Preview" : "Preview Resume"}
          </button>
        </div>
      </div>

      {showPreview && (
        <div className="max-w-4xl w-full flex-1">
          <div className="h-[70vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
            <iframe
              src={pdfUrl}
              title="Resume preview"
              className="h-full w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;

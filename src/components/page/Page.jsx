import React, { useState } from "react";

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);
  const pdfUrl = `${import.meta.env.BASE_URL}/mycv.pdf#toolbar=0&navpanes=0&scrollbar=0`;

  const handleTogglePreview = () => {
    setShowPreview((prev) => !prev);
  };

  return (
    <section className="w-full min-h-screen bg-slate-950 flex flex-col  items-center px-4 py-10 gap-8">
      {/* Heading */}
      <div className="max-w-4xl w-full flex flex-col items-center mt-20 gap-4 text-slate-100 text-center">
        <h1 className="font-semibold text-3xl md:text-4xl mb-5 text-cyan-500 lg:text-5xl">
          Resume
        </h1>
        <p className="text-sm text-slate-50  md:text-3xl lg:text-4xl mb-5">
          You can download the resume or preview it directly on this page.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={pdfUrl}
            download="MYCV.pdf"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-medium text-slate-950 shadow shadow-cyan-500/30 transition hover:bg-cyan-400  lg:text-2xl"
          >
            Download Resume
          </a>

          <button
            type="button"
            onClick={handleTogglePreview}
            className="inline-flex items-center justify-center rounded-full border border-cyan-500 px-6 py-2.5 text-sm font-medium cursor-pointer text-cyan-400 hover:bg-cyan-500/10 lg:text-2xl"
          >
            {showPreview ? "Close Preview" : "Preview Resume"}
          </button>
        </div>
      </div>

      {/* PDF preview (hidden until button clicked) */}
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

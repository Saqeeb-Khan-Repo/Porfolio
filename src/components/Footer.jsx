import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/80 py-6 text-center text-xs md:text-sm text-slate-400">
      {/* Social icons */}
      <div className="flex justify-center gap-4 md:gap-5 mb-4">
        <a
          href="https://www.linkedin.com/in/saqeebkhan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600/90 text-white
                     shadow-md shadow-cyan-500/40
                     hover:bg-cyan-500 hover:shadow-cyan-400/60
                     transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105"
        >
          <FaLinkedinIn className="text-lg" />
        </a>

        <a
          href="https://github.com/Saqeeb-Khan-Repo"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-slate-100
                     border border-slate-600/80
                     hover:border-cyan-400 hover:text-cyan-300
                     transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105"
        >
          <FaGithub className="text-lg" />
        </a>

        <a
          href="https://discordapp.com/users/saqeeb281"
          aria-label="Email"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-tr from-purple-600 to-amber-400 text-white
                     shadow-md shadow-orange-400/40
                     hover:brightness-110 hover:shadow-orange-300/60
                     transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105"
        >
          <FaDiscord className="text-lg" />
        </a>

        <a
          href="https://www.instagram.com/saqeebkhan9880"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-tr from-pink-500 via-rose-500 to-violet-500 text-white
                     shadow-md shadow-pink-500/40
                     hover:brightness-110 hover:shadow-pink-400/60
                     transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105"
        >
          <FaInstagram className="text-lg" />
        </a>

        <a
          href="https://twitter.com/@saqeeb281"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-slate-950
                     shadow-md shadow-cyan-400/40
                     hover:bg-cyan-300 hover:shadow-cyan-300/60
                     transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105"
        >
          <FaTwitter className="text-lg" />
        </a>
      </div>

      {/* Divider */}
      <div className="mx-auto mb-3 h-px w-32 bg-linear-to-r from-transparent via-slate-600 to-transparent" />

      {/* Copyright */}
      <p className="tracking-wide">
        © 2026 <span className="font-semibold text-cyan-400">Saqeeb Khan</span>·
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

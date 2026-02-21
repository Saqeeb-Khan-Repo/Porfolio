import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen w-full bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center text-slate-100 space-y-4">
        <h1 className="text-5xl font-semibold tracking-tight">404</h1>
        <p className="text-sm text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <p className="text-sm">
          Please go back to{" "}
          <Link
            to="/"
            className="font-medium text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
          >
            Home
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;

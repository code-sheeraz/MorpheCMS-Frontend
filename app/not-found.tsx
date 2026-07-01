import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-primary px-4 text-center">
      <h1 className="text-6xl font-extrabold text-accent">404</h1>
      <p className="text-text-muted">Page not found</p>
      <Link
        href="/"
        className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
      >
        Go home
      </Link>
    </div>
  );
}

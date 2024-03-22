import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export function HomeLink({ children }: Props) {
  return (
    <Link
      href="/"
      className="flex items-center gap-x-2 text-sm hover:underline md:text-base"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
        />
      </svg>
      {children}
    </Link>
  );
}

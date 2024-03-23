type Props = {
  className?: string;
};

export function SvgChevronDown({ className }: Props) {
  return (
    <svg
      className={className || "size-4 md:size-5"}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 18.8605L29.4903 9.04932L31.843 12.2843L16 23.8064L0.156998 12.2843L2.50968 9.04932L16 18.8605Z"
        fill="#222B47"
      />
    </svg>
  );
}

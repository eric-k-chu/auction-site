type Props = {
  children: React.ReactNode;
};

export function SectionHeader({ children }: Props) {
  return <h2 className="text-2xl font-bold md:text-4xl">{children}</h2>;
}

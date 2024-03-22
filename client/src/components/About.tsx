type Props = {
  isOpen: boolean;
  about?: string;
};
export function About({ isOpen, about }: Props) {
  if (about === undefined) {
    return (
      <div
        className={`flex min-h-32 items-center justify-center rounded-xl p-6 shadow-lg ${isOpen ? "block" : "hidden"}`}
      >
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-32 items-center rounded-xl p-6 shadow-lg ${isOpen ? "block" : "hidden"}`}
    >
      <p>{about}</p>
    </div>
  );
}

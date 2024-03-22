import { SectionHeader } from "./SectionHeader";

export function Notice() {
  return (
    <section className="mx-auto max-w-7xl space-y-6 p-12">
      <SectionHeader>Notice</SectionHeader>
      <p className="text-sm md:text-base">
        {`The Department of Finance, the New York City Marshal and the Office of
        the Sheriff make no warranty, expressed or implied, as to the year of
        any vehicle or any vehicle's quality or state of repair. Successful
        purchasers are encouraged to have the vehicle inspected for safety
        before use including but not limited to manufacturers recall and repair
        notices. Vehicle safety recall information may be researched at `}
        <a
          className="text-blue-400 underline"
          href="https://vinrcl.safercar.gov/vin/"
          target="_blank"
        >
          https://vinrcl.safercar.gov/vin/
        </a>
        {`. The National Highway Traffic Safety Administration (NHTSA) site lets
        you enter a Vehicle Identification Number (VIN) to learn if a specific
        vehicle has not been repaired as part of a safety recall in the last 15
        years.`}
      </p>
    </section>
  );
}

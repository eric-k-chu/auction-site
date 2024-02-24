import { Lots } from "@/lib/types";

export async function fetchExampleData(delay = 3000): Promise<Lots> {
  await new Promise((resolve) => setTimeout(resolve, delay));

  const lots: Lots = {
    lots: [],
  };

  for (let i = 0; i < 3; i++) {
    const vehicles = [];
    for (let j = 0; j < 50; j++) {
      vehicles.push({
        year: 1990 + j,
        make: "BMW",
        plateNumber: `ABC${i + 1}`,
        state: "CA",
        vehicleId: `A${j + 1}B${j + 2}C${j + 3}D${j + 4}`,
        lienholder: j % 2 === 0 ? "JP Morgan Chase Bank" : undefined,
      });
    }
    lots.lots.push({
      location: `2${i} W 34th St., New York, NY 1000${i}`,
      date: Date.now() + i,
      vehicles: vehicles,
    });
  }
  return lots;
}

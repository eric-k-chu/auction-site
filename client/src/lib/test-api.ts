import { Lots } from "@/lib/types";

export async function fetchExampleData(delay = 3000): Promise<Lots> {
  await new Promise((resolve) => setTimeout(resolve, delay));

  const lots: Lots = {
    lots: [],
  };
  for (let i = 0; i < 1; i++) {
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
      location: `Legacy Towing`,
      date: 1709947739,
      vehicles: vehicles,
      address: "131-01 39th Ave Flushing, NY 11354",
      about:
        "I will sell at Public Auction by, on Friday March 08, 2024 at 10:00 o’clock in the morning at Legacy Towing 131-01 39th Ave Flushing, NY 11354 the right, title and interest of the judgment debtors in and to following vehicles.",
    });
  }

  const alot: Lots = {
    lots: [
      {
        location: "Legacy Towing",
        date: 1709947739,
        vehicles: [],
        address: "131-01 39th Ave Flushing, NY 11354",
        about:
          "I will sell at Public Auction by, on Friday March 08, 2024 at 10:00 o'clock in the morning at Legacy Towing 131-01 39th Ave Flushing, NY 11354 the right, title and interest of the judgment debtors in and to following vehicles.",
      },
    ],
  };

  return lots;
}

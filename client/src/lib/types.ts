export interface Vehicle {
  vehicleId: string;
  lienholder?: string;
  state: string;
  plateNumber: string;
  make: string;
  year: number;
}

export interface Lot {
  vehicles: Vehicle[];
  location: string;
  date: EpochTimeStamp;
  address: string;
  about: string;
}

export interface Lots {
  lots: Lot[];
}

export interface Faq {
  title: string;
  description: string;
}

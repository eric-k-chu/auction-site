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
}

export interface Lots {
  lots: Lot[];
}

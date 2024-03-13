declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_USERNAME: string;
      GITHUB_PAT: string;
      GITHUB_EMAIL: string;
      NAME: string;
    }
  }
}

export interface GitFile {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  content: string;
}

export interface Vehicle {
  vehicleId: string;
  lienholder?: string;
  state: string;
  plateNumber: string;
  make: string;
  year: number;
}

export interface Lot {
  id: string;
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

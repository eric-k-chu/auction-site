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
  year: string;
}

export interface Lot {
  id: string;
  vehicles: Vehicle[];
  location: string;
  date: string;
  time: string;
  address: string;
  about: string;
}

export interface Lots {
  lots: Lot[];
  sha: string;
}

export interface Faq {
  title: string;
  description: string;
}

type Error = string | null;

export interface Response200<T> {
  data: T | null;
  error: Error;
}

export interface Response204 {
  error: Error;
}

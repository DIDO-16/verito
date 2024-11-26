export type UserRole = 'admin' | 'inspector' | 'professional' | 'individual';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface VehicleHistory {
  vin: string;
  make: string;
  model: string;
  year: number;
  mileage: number[];
  mileageDates: string[];
  technicalHistory: {
    date: string;
    type: string;
    findings: string[];
    severity: 'minor' | 'major';
    recommendations: string[];
  }[];
  locations: {
    date: string;
    country: string;
    city: string;
  }[];
  owners: {
    type: 'individual' | 'company';
    startDate: string;
    endDate: string | null;
  }[];
  usage: {
    type: 'personal' | 'commercial' | 'industrial';
    startDate: string;
    endDate: string | null;
  }[];
  accidents: {
    date: string;
    description: string;
    severity: 'minor' | 'major';
  }[];
  administrativeStatus: {
    isLiened: boolean;
    registrationDate: string;
    lastUpdateDate: string;
  };
}
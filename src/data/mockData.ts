import { VehicleHistory, User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@verito.dz',
    name: 'Admin User',
    role: 'admin'
  },
  {
    id: '2',
    email: 'inspector@ctc.dz',
    name: 'Inspector CTC',
    role: 'inspector'
  },
  {
    id: '3',
    email: 'pro@garage.dz',
    name: 'Professional User',
    role: 'professional'
  },
  {
    id: '4',
    email: 'user@example.dz',
    name: 'Individual User',
    role: 'individual'
  }
];

// All users have password: Test@123

export const mockVehicles: VehicleHistory[] = [
  {
    vin: 'WBAJB0C51JB084264',
    make: 'BMW',
    model: '330i',
    year: 2018,
    mileage: [0, 15000, 32000, 45000],
    mileageDates: ['2018-06-15', '2019-07-20', '2020-08-10', '2021-09-05'],
    technicalHistory: [
      {
        date: '2019-07-20',
        type: 'Regular Inspection',
        findings: ['Brake pads worn', 'Oil change needed'],
        severity: 'minor',
        recommendations: ['Replace brake pads', 'Change oil and filter']
      },
      {
        date: '2020-08-10',
        type: 'Major Service',
        findings: ['Transmission fluid leak'],
        severity: 'major',
        recommendations: ['Repair transmission seal']
      }
    ],
    locations: [
      {
        date: '2018-06-15',
        country: 'Algeria',
        city: 'Algiers'
      },
      {
        date: '2020-01-15',
        country: 'Algeria',
        city: 'Oran'
      }
    ],
    owners: [
      {
        type: 'individual',
        startDate: '2018-06-15',
        endDate: '2020-01-15'
      },
      {
        type: 'individual',
        startDate: '2020-01-15',
        endDate: null
      }
    ],
    usage: [
      {
        type: 'personal',
        startDate: '2018-06-15',
        endDate: null
      }
    ],
    accidents: [
      {
        date: '2019-12-10',
        description: 'Minor front bumper collision',
        severity: 'minor'
      }
    ],
    administrativeStatus: {
      isLiened: false,
      registrationDate: '2018-06-15',
      lastUpdateDate: '2021-09-05'
    }
  },
  {
    vin: 'JN1DA31A82T322424',
    make: 'Renault',
    model: 'Symbol',
    year: 2020,
    mileage: [0, 20000, 40000],
    mileageDates: ['2020-03-10', '2021-04-15', '2022-05-20'],
    technicalHistory: [
      {
        date: '2021-04-15',
        type: 'Regular Inspection',
        findings: ['Air filter dirty'],
        severity: 'minor',
        recommendations: ['Replace air filter']
      }
    ],
    locations: [
      {
        date: '2020-03-10',
        country: 'Algeria',
        city: 'Constantine'
      }
    ],
    owners: [
      {
        type: 'company',
        startDate: '2020-03-10',
        endDate: null
      }
    ],
    usage: [
      {
        type: 'commercial',
        startDate: '2020-03-10',
        endDate: null
      }
    ],
    accidents: [],
    administrativeStatus: {
      isLiened: false,
      registrationDate: '2020-03-10',
      lastUpdateDate: '2022-05-20'
    }
  }
];
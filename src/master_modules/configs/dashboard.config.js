import { Calendar, Scissors, UserPlus, Star } from "lucide-react";

export const dashboardCardsConfig = [
  {
    key: "appointments",
    title: "Appointments",
    icon: Calendar,
    dataKey: "appointments",
    color: "purple",
    graph: [
      { date: "27-07", value: 40 },
      { date: "28-07", value: 60 },
      { date: "29-07", value: 45 },
      { date: "30-07", value: 80 },
      { date: "31-07", value: 65 },
      { date: "31-07", value: 67 },
      { date: "31-07", value: 65 },
      { date: "31-07", value: 100 },
      { date: "31-07", value: 34 },
      { date: "31-07", value: 65 },
    ],
  },
  {
    key: "operations",
    title: "Operations",
    icon: Scissors,
    dataKey: "operations",
    color: "orange",
    graph: [
      { date: "27-07", value: 20 },
      { date: "28-07", value: 35 },
      { date: "29-07", value: 28 },
      { date: "30-07", value: 45 },
      { date: "31-07", value: 38 },
    ],
  },
  {
    key: "patients",
    title: "New Patients",
    icon: UserPlus,
    dataKey: "newPatients",
    color: "green",
    graph: [
      { date: "27-07", value: 15 },
      { date: "28-07", value: 22 },
      { date: "29-07", value: 18 },
      { date: "30-07", value: 30 },
      { date: "31-07", value: 26 },
    ],
  },
  {
    key: "earning",
    title: "Earning",
    icon: Star,
    dataKey: "earning",
    color: "blue",
    graph: [
      { date: "27-07", value: 12000 },
      { date: "28-07", value: 15000 },
      { date: "29-07", value: 14000 },
      { date: "30-07", value: 18000 },
      { date: "31-07", value: 20125 },
    ],
  },
];
export default dashboardCardsConfig;
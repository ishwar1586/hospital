// export const pharmacyTopStatsMock = {
//   sales: {
//     value: 10945,
//     change: 4.63,
//     trend: "up",
//     graph: [10, 20, 15, 25, 18, 30, 22],
//   },
//   revenue: {
//     value: 12338,
//     change: -2.34,
//     trend: "down",
//     graph: [20, 18, 22, 19, 23, 21, 20],
//   },
//   customers: {
//     value: 20847,
//     change: 4.63,
//     trend: "up",
//     graph: [12, 18, 15, 22, 20, 24, 23],
//   },
//   expense: {
//     value: 23485,
//     change: 1.34,
//     trend: "up",
//     graph: [8, 10, 9, 12, 11, 13, 12],
//   },
// };

// export default pharmacyTopStatsMock;

// src/master_modules/pharmacydashboard/mocks/pharmacyTopStats.mock.js

export const pharmacyTopStatsMock = {
  sales: {
    value: 10945,
    change: 4.63,
    trend: "up",
    graph: [
      { value: 10 },
      { value: 20 },
      { value: 15 },
      { value: 25 },
      { value: 18 },
      { value: 30 },
    ],
  },

  revenue: {
    value: 12338,
    change: -2.34,
    trend: "down",
    graph: [
      { value: 20 },
      { value: 18 },
      { value: 22 },
      { value: 19 },
      { value: 23 },
      { value: 21 },
    ],
  },

  customers: {
    value: 20847,
    change: 4.63,
    trend: "up",
    graph: [
      { value: 12 },
      { value: 18 },
      { value: 15 },
      { value: 22 },
      { value: 20 },
      { value: 24 },
    ],
  },

  expense: {
    value: 23485,
    change: 1.34,
    trend: "up",
    graph: [
      { value: 8 },
      { value: 10 },
      { value: 9 },
      { value: 12 },
      { value: 11 },
      { value: 13 },
    ],
  },
};

export default pharmacyTopStatsMock;
import {
  MdCalendarMonth,
  MdMedicalServices,
  MdGroups,
  MdBiotech,
  MdKingBed,
  MdLogout,
} from "react-icons/md";

export const statsOverviewMock = [
  {
    id: 1,
    title: "Appointments",
    value: 428,
    icon: MdCalendarMonth,
    color: "indigo",
    // background: "indigo",
  },

  {
    id: 2,
    title: "Doctors",
    value: 67,
    icon: MdMedicalServices,
    color: "indigo",
    // background: "indigo",
  },

  {
    id: 3,
    title: "Staff members",
    value: 214,
    icon: MdGroups,
    color: "purple",
    // background: "purple",
  },

  {
    id: 4,
    title: "Operations",
    value: 287,
    icon: MdBiotech,
    color: "pink",
  },

  {
    id: 5,
    title: "Admitted",
    value: 372,
    icon: MdKingBed,
    color: "orange",
  },

  {
    id: 6,
    title: "Discharged",
    value: 398,
    icon: MdLogout,
    color: "teal",
  },
];


export default statsOverviewMock;
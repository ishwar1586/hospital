const selfStaffPurchaseMock = {
  staffList: [
    {
      id: "STF001",
      employeeId: "EMP-1001",
      staffName: "Rahul Sharma",
      department: "Pharmacy",
      designation: "Pharmacist",
      mobile: "9876543210",
      status: "active",
    },
    {
      id: "STF002",
      employeeId: "EMP-1002",
      staffName: "Priya Singh",
      department: "Nursing",
      designation: "Staff Nurse",
      mobile: "9876543211",
      status: "active",
    },
    {
      id: "STF003",
      employeeId: "EMP-1003",
      staffName: "Amit Verma",
      department: "Administration",
      designation: "Admin Executive",
      mobile: "9876543212",
      status: "active",
    },
    {
      id: "STF004",
      employeeId: "EMP-1004",
      staffName: "Neha Gupta",
      department: "Laboratory",
      designation: "Lab Technician",
      mobile: "9876543213",
      status: "active",
    },
    {
      id: "STF005",
      employeeId: "EMP-1005",
      staffName: "Sanjay Yadav",
      department: "Housekeeping",
      designation: "Supervisor",
      mobile: "9876543214",
      status: "active",
    },
    {
      id: "STF006",
      employeeId: "EMP-1006",
      staffName: "Pooja Mishra",
      department: "Reception",
      designation: "Receptionist",
      mobile: "9876543215",
      status: "inactive",
    },
    {
      id: "STF007",
      employeeId: "EMP-1007",
      staffName: "Vikas Singh",
      department: "IT",
      designation: "IT Support Executive",
      mobile: "9876543216",
      status: "active",
    },
    {
      id: "STF008",
      employeeId: "EMP-1008",
      staffName: "Anjali Verma",
      department: "Human Resources",
      designation: "HR Executive",
      mobile: "9876543217",
      status: "active",
    },
  ],

  selectedStaff: null,

  pagination: {
    page: 0,
    rowsPerPage: 10,
    total: 8,
  },

  filters: {
    search: "",
    status: "all",
  },
};

export default selfStaffPurchaseMock;
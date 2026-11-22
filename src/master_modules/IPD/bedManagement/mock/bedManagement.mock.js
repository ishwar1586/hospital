// const bedManagement = [
//   {
//     id: 1,

//     ward: "General Ward",
//     floor: "Floor 1",

//     room: "Room 101",

//     bedNo: "B-01",

//     status: "Occupied",

//     patientName: "Rohan Sharma",

//     uhid: "UHID10001",

//     age: 45,

//     gender: "Male",

//     doctor: "Dr. Amit Kumar",

//     admissionDate: "2026-06-10",
//   },

//   {
//     id: 2,

//     ward: "General Ward",
//     floor: "Floor 1",

//     room: "Room 101",

//     bedNo: "B-02",

//     status: "Available",

//     patientName: "",

//     uhid: "",

//     age: "",

//     gender: "",

//     doctor: "",

//     admissionDate: "",
//   },

//   {
//     id: 3,

//     ward: "General Ward",
//     floor: "Floor 1",

//     room: "Room 101",

//     bedNo: "B-03",

//     status: "Occupied",

//     patientName: "Amit Singh",

//     uhid: "UHID10002",

//     age: 52,

//     gender: "Male",

//     doctor: "Dr. Neha Sharma",

//     admissionDate: "2026-06-09",
//   },

//   {
//   id: 4,

//   ward: "General Ward",
//   floor: "Floor 1",

//   room: "Room 101",

//   bedNo: "B-04",

//   status: "Reserved",

//   patientName: "",

//   uhid: "",

//   age: "",

//   gender: "",

//   doctor: "",

//   admissionDate: "",
// },

// {
//   id: 5,

//   ward: "General Ward",
//   floor: "Floor 1",

//   room: "Room 102",

//   bedNo: "B-05",

//   status: "Occupied",

//   patientName: "Priya Verma",

//   uhid: "UHID10003",

//   age: 34,

//   gender: "Female",

//   doctor: "Dr. Rajesh Kumar",

//   admissionDate: "2026-06-08",
// },

// {
//   id: 6,

//   ward: "General Ward",
//   floor: "Floor 1",

//   room: "Room 102",

//   bedNo: "B-06",

//   status: "Available",

//   patientName: "",

//   uhid: "",

//   age: "",

//   gender: "",

//   doctor: "",

//   admissionDate: "",
// },

// {
//   id: 7,

//   ward: "Semi Private",

//   floor: "Floor 2",

//   room: "Room 201",

//   bedNo: "B-07",

//   status: "Occupied",

//   patientName: "Ankit Yadav",

//   uhid: "UHID10004",

//   age: 29,

//   gender: "Male",

//   doctor: "Dr. Meera Gupta",

//   admissionDate: "2026-06-11",
// },

// {
//   id: 8,

//   ward: "Semi Private",

//   floor: "Floor 2",

//   room: "Room 201",

//   bedNo: "B-08",

//   status: "Available",

//   patientName: "",

//   uhid: "",

//   age: "",

//   gender: "",

//   doctor: "",

//   admissionDate: "",
// },

// {
//   id: 9,

//   ward: "Private",

//   floor: "Floor 2",

//   room: "Room 202",

//   bedNo: "B-09",

//   status: "Occupied",

//   patientName: "Neha Singh",

//   uhid: "UHID10005",

//   age: 41,

//   gender: "Female",

//   doctor: "Dr. Amit Kumar",

//   admissionDate: "2026-06-12",
// },

// {
//   id: 10,

//   ward: "Private",

//   floor: "Floor 2",

//   room: "Room 202",

//   bedNo: "B-10",

//   status: "Maintenance",

//   patientName: "",

//   uhid: "",

//   age: "",

//   gender: "",

//   doctor: "",

//   admissionDate: "",
// },

// {
//   id: 11,

//   ward: "ICU",

//   floor: "Floor 3",

//   room: "Room 301",

//   bedNo: "B-11",

//   status: "Occupied",

//   patientName: "Rahul Mishra",

//   uhid: "UHID10006",

//   age: 58,

//   gender: "Male",

//   doctor: "Dr. Sanjay Verma",

//   admissionDate: "2026-06-13",
// },

// {
//   id: 12,

//   ward: "ICU",

//   floor: "Floor 3",

//   room: "Room 301",

//   bedNo: "B-12",

//   status: "Occupied",

//   patientName: "Sunita Devi",

//   uhid: "UHID10007",

//   age: 63,

//   gender: "Female",

//   doctor: "Dr. Sanjay Verma",

//   admissionDate: "2026-06-14",
// },

// {
//   id: 13,

//   ward: "Deluxe",

//   floor: "Floor 4",

//   room: "Room 401",

//   bedNo: "B-13",

//   status: "Available",

//   patientName: "",

//   uhid: "",

//   age: "",

//   gender: "",

//   doctor: "",

//   admissionDate: "",
// },

// {
//   id: 14,

//   ward: "Deluxe",

//   floor: "Floor 4",

//   room: "Room 401",

//   bedNo: "B-14",

//   status: "Reserved",

//   patientName: "",

//   uhid: "",

//   age: "",

//   gender: "",

//   doctor: "",

//   admissionDate: "",
// },

// {
//   id: 15,

//   ward: "Maternity",

//   floor: "Floor 5",

//   room: "Room 501",

//   bedNo: "B-15",

//   status: "Occupied",

//   patientName: "Pooja Sharma",

//   uhid: "UHID10008",

//   age: 27,

//   gender: "Female",

//   doctor: "Dr. Kavita Singh",

//   admissionDate: "2026-06-15",
// }
// ];


// export default bedManagement;





const wards = [
  "General Ward",
  "Semi Private",
  "Private",
  "ICU",
  "Deluxe",
  "Maternity",
];

const statuses = [
  "Available",
  "Occupied",
  "Reserved",
  "Maintenance",
];

const doctors = [
  "Dr. Amit Kumar",
  "Dr. Neha Sharma",
  "Dr. Rajesh Kumar",
  "Dr. Meera Gupta",
  "Dr. Sanjay Verma",
  "Dr. Kavita Singh",
];

const patients = [
  "Rohan Sharma",
  "Amit Singh",
  "Priya Verma",
  "Ankit Yadav",
  "Neha Singh",
  "Rahul Mishra",
  "Sunita Devi",
  "Pooja Sharma",
];

const bedManagement = [];

let id = 1;

wards.forEach((ward, wardIndex) => {

  for (let roomNo = 1; roomNo <= 2; roomNo++) {

    for (let bedNo = 1; bedNo <= 4; bedNo++) {

      const status =
        statuses[
          (id - 1) %
            statuses.length
        ];

      bedManagement.push({
        id,

        ward,

        floor: `Floor ${
          wardIndex + 1
        }`,

        room: `Room ${
          (wardIndex + 1) * 100 +
          roomNo
        }`,

        bedNo: `B-${String(id).padStart(
          2,
          "0"
        )}`,

        status,

        patientName:
          status === "Occupied"
            ? patients[
                (id - 1) %
                  patients.length
              ]
            : "",

        uhid:
          status === "Occupied"
            ? `UHID${10000 + id}`
            : "",

        age:
          status === "Occupied"
            ? 20 + (id % 50)
            : "",

        gender:
          id % 2 === 0
            ? "Female"
            : "Male",

        doctor:
          status === "Occupied"
            ? doctors[
                (id - 1) %
                  doctors.length
              ]
            : "",

        admissionDate:
          status === "Occupied"
            ? `2026-06-${String(
                (id % 28) + 1
              ).padStart(2, "0")}`
            : "",
      });

      id++;
    }
  }
});

export default bedManagement;
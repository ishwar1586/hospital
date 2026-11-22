import "./PatientTable.css";

import PatientRow from "./PatientRow";

const PatientTable = ({

    patients = [],

    onSelect,

}) => {

    return (

        <div className="patient-table-wrapper">

            <table className="patient-table">

                {/* ================================= */}
                {/* Table Header */}
                {/* ================================= */}

                <thead>

                    <tr>

                        <th>UHID</th>

                        <th>Patient</th>

                        <th>Patient Type</th>

                        <th>Doctor</th>

                        <th>Department</th>

                        <th>Mobile</th>

                        <th>Status</th>

                        <th className="action-column">

                            Action

                        </th>

                    </tr>

                </thead>

                {/* ================================= */}
                {/* Table Body */}
                {/* ================================= */}

                <tbody>

                    {

                        patients.map((patient) => (

                            <PatientRow

                                key={patient.id}

                                patient={patient}

                                onSelect={onSelect}

                            />

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default PatientTable;
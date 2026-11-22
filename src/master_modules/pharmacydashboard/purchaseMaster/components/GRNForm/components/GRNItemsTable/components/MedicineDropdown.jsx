import { Autocomplete, TextField } from "@mui/material";

const MedicineDropdown = ({
    value,
    medicines = [],
    onChange,
    disabled = false,
}) => {

    return (

        <Autocomplete

            fullWidth

            size="small"

            disabled={disabled}

            options={medicines}

            value={
                medicines.find(
                    medicine =>
                        medicine.id === value
                ) || null
            }

            isOptionEqualToValue={(
                option,
                selected
            ) =>
                option.id === selected.id
            }

            getOptionLabel={(option) =>
                option
                    ? `${option.medicineCode} - ${option.medicineName}`
                    : ""
            }

            onChange={(
                event,
                selectedMedicine
            ) => {

                onChange(
                    selectedMedicine || null
                );

            }}

            renderOption={(
                props,
                option
            ) => (

                <li
                    {...props}
                    key={option.id}
                >

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >

                        <strong>

                            {option.medicineName}

                        </strong>

                        <small>

                            {option.medicineCode}
                            {" | "}
                            {option.strength}

                        </small>

                    </div>

                </li>

            )}

            renderInput={(params) => (

                <TextField

                    {...params}

                    placeholder="Search Medicine"

                />

            )}

        />

    );

};

export default MedicineDropdown;
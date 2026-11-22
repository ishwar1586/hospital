import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";

const DepartmentChip = ({
    department,
}) => {

    return (
        <span className="department-chip">

            <AccountTreeOutlinedIcon />

            <span>
                {department}
            </span>

        </span>
    );
};

export default DepartmentChip;
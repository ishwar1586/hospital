import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";

import "@/master_modules/IPD/bedManagement/styles/wardoverview.css";

const WardOverview = ({
  beds = [],
}) => {

  const wards = [
    "General Ward",
    "Semi Private",
    "Private",
    "ICU",
    "Deluxe",
    "Maternity",
  ];

  const wardStats = wards.map(
    (ward) => {

      const wardBeds =
        beds.filter(
          (bed) =>
            bed.ward === ward
        );

      const available =
        wardBeds.filter(
          (bed) =>
            bed.status ===
            "Available"
        ).length;

      const occupied =
        wardBeds.filter(
          (bed) =>
            bed.status ===
            "Occupied"
        ).length;

      const reserved =
        wardBeds.filter(
          (bed) =>
            bed.status ===
            "Reserved"
        ).length;

      return {
        ward,
        total:
          wardBeds.length,
        available,
        occupied,
        reserved,
      };
    }
  );

  return (
    <div className="ward-overview-card">

      <div className="ward-overview-header">

        <h3>
          Ward Overview
        </h3>

      </div>

      <div className="ward-list">

        {wardStats.map(
          (item) => (

            <div
              key={item.ward}
              className="ward-item"
            >

              <div className="ward-top">

                <div className="ward-icon">

                  <LocalHospitalOutlinedIcon />

                </div>

                <div>

                  <h4>
                    {item.ward}
                  </h4>

                  <span>
                    Total Beds :
                    {" "}
                    {item.total}
                  </span>

                </div>

              </div>

              <div className="ward-stats">

                <div className="available">

                  <label>
                    Available
                  </label>

                  <strong>
                    {
                      item.available
                    }
                  </strong>

                </div>

                <div className="occupied">

                  <label>
                    Occupied
                  </label>

                  <strong>
                    {
                      item.occupied
                    }
                  </strong>

                </div>

                <div className="reserved">

                  <label>
                    Reserved
                  </label>

                  <strong>
                    {
                      item.reserved
                    }
                  </strong>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default WardOverview;
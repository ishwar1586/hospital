import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";

import "@/master_modules/IPD/bedManagement/styles/bedgrid.css";

const BedGrid = ({
  beds = [],
  onBedClick,
}) => {

  const groupedRooms =
    beds.reduce(
      (acc, bed) => {

        if (!acc[bed.room]) {
          acc[bed.room] = [];
        }

        acc[bed.room].push(bed);

        return acc;

      },
      {}
    );

  return (
    
    <div className="bed-grid-card">

      <div className="bed-grid-header">

        <h3>
          Bed Occupancy
        </h3>

      </div>

      <div className="bed-grid-container">

      {Object.entries(
        groupedRooms
      ).map(
        ([room, roomBeds]) => (

          <div
            key={room}
            className="room-section"
          >

            <div className="room-title">

              {room}

            </div>

            <div className="beds-grid">

              {roomBeds.map(
                (bed) => (

                  <div
                    key={bed.id}
                    className={`bed-card ${bed.status
                      .toLowerCase()
                      .replace(
                        /\s/g,
                        "-"
                      )}`}
                    onClick={() =>
                      onBedClick(bed)
                    }
                  >

                    <KingBedOutlinedIcon />

                    <h4>
                      {bed.bedNo}
                    </h4>

                    <span>
                      {bed.status}
                    </span>

                    {bed.patientName && (

                      <p>
                        {
                          bed.patientName
                        }
                      </p>

                    )}

                  </div>

                )
              )}

            </div>

          </div>

        )
      )}

    </div>
    </div>
  );
};

export default BedGrid;
import React, { useMemo } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BedIcon from "@mui/icons-material/Bed";

import RoomCard from "./RoomCard";

import "./WardSection.css";


const WardSection = ({
  ward = {},
  rooms = [],
  expanded = true,
  onToggle,
  onBedSelect,
}) => {
  /* ==========================================================
   * WARD DATA
   * ==========================================================
   */

  const wardId = ward?.id || "";
  const wardName = ward?.name || "Ward";

  const wardRooms = useMemo(() => {
    if (Array.isArray(rooms) && rooms.length > 0) {
      return rooms;
    }

    if (Array.isArray(ward?.rooms)) {
      return ward.rooms;
    }

    return [];
  }, [rooms, ward?.rooms]);


  /* ==========================================================
   * WARD BED COUNT
   * ==========================================================
   */

  const totalBeds = useMemo(() => {
    return wardRooms.reduce(
      (total, room) =>
        total + (Array.isArray(room?.beds) ? room.beds.length : 0),
      0
    );
  }, [wardRooms]);


  /* ==========================================================
   * WARD OCCUPANCY
   * ==========================================================
   */

  const occupiedBeds = useMemo(() => {
    return wardRooms.reduce((total, room) => {
      const beds = Array.isArray(room?.beds)
        ? room.beds
        : [];

      return (
        total +
        beds.filter(
          (bed) => bed?.status === "occupied"
        ).length
      );
    }, 0);
  }, [wardRooms]);


  /* ==========================================================
   * HEADER TOGGLE
   * ==========================================================
   */

  const handleToggle = () => {
    onToggle?.(wardId);
  };


  /* ==========================================================
   * RENDER
   * ==========================================================
   */

  return (
    <section
      className="bed-view-ward-section"
      data-ward-id={wardId}
    >

      {/* ======================================================
          WARD HEADER
          ====================================================== */}

      <div className="bed-view-ward-section__header">

        <div className="bed-view-ward-section__header-left">

          <button
            type="button"
            className="bed-view-ward-section__toggle"
            onClick={handleToggle}
            aria-expanded={expanded}
            aria-label={
              expanded
                ? `Collapse ${wardName}`
                : `Expand ${wardName}`
            }
          >
            <ExpandMoreIcon
              className={
                expanded
                  ? "bed-view-ward-section__toggle-icon bed-view-ward-section__toggle-icon--expanded"
                  : "bed-view-ward-section__toggle-icon"
              }
            />
          </button>


          <div className="bed-view-ward-section__icon">
            <BedIcon />
          </div>


          <div className="bed-view-ward-section__info">

            <h2 className="bed-view-ward-section__title">
              {wardName}
            </h2>

            <span className="bed-view-ward-section__subtitle">
              {wardRooms.length}{" "}
              {wardRooms.length === 1 ? "Room" : "Rooms"}
            </span>

          </div>

        </div>


        <div className="bed-view-ward-section__summary">

          <div className="bed-view-ward-section__summary-item">
            <strong>
              {totalBeds}
            </strong>

            <span>
              Beds
            </span>
          </div>


          <div className="bed-view-ward-section__summary-item">
            <strong>
              {occupiedBeds}
            </strong>

            <span>
              Occupied
            </span>
          </div>

        </div>

      </div>


      {/* ======================================================
          ROOM CONTENT
          ====================================================== */}

      {expanded && (
        <div className="bed-view-ward-section__content">

          {wardRooms.length > 0 ? (
            <div className="bed-view-ward-section__rooms">

              {wardRooms.map((room) => (
                <RoomCard
                  key={room?.id}
                  room={room}
                  onBedSelect={onBedSelect}
                />
              ))}

            </div>
          ) : (
            <div className="bed-view-ward-section__empty">
              <BedIcon />

              <span>
                No rooms available
              </span>
            </div>
          )}

        </div>
      )}

    </section>
  );
};


export default WardSection;
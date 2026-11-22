import React, { useMemo } from "react";

import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

import BedCard from "./BedCard";

import "./RoomCard.css";


const RoomCard = ({
  room = {},
  onBedSelect,
}) => {
  /* ==========================================================
     ROOM DATA
     ========================================================== */

  const roomId = room?.id || "";

  const roomNumber =
    room?.roomNumber ||
    room?.name ||
    "Room";

  const roomType =
    room?.roomType ||
    room?.type ||
    "";

  const beds = useMemo(() => {
    return Array.isArray(room?.beds)
      ? room.beds
      : [];
  }, [room?.beds]);


  /* ==========================================================
     BED COUNTS
     ========================================================== */

  const totalBeds = beds.length;

  const occupiedBeds = useMemo(() => {
    return beds.filter(
      (bed) =>
        String(bed?.status || "").toLowerCase() ===
        "occupied"
    ).length;
  }, [beds]);

  const availableBeds = useMemo(() => {
    return beds.filter(
      (bed) =>
        String(bed?.status || "").toLowerCase() ===
        "available"
    ).length;
  }, [beds]);


  /* ==========================================================
     BED SELECT HANDLER
     ========================================================== */

  const handleBedSelect = (bedId) => {
    if (!bedId) {
      return;
    }

    onBedSelect?.(bedId);
  };


  /* ==========================================================
     RENDER
     ========================================================== */

  return (
    <article
      className="bed-view-room-card"
      data-room-id={roomId}
    >

      {/* ======================================================
          ROOM HEADER
          ====================================================== */}

      <div className="bed-view-room-card__header">

        <div className="bed-view-room-card__title-wrapper">

          <div className="bed-view-room-card__icon">
            <MeetingRoomIcon />
          </div>

          <div className="bed-view-room-card__title-content">

            <h3 className="bed-view-room-card__title">
              {roomNumber}
            </h3>

            {roomType && (
              <span className="bed-view-room-card__type">
                {roomType}
              </span>
            )}

          </div>

        </div>


        {/* ==================================================
            ROOM SUMMARY
            ================================================== */}

        <div className="bed-view-room-card__summary">

          <span className="bed-view-room-card__count">
            {totalBeds}{" "}
            {totalBeds === 1 ? "Bed" : "Beds"}
          </span>

          {occupiedBeds > 0 && (
            <span className="bed-view-room-card__occupied">
              {occupiedBeds} Occupied
            </span>
          )}

          {availableBeds > 0 && (
            <span className="bed-view-room-card__available">
              {availableBeds} Available
            </span>
          )}

        </div>

      </div>


      {/* ======================================================
          ROOM CONTENT
          ====================================================== */}

      <div className="bed-view-room-card__content">

        {beds.length > 0 ? (

          <div className="bed-view-room-card__beds">

            {beds.map((bed) => (

              <BedCard
                key={bed?.id}
                bed={bed}
                onSelect={handleBedSelect}
              />

            ))}

          </div>

        ) : (

          <div className="bed-view-room-card__empty">
            No beds available
          </div>

        )}

      </div>

    </article>
  );
};


export default RoomCard;
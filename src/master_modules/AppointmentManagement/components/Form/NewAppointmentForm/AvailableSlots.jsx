import React, {
    useMemo,
    useState,
} from "react";

import CalendarTodayIcon
    from "@mui/icons-material/CalendarToday";

import "./AvailableSlots.css";


const AvailableSlots = ({
    selectedDate = "16 May 2024",
    selectedTimeSlot,
    onTimeSlotSelect,
    onViewAllSlots,
}) => {

    // =====================================================
    // Available Slots
    // =====================================================

    const availableSlots = useMemo(
        () => [
            {
                id: "slot-0930",
                label: "09:30 AM",
                value: "09:30 AM - 10:00 AM",
                available: true,
            },
            {
                id: "slot-1000",
                label: "10:00 AM",
                value: "10:00 AM - 10:30 AM",
                available: true,
            },
            {
                id: "slot-1030",
                label: "10:30 AM",
                value: "10:30 AM - 11:00 AM",
                available: true,
            },
            {
                id: "slot-1100",
                label: "11:00 AM",
                value: "11:00 AM - 11:30 AM",
                available: true,
            },
            {
                id: "slot-1130",
                label: "11:30 AM",
                value: "11:30 AM - 12:00 PM",
                available: true,
            },
            {
                id: "slot-1200",
                label: "12:00 PM",
                value: "12:00 PM - 12:30 PM",
                available: true,
            },
        ],
        []
    );


    // =====================================================
    // Selected Slot State
    // =====================================================

    const [
        internalSelectedSlot,
        setInternalSelectedSlot,
    ] = useState(
        selectedTimeSlot || "09:30 AM - 10:00 AM"
    );


    // =====================================================
    // Slot Selection
    // =====================================================

    const handleSlotSelect = (
        slot
    ) => {

        if (!slot.available) {
            return;
        }


        setInternalSelectedSlot(
            slot.value
        );


        if (
            typeof onTimeSlotSelect ===
            "function"
        ) {

            onTimeSlotSelect(
                slot
            );

        }

    };


    // =====================================================
    // View All Slots
    // =====================================================

    const handleViewAllSlots = () => {

        if (
            typeof onViewAllSlots ===
            "function"
        ) {

            onViewAllSlots();

        }

    };


    // =====================================================
    // Render
    // =====================================================

    return (

        <aside className="available-slots">

            {/* =============================================
                Header
            ============================================= */}

            <div className="available-slots__header">

                <CalendarTodayIcon
                    className="available-slots__header-icon"
                />

                <span className="available-slots__date">
                    {selectedDate}
                </span>

                <span className="available-slots__today">
                    (Today)
                </span>

            </div>


            {/* =============================================
                Slots
            ============================================= */}

            <div className="available-slots__list">

                {availableSlots.map(
                    (slot) => {

                        const isSelected =
                            internalSelectedSlot ===
                            slot.value;


                        return (

                            <button
                                key={
                                    slot.id
                                }
                                type="button"
                                disabled={
                                    !slot.available
                                }
                                className={`
                                    available-slots__slot
                                    ${
                                        isSelected
                                            ? "available-slots__slot--selected"
                                            : ""
                                    }
                                    ${
                                        !slot.available
                                            ? "available-slots__slot--disabled"
                                            : ""
                                    }
                                `}
                                onClick={() =>
                                    handleSlotSelect(
                                        slot
                                    )
                                }
                                aria-pressed={
                                    isSelected
                                }
                            >

                                {slot.label}

                            </button>

                        );

                    }
                )}

            </div>


            {/* =============================================
                View All Slots
            ============================================= */}

            <button
                type="button"
                className="available-slots__view-all"
                onClick={
                    handleViewAllSlots
                }
            >
                View All Slots
            </button>

        </aside>

    );

};


export default AvailableSlots;
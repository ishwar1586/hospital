import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getBedViewData,
  getBedViewWards,
  getBedViewRoomsByWard,
  getBedViewBeds,
  getBedViewBedsByWard,
  getBedViewBedsByRoom,
  getBedViewBedById,
  getBedViewWardById,
  getBedViewRoomById,
  getBedViewStatusOptions,
} from "@/master_modules/IPDManagement/services/ipdService";

import {
  IPD_BED_STATUS_CONFIG,
} from "@/master_modules/IPDManagement/config/ipdConfig";


/* ============================================================
 * INITIAL FILTERS
 * ============================================================
 */

const INITIAL_FILTERS = {
  search: "",
  wardId: "",
  roomId: "",
  status: "",
};


/* ============================================================
 * NORMALIZE VALUE
 * ============================================================
 */

const normalizeValue = (value) => {
  if (
    value === null ||
    value === undefined
  ) {
    return "";
  }

  return String(value)
    .trim()
    .toLowerCase();
};


/* ============================================================
 * SEARCHABLE BED TEXT
 * ============================================================
 */

const getBedSearchText = (bed) => {
  return [
    bed?.bedNumber,

    bed?.patient?.name,

    bed?.patient?.uhid,

    bed?.ipdNumber,

    bed?.wardName,

    bed?.roomNumber,
  ]
    .map(normalizeValue)
    .filter(Boolean)
    .join(" ");
};


/* ============================================================
 * HOOK
 * ============================================================
 */

const useIPDBeds = () => {
  /* ==========================================================
   * RAW DATA
   * ==========================================================
   */

  const [wards, setWards] = useState([]);

  const [rooms, setRooms] = useState([]);

  const [beds, setBeds] = useState([]);

  const [statusOptions, setStatusOptions] =
    useState([]);


  /* ==========================================================
   * FILTER STATE
   * ==========================================================
   */

  const [filters, setFilters] =
    useState(INITIAL_FILTERS);


  /* ==========================================================
   * LOADING
   * ==========================================================
   */

  const [loading, setLoading] =
    useState(false);


  /* ==========================================================
   * ERROR
   * ==========================================================
   */

  const [error, setError] =
    useState(null);


  /* ==========================================================
   * FETCH BED VIEW DATA
   * ==========================================================
   */

  const fetchBedData = useCallback(
    async () => {
      setLoading(true);
      setError(null);

      try {
        const [
          bedViewResponse,
          statusResponse,
        ] = await Promise.all([
          getBedViewData(),
          getBedViewStatusOptions(),
        ]);


        /* ----------------------------------------------------
         * WARDS
         * ----------------------------------------------------
         */

        const wardData =
          Array.isArray(
            bedViewResponse?.wards
          )
            ? bedViewResponse.wards
            : [];

        setWards(wardData);


        /* ----------------------------------------------------
         * FLATTEN ROOMS
         *
         * Nested:
         *
         * ward
         *   └── rooms
         *
         * becomes:
         *
         * rooms[]
         * ----------------------------------------------------
         */

        const roomData =
          wardData.flatMap(
            (ward) =>
              Array.isArray(
                ward?.rooms
              )
                ? ward.rooms.map(
                    (room) => ({
                      ...room,

                      wardId:
                        ward.id,

                      wardName:
                        ward.name,
                    })
                  )
                : []
          );

        setRooms(roomData);


        /* ----------------------------------------------------
         * BEDS
         *
         * Service already returns
         * normalized bed records.
         * ----------------------------------------------------
         */

        const bedResponse =
          await getBedViewBeds();

        setBeds(
          Array.isArray(
            bedResponse
          )
            ? bedResponse
            : []
        );


        /* ----------------------------------------------------
         * STATUS OPTIONS
         * ----------------------------------------------------
         */

        setStatusOptions(
          Array.isArray(
            statusResponse
          )
            ? statusResponse
            : []
        );
      } catch (fetchError) {
        setWards([]);
        setRooms([]);
        setBeds([]);
        setStatusOptions([]);

        setError(fetchError);
      } finally {
        setLoading(false);
      }
    },
    []
  );


  /* ==========================================================
   * INITIAL LOAD
   * ==========================================================
   */

  useEffect(() => {
    fetchBedData();
  }, [fetchBedData]);


  /* ==========================================================
   * UPDATE FILTER
   * ==========================================================
   */

  const updateFilter = useCallback(
    (name, value) => {
      if (!name) {
        return;
      }

      setFilters(
        (previousFilters) => {
          if (
            name === "wardId"
          ) {
            return {
              ...previousFilters,

              wardId:
                value || "",

              roomId: "",
            };
          }

          return {
            ...previousFilters,

            [name]:
              value || "",
          };
        }
      );
    },
    []
  );


  /* ==========================================================
   * UPDATE MULTIPLE FILTERS
   * ==========================================================
   */

  const updateFilters = useCallback(
    (values = {}) => {
      setFilters(
        (previousFilters) => {
          const nextFilters = {
            ...previousFilters,
            ...values,
          };


          if (
            Object.prototype.hasOwnProperty.call(
              values,
              "wardId"
            )
          ) {
            nextFilters.roomId =
              "";
          }


          return nextFilters;
        }
      );
    },
    []
  );


  /* ==========================================================
   * SEARCH
   * ==========================================================
   */

  const updateSearch = useCallback(
    (value) => {
      setFilters(
        (previousFilters) => ({
          ...previousFilters,

          search:
            value || "",
        })
      );
    },
    []
  );


  /* ==========================================================
   * SELECT WARD
   * ==========================================================
   */

  const selectWard = useCallback(
    (wardId) => {
      setFilters(
        (previousFilters) => ({
          ...previousFilters,

          wardId:
            wardId || "",

          roomId: "",
        })
      );
    },
    []
  );


  /* ==========================================================
   * SELECT ROOM
   * ==========================================================
   */

  const selectRoom = useCallback(
    (roomId) => {
      setFilters(
        (previousFilters) => ({
          ...previousFilters,

          roomId:
            roomId || "",
        })
      );
    },
    []
  );


  /* ==========================================================
   * SELECT STATUS
   * ==========================================================
   */

  const selectStatus = useCallback(
    (status) => {
      setFilters(
        (previousFilters) => ({
          ...previousFilters,

          status:
            status || "",
        })
      );
    },
    []
  );


  /* ==========================================================
   * CLEAR FILTERS
   * ==========================================================
   */

  const clearFilters = useCallback(() => {
    setFilters({
      ...INITIAL_FILTERS,
    });
  }, []);


  /* ==========================================================
   * SELECTED WARD
   * ==========================================================
   */

  const selectedWard = useMemo(() => {
    if (!filters.wardId) {
      return null;
    }

    return (
      wards.find(
        (ward) =>
          normalizeValue(
            ward?.id
          ) ===
          normalizeValue(
            filters.wardId
          )
      ) || null
    );
  }, [
    wards,
    filters.wardId,
  ]);


  /* ==========================================================
   * SELECTED ROOM
   * ==========================================================
   */

  const selectedRoom = useMemo(() => {
    if (!filters.roomId) {
      return null;
    }

    return (
      rooms.find(
        (room) =>
          normalizeValue(
            room?.id
          ) ===
          normalizeValue(
            filters.roomId
          )
      ) || null
    );
  }, [
    rooms,
    filters.roomId,
  ]);


  /* ==========================================================
   * FILTERED ROOMS
   * ==========================================================
   */

  const filteredRooms = useMemo(() => {
    if (!filters.wardId) {
      return rooms;
    }

    const wardId =
      normalizeValue(
        filters.wardId
      );

    return rooms.filter(
      (room) =>
        normalizeValue(
          room?.wardId
        ) === wardId
    );
  }, [
    rooms,
    filters.wardId,
  ]);


  /* ==========================================================
   * FILTERED BEDS
   * ==========================================================
   */

  const filteredBeds = useMemo(() => {
    const searchValue =
      normalizeValue(
        filters.search
      );

    const wardValue =
      normalizeValue(
        filters.wardId
      );

    const roomValue =
      normalizeValue(
        filters.roomId
      );

    const statusValue =
      normalizeValue(
        filters.status
      );


    return beds.filter(
      (bed) => {
        /* --------------------------------------------------
         * SEARCH
         * --------------------------------------------------
         */

        if (
          searchValue
        ) {
          const searchableText =
            getBedSearchText(
              bed
            );

          if (
            !searchableText.includes(
              searchValue
            )
          ) {
            return false;
          }
        }


        /* --------------------------------------------------
         * WARD
         * --------------------------------------------------
         */

        if (
          wardValue
        ) {
          if (
            normalizeValue(
              bed?.wardId
            ) !== wardValue
          ) {
            return false;
          }
        }


        /* --------------------------------------------------
         * ROOM
         * --------------------------------------------------
         */

        if (
          roomValue
        ) {
          if (
            normalizeValue(
              bed?.roomId
            ) !== roomValue
          ) {
            return false;
          }
        }


        /* --------------------------------------------------
         * STATUS
         * --------------------------------------------------
         */

        if (
          statusValue
        ) {
          if (
            normalizeValue(
              bed?.status
            ) !== statusValue
          ) {
            return false;
          }
        }


        return true;
      }
    );
  }, [
    beds,
    filters,
  ]);


  /* ==========================================================
   * FILTERED WARD DATA
   * ==========================================================
   *
   * This is specifically useful for:
   *
   * WardSection
   *    ↓
   * RoomCard
   *    ↓
   * BedCard
   *
   * The UI gets the same nested structure as the mock.
   * ==========================================================
   */

  const filteredWardData = useMemo(() => {
    const selectedWardId =
      normalizeValue(
        filters.wardId
      );


    const selectedRoomId =
      normalizeValue(
        filters.roomId
      );


    return wards
      .filter((ward) => {
        if (!selectedWardId) {
          return true;
        }

        return (
          normalizeValue(
            ward?.id
          ) === selectedWardId
        );
      })
      .map((ward) => {
        const wardRooms =
          Array.isArray(
            ward?.rooms
          )
            ? ward.rooms
            : [];


        const nextRooms =
          wardRooms
            .filter((room) => {
              if (
                selectedRoomId
              ) {
                return (
                  normalizeValue(
                    room?.id
                  ) ===
                  selectedRoomId
                );
              }

              return true;
            })
            .map((room) => {
              const roomBeds =
                Array.isArray(
                  room?.beds
                )
                  ? room.beds
                  : [];


              const nextBeds =
                roomBeds.filter(
                  (bed) => {
                    const normalizedBed =
                      {
                        ...bed,

                        wardId:
                          ward.id,

                        wardName:
                          ward.name,

                        roomId:
                          room.id,

                        roomNumber:
                          room.roomNumber,
                      };


                    return filteredBeds.some(
                      (filteredBed) =>
                        filteredBed.id ===
                        normalizedBed.id
                    );
                  }
                );


              return {
                ...room,

                wardId:
                  ward.id,

                wardName:
                  ward.name,

                beds:
                  nextBeds,
              };
            })
            .filter(
              (room) =>
                room.beds.length > 0
            );


        return {
          ...ward,

          rooms:
            nextRooms,
        };
      })
      .filter(
        (ward) =>
          ward.rooms.length > 0
      );
  }, [
    wards,
    filteredBeds,
    filters.wardId,
    filters.roomId,
  ]);


  /* ==========================================================
   * BED STATUS COUNTS
   * ==========================================================
   */

  const bedStatusCounts = useMemo(() => {
    const counts = {};


    Object.keys(
      IPD_BED_STATUS_CONFIG
    ).forEach(
      (status) => {
        counts[status] = 0;
      }
    );


    beds.forEach(
      (bed) => {
        const status =
          normalizeValue(
            bed?.status
          );

        if (
          Object.prototype.hasOwnProperty.call(
            counts,
            status
          )
        ) {
          counts[status] += 1;
        }
      }
    );


    return counts;
  }, [beds]);


  /* ==========================================================
   * FILTERED STATUS COUNTS
   * ==========================================================
   */

  const filteredBedStatusCounts =
    useMemo(() => {
      const counts = {};


      Object.keys(
        IPD_BED_STATUS_CONFIG
      ).forEach(
        (status) => {
          counts[status] = 0;
        }
      );


      filteredBeds.forEach(
        (bed) => {
          const status =
            normalizeValue(
              bed?.status
            );

          if (
            Object.prototype.hasOwnProperty.call(
              counts,
              status
            )
          ) {
            counts[status] += 1;
          }
        }
      );


      return counts;
    }, [
      filteredBeds,
    ]);


  /* ==========================================================
   * TOTAL BEDS
   * ==========================================================
   */

  const totalBeds =
    beds.length;


  /* ==========================================================
   * FILTERED TOTAL
   * ==========================================================
   */

  const totalFilteredBeds =
    filteredBeds.length;


  /* ==========================================================
   * OCCUPIED BEDS
   * ==========================================================
   */

  const occupiedBeds =
    bedStatusCounts.occupied || 0;


  /* ==========================================================
   * AVAILABLE BEDS
   * ==========================================================
   */

  const availableBeds =
    bedStatusCounts.available || 0;


  /* ==========================================================
   * RESERVED BEDS
   * ==========================================================
   */

  const reservedBeds =
    bedStatusCounts.reserved || 0;


  /* ==========================================================
   * MAINTENANCE BEDS
   * ==========================================================
   */

  const maintenanceBeds =
    bedStatusCounts.maintenance || 0;


  /* ==========================================================
   * BLOCKED BEDS
   * ==========================================================
   */

  const blockedBeds =
    bedStatusCounts.blocked || 0;


  /* ==========================================================
   * OCCUPANCY
   * ==========================================================
   */

  const occupancyPercentage =
    totalBeds > 0
      ? Math.round(
          (
            occupiedBeds /
            totalBeds
          ) * 100
        )
      : 0;


  /* ==========================================================
   * AVAILABILITY
   * ==========================================================
   */

  const availabilityPercentage =
    totalBeds > 0
      ? Math.round(
          (
            availableBeds /
            totalBeds
          ) * 100
        )
      : 0;


  /* ==========================================================
   * FILTERED OCCUPIED
   * ==========================================================
   */

  const filteredOccupiedBeds =
    filteredBedStatusCounts
      .occupied || 0;


  /* ==========================================================
   * FILTERED AVAILABLE
   * ==========================================================
   */

  const filteredAvailableBeds =
    filteredBedStatusCounts
      .available || 0;


  /* ==========================================================
   * FILTERED OCCUPANCY
   * ==========================================================
   */

  const filteredOccupancyPercentage =
    totalFilteredBeds > 0
      ? Math.round(
          (
            filteredOccupiedBeds /
            totalFilteredBeds
          ) * 100
        )
      : 0;


  /* ==========================================================
   * FILTERED AVAILABILITY
   * ==========================================================
   */

  const filteredAvailabilityPercentage =
    totalFilteredBeds > 0
      ? Math.round(
          (
            filteredAvailableBeds /
            totalFilteredBeds
          ) * 100
        )
      : 0;


  /* ==========================================================
   * BED SUMMARY
   * ==========================================================
   */

  const bedSummary = useMemo(
    () => ({
      total:
        totalBeds,

      occupied:
        occupiedBeds,

      available:
        availableBeds,

      reserved:
        reservedBeds,

      maintenance:
        maintenanceBeds,

      blocked:
        blockedBeds,

      occupancyPercentage:
        occupancyPercentage,

      availabilityPercentage:
        availabilityPercentage,
    }),
    [
      totalBeds,
      occupiedBeds,
      availableBeds,
      reservedBeds,
      maintenanceBeds,
      blockedBeds,
      occupancyPercentage,
      availabilityPercentage,
    ]
  );


  /* ==========================================================
   * FILTERED BED SUMMARY
   * ==========================================================
   */

  const filteredBedSummary =
    useMemo(
      () => ({
        total:
          totalFilteredBeds,

        occupied:
          filteredOccupiedBeds,

        available:
          filteredAvailableBeds,

        statusCounts:
          filteredBedStatusCounts,

        occupancyPercentage:
          filteredOccupancyPercentage,

        availabilityPercentage:
          filteredAvailabilityPercentage,
      }),
      [
        totalFilteredBeds,
        filteredOccupiedBeds,
        filteredAvailableBeds,
        filteredBedStatusCounts,
        filteredOccupancyPercentage,
        filteredAvailabilityPercentage,
      ]
    );


  /* ==========================================================
   * GET BEDS FOR WARD
   * ==========================================================
   */

  const getBedsForWard =
    useCallback(
      async (wardId) => {
        if (!wardId) {
          return [];
        }

        try {
          return await getBedViewBedsByWard(
            wardId
          );
        } catch (fetchError) {
          setError(fetchError);

          return [];
        }
      },
      []
    );


  /* ==========================================================
   * GET BEDS FOR ROOM
   * ==========================================================
   */

  const getBedsForRoom =
    useCallback(
      async (roomId) => {
        if (!roomId) {
          return [];
        }

        try {
          return await getBedViewBedsByRoom(
            roomId
          );
        } catch (fetchError) {
          setError(fetchError);

          return [];
        }
      },
      []
    );


  /* ==========================================================
   * GET BED BY ID
   * ==========================================================
   */

  const getBedById =
    useCallback(
      async (bedId) => {
        if (!bedId) {
          return null;
        }

        try {
          return await getBedViewBedById(
            bedId
          );
        } catch (fetchError) {
          setError(fetchError);

          return null;
        }
      },
      []
    );


  /* ==========================================================
   * GET WARD BY ID
   * ==========================================================
   */

  const getWardById =
    useCallback(
      async (wardId) => {
        if (!wardId) {
          return null;
        }

        try {
          return await getBedViewWardById(
            wardId
          );
        } catch (fetchError) {
          setError(fetchError);

          return null;
        }
      },
      []
    );


  /* ==========================================================
   * GET ROOM BY ID
   * ==========================================================
   */

  const getRoomById =
    useCallback(
      async (roomId) => {
        if (!roomId) {
          return null;
        }

        try {
          return await getBedViewRoomById(
            roomId
          );
        } catch (fetchError) {
          setError(fetchError);

          return null;
        }
      },
      []
    );


  /* ==========================================================
   * RETURN
   * ==========================================================
   */

  return {
    /* --------------------------------------------------------
     * Raw data
     * --------------------------------------------------------
     */

    wards,

    rooms,

    beds,

    statusOptions,


    /* --------------------------------------------------------
     * Filtered data
     * --------------------------------------------------------
     */

    filteredRooms,

    filteredBeds,

    filteredWardData,


    /* --------------------------------------------------------
     * Filters
     * --------------------------------------------------------
     */

    filters,

    selectedWard,

    selectedRoom,


    /* --------------------------------------------------------
     * Summary
     * --------------------------------------------------------
     */

    bedSummary,

    filteredBedSummary,

    bedStatusCounts,

    filteredBedStatusCounts,


    /* --------------------------------------------------------
     * Counts
     * --------------------------------------------------------
     */

    totalBeds,

    totalFilteredBeds,

    occupiedBeds,

    availableBeds,

    reservedBeds,

    maintenanceBeds,

    blockedBeds,

    occupancyPercentage,

    availabilityPercentage,

    filteredOccupiedBeds,

    filteredAvailableBeds,

    filteredOccupancyPercentage,

    filteredAvailabilityPercentage,


    /* --------------------------------------------------------
     * State
     * --------------------------------------------------------
     */

    loading,

    error,


    /* --------------------------------------------------------
     * Filter actions
     * --------------------------------------------------------
     */

    updateFilter,

    updateFilters,

    updateSearch,

    selectWard,

    selectRoom,

    selectStatus,

    clearFilters,


    /* --------------------------------------------------------
     * Data actions
     * --------------------------------------------------------
     */

    fetchBedData,

    getBedsForWard,

    getBedsForRoom,

    getBedById,

    getWardById,

    getRoomById,
  };
};


export default useIPDBeds;

export const calculateRoomAllotmentStats = (data) => {
  const totalBeds = 320;

  const occupiedBeds = data.filter(
    (item) => item.status === "occupied"
  ).length;

  const availableBeds = totalBeds - occupiedBeds;

  return {
    totalBeds,
    occupiedBeds,
    availableBeds,
    totalRooms: 86,
    totalWards: 12,
    occupiedPercentage:
      totalBeds > 0
        ? Number(((occupiedBeds / totalBeds) * 100).toFixed(1))
        : 0,
    availablePercentage:
      totalBeds > 0
        ? Number(((availableBeds / totalBeds) * 100).toFixed(1))
        : 0,
  };
};

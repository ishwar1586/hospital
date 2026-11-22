
export const filterRoomAllotments = (data, filters) => {
  const searchValue = filters.search?.trim().toLowerCase() || "";

  return data.filter((item) => {
    const matchesWard =
      !filters.wardId || item.wardId === filters.wardId;

    const matchesRoomType =
      !filters.roomType ||
      item.roomType.toLowerCase().replace(/\s+/g, "-") ===
        filters.roomType;

    const matchesRoom =
      !filters.roomId || item.roomId === filters.roomId;

    const matchesStatus =
      !filters.bedStatus || item.status === filters.bedStatus;

    const searchableText = [
      item.patientName,
      item.uhid,
      item.ipdNo,
      item.ward,
      item.roomNo,
      item.bedNo,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      !searchValue || searchableText.includes(searchValue);

    return (
      matchesWard &&
      matchesRoomType &&
      matchesRoom &&
      matchesStatus &&
      matchesSearch
    );
  });
};

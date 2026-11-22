
// src/master_modules/StaffManagement/config/staffStats.config.js

import { staffStatsMock } from "../mock/staffStats.mock";

export const staffStatsConfig = staffStatsMock
  .filter((card) => card.isVisible !== false)
  .map((card) => ({
    ...card,
    visible: card.isVisible,
  }))
  .sort((a, b) => a.order - b.order);

export default staffStatsConfig;
